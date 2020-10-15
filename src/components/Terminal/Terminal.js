import React from 'react';
import styles from './Terminal.module.css'
import TerminalHeader from "./TerminalHeader/TerminalHeader";
import TerminalBody from "./TerminalBody/TerminalBody";

class Terminal extends React.Component {
    state = {
        prompt: '>',
        promptPrefix: '~',
        commandHistory: '',
        terminalValue: '',
        terminalLog: ''
    }
    componentDidMount() {
        window.addEventListener('keydown', (event) => {
            if(event.key === 'Enter'){
                console.log('Entered')
            }
        })
    }
  render() {
    return (

        <div className={styles.Terminal}>
          <TerminalHeader/>
          <TerminalBody prefix={this.state.promptPrefix} prompt={this.state.prompt}/>
        </div>

    );
  }



}

export default Terminal;
