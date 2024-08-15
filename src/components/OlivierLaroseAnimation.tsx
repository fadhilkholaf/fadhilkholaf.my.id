import { useEffect, useState } from 'react';

import { cn } from '@/utils/cn';

export default function OlivierLaroseAnimation() {
  const [position, setPosition] = useState<'top' | 'bottom'>();

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      const cursor = document.getElementById('cursor');
      const article = document.getElementById('article');

      if (cursor && article) {
        const cursorRect = cursor.getBoundingClientRect();
        const articleRect = article.getBoundingClientRect();

        if (cursorRect && articleRect) {
          if (cursorRect.top < articleRect.top) {
            setPosition('top');
          } else if (cursorRect.bottom > articleRect.bottom) {
            setPosition('bottom');
          }
        }
      }
    };

    window.addEventListener('mousemove', (e) => mouseMove(e));

    return () => {
      window.removeEventListener('mousemove', (e) => mouseMove(e));
    };
  }, []);

  return (
    <div
      id="article"
      className={cn(
        'relative h-10 w-screen overflow-hidden after:absolute after:h-full after:w-full after:bg-secondary after:transition-transform after:duration-300 after:ease-in-out hover:after:translate-y-0',
        {
          'after:-translate-y-full': position === 'top',
          'after:translate-y-full': position === 'bottom'
        }
      )}
    ></div>
  );
}
