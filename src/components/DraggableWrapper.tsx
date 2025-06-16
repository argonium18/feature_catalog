import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Box } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

interface DraggableItemProps {
  id: string;
  children: React.ReactNode;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  return (
    <Box
      ref={setNodeRef}
      sx={{
        flex: '1 1 300px',
        minWidth: 300,
        maxWidth: 400,
        position: 'relative',
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <Box
        {...attributes}
        {...listeners}
        sx={{
          position: 'absolute',
          left: 8,
          top: 8,
          width: 24,
          height: 24,
          bgcolor: 'rgba(0,0,0,0.04)',
          borderRadius: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'grab',
          zIndex: 2,
          '&:hover': { bgcolor: 'rgba(0,0,0,0.08)' },
          '&:active': { cursor: 'grabbing' },
        }}
      >
        <DragIndicatorIcon sx={{ fontSize: 16, color: '#666' }} />
      </Box>
      {children}
    </Box>
  );
};

interface DraggableWrapperProps {
  children: React.ReactElement[];
  onReorder?: (newOrder: string[]) => void;
}

export const DraggableWrapper: React.FC<DraggableWrapperProps> = ({
  children,
  onReorder = () => {},
}) => {
  const ids = children.map((child) => child.key!.toString());
  const [order, setOrder] = useState(ids);
  const [draggedId, setDraggedId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setDraggedId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = order.indexOf(active.id as string);
      const newIndex = order.indexOf(over.id as string);
      const newOrder = arrayMove(order, oldIndex, newIndex);
      setOrder(newOrder);
      onReorder(newOrder);
    }
    setDraggedId(null);
  };

  const draggedChild = draggedId ? children.find((c) => c.key === draggedId) : null;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={order} strategy={rectSortingStrategy}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, width: '100%' }}>
          {order.map((id) => {
            const child = children.find((c) => c.key === id)!;
            return (
              <DraggableItem key={id} id={id}>
                {child}
              </DraggableItem>
            );
          })}
        </Box>
      </SortableContext>

      <DragOverlay>
        {draggedChild && (
          <Box
            sx={{
              rotate: '3deg',
              opacity: 0.9,
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              minWidth: 300,
              maxWidth: 400,
            }}
          >
            {draggedChild}
          </Box>
        )}
      </DragOverlay>
    </DndContext>
  );
};