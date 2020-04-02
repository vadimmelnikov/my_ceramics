import { useState } from 'react';
import useEventListener from './useEventListener';

export default function useLayout(screenWidth) {
  const [layout, setLayout] = useState(window.innerWidth > screenWidth);

  const handleResize = () => {
    setLayout(window.innerWidth > screenWidth);
  };

  useEventListener('resize', handleResize);

  return layout;
}
