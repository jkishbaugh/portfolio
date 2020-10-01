import React from 'react';
import styles from './Resume.module.css'
import resume from '../../assets/resume.jpg'

const Resume = () => {
  return (

    <div className={styles.Resume}>
      <img src={resume} alt={"resume"}/>
    </div>

  );

}

export default Resume;
