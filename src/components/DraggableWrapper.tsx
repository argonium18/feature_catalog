// DraggableWrapper.tsx
import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
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
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Grid } from '@mui/material';

interface DraggableItemProps {
  id: string;
  children: React.ReactNode;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ id, children }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: isDragging ? 'none' : transition,
    opacity: isDragging ? 0.3 : 1,
    cursor: isDragging ? 'grabbing' : 'grab',
  };

  return (
    <Grid
      item
      size={{ xs: 12, sm: 6, lg: 4 }}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      {children}
    </Grid>
  );
};

interface DraggableWrapperProps {
  children: React.ReactElement[];
  onReorder: (newOrder: string[]) => void;
}

export const DraggableWrapper: React.FC<DraggableWrapperProps> = ({
  children,
  onReorder
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id && over) {
      const oldIndex = children.findIndex(child => child.key === active.id);
      const newIndex = children.findIndex(child => child.key === over.id);
      
      if (oldIndex !== -1 && newIndex !== -1) {
        const newOrder = arrayMove(
          children.map(child => child.key as string), 
          oldIndex, 
          newIndex
        );
        onReorder(newOrder);
      }
    }

    setActiveId(null);
  };

  const activeChild = children.find(child => child.key === activeId);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={children.map(child => child.key as string)}
        strategy={rectSortingStrategy}
      >
        <Grid container spacing={2}>
          {children.map((child) => (
            <DraggableItem key={child.key} id={child.key as string}>
              {child}
            </DraggableItem>
          ))}
        </Grid>
      </SortableContext>

      <DragOverlay>
        {activeChild && (
          <div style={{ 
            transform: 'rotate(5deg)',
            opacity: 0.95,
            boxShadow: '0 5px 15px rgba(0,0,0,0.25)'
          }}>
            {activeChild}
          </div>
        )}
      </DragOverlay>
    </DndContext>
  );
};