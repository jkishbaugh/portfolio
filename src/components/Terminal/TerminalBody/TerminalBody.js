import React from 'react';
import styles from './TerminalBody.module.css'

const TerminalBody = (props) => {
  return (

    <div className={styles.TerminalBody}>
      <form>
        <label>{props.prefix} {props.prompt}</label>
        <input type={'text'} autoFocus />
      </form>
    </div>

  );

}

export default TerminalBody;
