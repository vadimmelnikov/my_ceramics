import { useState, useEffect } from 'react';

import {
  TABLET_WIDTH,
  DESKTOP_WIDTH,
  MOBILE_WIDTH,
  DESKTOP_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
} from '@constants';


export default function useLayouts() {
  const [layout, setLayout] = useState(DESKTOP_WIDTH);

  const handleSwitchDesktop = ({ matches }) => {
    setLayout(matches ? TABLET_WIDTH : DESKTOP_WIDTH);
  };

  const handleSwitchTablet = ({ matches }) => {
    setLayout(matches ? MOBILE_WIDTH : TABLET_WIDTH);
  };

  useEffect(() => {
    const mediaQueryDesktop = window.matchMedia(DESKTOP_MEDIA_QUERY);

    const mediaQueryTablet = window.matchMedia(TABLET_MEDIA_QUERY);

    mediaQueryDesktop.addListener(handleSwitchDesktop);

    mediaQueryTablet.addListener(handleSwitchTablet);

    if (mediaQueryTablet.matches) {
      setLayout(MOBILE_WIDTH);
    } else if (mediaQueryDesktop.matches) {
        setLayout(TABLET_WIDTH);
      }

    return () => {
      mediaQueryDesktop.removeListener(handleSwitchDesktop);

      mediaQueryTablet.removeListener(handleSwitchTablet);
    }

  }, []);

  return layout;
}
