import { useState, useEffect } from 'react';

export default () => {
  const [fullHeight, setFullHeight] = useState(0);

  const updateFullHeight = () => {
    setFullHeight(window.innerHeight);
  };

  useEffect(() => {
    updateFullHeight();
    window.addEventListener('resize', updateFullHeight);

    return () => {
      window.removeEventListener('resize', updateFullHeight);
    };
  }, []);

  return fullHeight;
};
