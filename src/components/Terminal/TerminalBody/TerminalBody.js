import React from 'react';
import styles from './TerminalBody.module.css'

const TerminalBody = (props) => {
  return (

    <div className={styles.TerminalBody}>
      <form>
          <p>{props.history.join("\n")}</p>
        <label>{props.prefix} {props.prompt}</label>
        <input className={"terminalInput"} type={'text'} value={props.value} onChange={props.changed} onKeyDown={props.keyDown} autoFocus />
      </form>
    </div>

  );

}

export default TerminalBody;
