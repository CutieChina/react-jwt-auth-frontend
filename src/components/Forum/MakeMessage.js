import React from 'react';
import axios from 'axios';
import {  Button, InputGroup, FormControl} from 'react-bootstrap';
// import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
const databaseUrl = 'http://localhost:3000'

class MakeMessage extends React.Component {
  state = {
    newMessage: '',
  }

createMessage = (e) => {
  // e.preventDefault()
  
  axios(
    {
      method: 'post',
      url: `${databaseUrl}/api/messages`,
      data: {
        message: this.state.newMessage
      }
    })
    .then(response => {
      console.log(response)
      
    })
    .catch(err => console.log(err))
}

  render() {
    return (
      <div className="ComponentBorder">
        <div className="App">
          <h1>Tell Your Secret</h1>
          <form onSubmit={e => this.createMessage(e)}>
            <InputGroup size="lg" id="messages"
              // name={this.state.thread.id}
              aria-describedby="basic-addon1"
              variant="outline-secondary"
              className="mb-3">
              <FormControl className="message-input"
                textarea id="textareabox" name="textarea1" placeholder="What's on your mind..." onChange={(e) => this.setState({ newMessage: e.target.value })}
              />
              <InputGroup.Prepend>
                <Button className="btn btn-danger" type="submit">SUBMIT</Button>
              </InputGroup.Prepend>
            </InputGroup>
            {/* {messageList} */}
          </form>
        </div>
      </div>
    );
  }
}

export default MakeMessage;