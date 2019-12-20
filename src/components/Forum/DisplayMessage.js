import React from 'react';
import axios from 'axios';
import { Button, Card} from 'react-bootstrap';
const databaseUrl = 'http://localhost:3000'
// const herokuBackendUrl = 'https://project-3-kpcc-backend.herokuapp.com'
// const databaseUrl = process.env.NODE_ENV === 'production' ? herokuBackendUrl : 'http://localhost:3000'

// http://amwbackend.herokuapp.com/api/

class DisplayMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      messages: []
    }
  }

  getMessages = () => {
    axios({
      url: `${databaseUrl}/api/messages/`,
      method: 'get'
    })
      .then(response => {
        console.log(response)
        this.setState({
          messages: response.data.messages
        })
      })
  }

  deleteMessage = (id) => {
    console.log('deleteMessage', id)
  axios({
      url: `http://localhost:3000/api/messages/${id}`,
      method: 'delete'
    })
      .then(response => {
        // this.setState({ users: response.data.users })
        this.setState({deleted:true})
      })
  }

  // deleteMessage = (e) => {
  //   // this.props.deleteMessage(e)
  // }

  componentDidMount() {
    this.getMessages()
    console.log("message object", this.state.messages)
  }

  handleDelete = (e, message) => {
    console.log("happy")
    // e.preventDefault()
    this.deleteMessage(message.id)
    window.location.reload(true)
}

  render() {

    let date= (new Date(this.props.updatedAt)).toLocaleString();

    let messagesOutput = this.state.messages.map((message,index) => {
      if (this.state.messages) {
        return (
          <div>{message.message}<button onClick={e => this.handleDelete(e, message)}>Delete</button>
          </div>
        )
      } else {
        return (
          <div>goodbye</div>
        )
      }
    })

    return (
      <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          {/* <Card.Title>{this.props.userId}</Card.Title> */}
          <Card.Text>
            {/* {this.props.message} */}
            {messagesOutput}
          </Card.Text>
          <Button className="btn btn-secondary" onClick={e => this.deleteMessage(e)} name={this.props.messageId}>Delete Message</Button>
        </Card.Body>
        <Card.Footer className="text-muted">{date}</Card.Footer>
      </Card>
    );
  }
}
export default DisplayMessage;