import React, { useEffect, useRef, useState } from 'react';

function ElegantCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };

    const handleMouseEnter = (e) => {
      let isInteractive = false;

      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        isInteractive = true;
      }

      if (e.target.classList && e.target.classList.contains('interactive')) {
        isInteractive = true;
      }

      let parent = e.target.parentElement;
      while (parent && !isInteractive) {
        if (parent.tagName === 'BUTTON' || parent.tagName === 'A') {
          isInteractive = true;
        }
        if (parent.classList && parent.classList.contains('interactive')) {
          isInteractive = true;
        }
        parent = parent.parentElement;
      }

      if (isInteractive) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`elegant-cursor ${isHovering ? 'hovering' : ''}`}
    >
      <div className="cursor-dot-elegant"></div>
      <div className="cursor-ring-elegant"></div>
    </div>
  );
}

export default ElegantCursor;
