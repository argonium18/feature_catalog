import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverlay,
  DragStartEvent
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Grid, Box } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

interface DraggableItemProps {
  id: string;
  children: React.ReactNode;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ 
    id,
    transition: {
      duration: 150,
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    }
  });

  return (
    <Grid
      item
      size={{ xs: 12, sm: 6, lg: 4 }}
      ref={setNodeRef}
      sx={{
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <Box sx={{ position: 'relative' }}>
        {/* ドラッグハンドル - カード左上に配置 */}
        <Box
          {...attributes}
          {...listeners}
          sx={{
            position: 'absolute',
            left: 8,
            top: 8,
            width: 24,
            height: 24,
            backgroundColor: 'rgba(0,0,0,0.04)',
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'grab',
            zIndex: 2,
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.08)' },
            '&:active': { cursor: 'grabbing' },
          }}
        >
          <DragIndicatorIcon sx={{ fontSize: 16, color: '#666' }} />
        </Box>
        {children}
      </Box>
    </Grid>
  );
};

interface DraggableWrapperProps {
  children: React.ReactElement[];
  onReorder?: (newOrder: string[]) => void;
}

export const DraggableWrapper: React.FC<DraggableWrapperProps> = ({ 
  children, 
  onReorder = () => {} 
}) => {
  const [items, setItems] = useState(children);
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id && over) {
      const ids = items.map((_, index) => index.toString());
      const oldIndex = ids.indexOf(active.id as string);
      const newIndex = ids.indexOf(over.id as string);
      
      if (oldIndex !== -1 && newIndex !== -1) {
        const newItems = arrayMove(items, oldIndex, newIndex);
        setItems(newItems);
        onReorder(newItems.map((_, index) => index.toString()));
      }
    }
    setActiveId(null);
  };

  const draggedItem = activeId ? items[parseInt(activeId)] : null;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext 
        items={items.map((_, index) => index.toString())} 
        strategy={rectSortingStrategy}
      >
        <Grid container spacing={2}>
          {items.map((child, index) => (
            <DraggableItem key={index} id={index.toString()}>
              {child}
            </DraggableItem>
          ))}
        </Grid>
      </SortableContext>

      <DragOverlay>
        {draggedItem && (
          <Box sx={{ 
            width: 'auto',
            transform: 'rotate(3deg)',
            opacity: 0.9,
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            pointerEvents: 'none',
          }}>
            <Box sx={{ 
              border: '1px solid #e0e0e0',
              borderRadius: 1,
              backgroundColor: 'white',
              position: 'relative',
            }}>
              <Box sx={{ position: 'relative' }}>
                {draggedItem}
              </Box>
            </Box>
          </Box>
        )}
      </DragOverlay>
    </DndContext>
  );
};