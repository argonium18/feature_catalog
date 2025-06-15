// DraggableWrapper.tsx
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
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

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
      <Box sx={{ 
        position: 'relative',
        border: '1px solid #e0e0e0',
        borderRadius: 1,
        height: '100%',
      }}>
        {/* ドラッグハンドル */}
        <Box
          {...attributes}
          {...listeners}
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 20,
            height: '100%',
            backgroundColor: '#f5f5f5',
            borderRight: '1px solid #e0e0e0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'grab',
            zIndex: 1,
            '&:hover': { backgroundColor: '#eeeeee' },
            '&:active': { cursor: 'grabbing' },
          }}
        >
          <DragIndicatorIcon sx={{ fontSize: 14, color: '#999' }} />
        </Box>
        
        {/* コンテンツ */}
        <Box sx={{ 
          marginLeft: '20px',
          userSelect: 'text',
          height: '100%',
        }}>
          {children}
        </Box>
      </Box>
    </Grid>
  );
};

interface DraggableWrapperProps {
  children: React.ReactElement[];
  onReorder: (newOrder: string[]) => void;
}

export const DraggableWrapper: React.FC<DraggableWrapperProps> = ({ children, onReorder }) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [draggedItem, setDraggedItem] = useState<React.ReactElement | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const id = event.active.id as string;
    setActiveId(id);
    setDraggedItem(children.find(child => child.key === id) || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id && over) {
      const ids = children.map(child => child.key as string);
      const oldIndex = ids.indexOf(active.id as string);
      const newIndex = ids.indexOf(over.id as string);
      
      if (oldIndex !== -1 && newIndex !== -1) {
        onReorder(arrayMove(ids, oldIndex, newIndex));
      }
    }

    setActiveId(null);
    setDraggedItem(null);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={children.map(child => child.key as string)} strategy={rectSortingStrategy}>
        <Grid container spacing={2}>
          {children.map((child) => (
            <DraggableItem key={child.key} id={child.key as string}>
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
              <Box sx={{ marginLeft: '20px' }}>
                {draggedItem}
              </Box>
            </Box>
          </Box>
        )}
      </DragOverlay>
    </DndContext>
  );
};