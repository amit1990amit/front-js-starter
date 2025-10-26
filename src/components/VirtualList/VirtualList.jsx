import React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

export default function VirtualList({ items, estimateHeight = 60, renderRow }) {
  // This ref will point at the scrollable container div
  const parentRef = React.useRef(null);

  // Create a virtualizer instance for this container
  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => estimateHeight, // px per row (rough guess)
  });

  const virtualItems = rowVirtualizer.getVirtualItems();
  const totalSize = rowVirtualizer.getTotalSize();

  return (
    <div
      ref={parentRef}
      style={{
        height: '400px',           // fixed viewport height -> scrollable area
        width: '100%',
        overflow: 'auto',
        position: 'relative',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
    >
      {/* big spacer element that represents total height */}
      <div
        style={{
          height: totalSize,
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualItems.map((virtualRow) => {
          const item = items[virtualRow.index];

          return (
            <div
              key={virtualRow.key}
              ref={rowVirtualizer.measureElement} // allows dynamic height measurement
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${virtualRow.start}px)`,
                padding: '12px 16px',
                borderBottom: '1px solid #eee',
                backgroundColor:
                  virtualRow.index % 2 === 0 ? '#fff' : '#fafafa',
              }}
            >
              {renderRow(item, virtualRow.index)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
