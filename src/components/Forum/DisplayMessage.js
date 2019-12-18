import React from 'react';
import axios from 'axios';
import { Container, Button, Card, Accordion } from 'react-bootstrap';
const databaseUrl = 'http://localhost:3000'
// const herokuBackendUrl = 'https://project-3-kpcc-backend.herokuapp.com'
// const databaseUrl = process.env.NODE_ENV === 'production' ? herokuBackendUrl : 'http://localhost:3000'
class DisplayMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      message: 'default message',
      userId: -1,
      updatedAt: 'default time'
    }
    this.getOneMessage = this.getOneMessage.bind(this)
  }
  getOneMessage = (messageId) => {
    axios({
      url: `${databaseUrl}/api/messageItems/${messageId}`,
      method: 'get'
    })
      .then(response => {
        this.setState({
          message: response.data.messageItems.message,
          userId: response.data.messageItems.userId,
          updatedAt: response.data.messageItems.updatedAt,
        })
      })
  }
  deleteMessage = (e) => {
    this.props.deleteMessage(e)
  }
  componentDidMount() {
    this.getOneMessage(17)
  }
  render() {



    let date= (new Date(this.props.updatedAt)).toLocaleString();


    return (
      <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          {/* <Card.Title>{this.props.userId}</Card.Title> */}
          <Card.Text>
            {this.props.message}
          </Card.Text>
          <Button className="btn btn-secondary" onClick={e => this.deleteMessage(e)} name={this.props.messageId}>Delete Message</Button>
        </Card.Body>
        <Card.Footer className="text-muted">{date}</Card.Footer>
      </Card>
    );
  }
}
export default DisplayMessage;