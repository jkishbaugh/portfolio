import React from 'react';
import styles from './FooterImage.module.css'
import header from '../../assets/header_image.png'

const FooterImage = () => {
  return (

    <div className={styles.HeaderImage}>
      <img src={header} alt={"Banner"}/>
    </div>

  );

}

export default FooterImage;
