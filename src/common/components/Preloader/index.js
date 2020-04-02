import React from 'react';

// import preloader from '@assets/preloader.image.svg';

import styles from './index.styl';

const Preloader = () => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.anim} />
      {/* <img src={preloader} alt="preloader" className={styles.img} /> */}
    </div>
  </div>
);

export default Preloader;
