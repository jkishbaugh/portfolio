import React from 'react';
import styles from './Terminal.module.css'
import TerminalHeader from "./TerminalHeader/TerminalHeader";
import TerminalBody from "./TerminalBody/TerminalBody";

class Terminal extends React.Component {
    state = {
        prompt: '>',
        promptPrefix: '~',
        commandHistory: [],
        terminalValue: '',
        terminalLog: '',
    }

    inputChangedHandler(event){
        let updatedState = this.state;
        updatedState.terminalValue = event.target.value;
        this.setState({...updatedState})
    }

    onKeyDownEvent(event){
        if(event.key === 'Enter'){
            event.preventDefault();
            this.addToHistory(this.state.terminalValue)
            this.setState({terminalValue: ''})
        }
    }
    addToHistory(command){
        let newHistory = this.state.commandHistory
        newHistory.push(command)
        this.setState({commandHistory: newHistory})
        console.log(this.state.commandHistory)
    }
  render() {
    return (

        <div className={styles.Terminal}>
          <TerminalHeader/>
          <TerminalBody keyDown={event => this.onKeyDownEvent(event)}
                        changed={(event) => this.inputChangedHandler(event)}
                        value={this.state.terminalValue} prefix={this.state.promptPrefix}
                        prompt={this.state.prompt}
                        history={this.state.commandHistory}
          />
        </div>

    );
  }



}

export default Terminal;
