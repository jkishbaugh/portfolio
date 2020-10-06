import React from 'react';
import styles from './HeaderImage.module.css'
import header from '../../assets/header_image.png'

const HeaderImage = () => {
  return (

    <div className={styles.HeaderImage}>
      <img src={header} alt={"Banner"}/>
    </div>

  );

}

export default HeaderImage;
