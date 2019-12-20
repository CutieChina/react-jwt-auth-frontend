import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import DisplayForum from '../Forum/DisplayForum'
import DisplayMessage from '../Forum/DisplayMessage'
// import DisplayThread from '../Forum/DisplayThread'
// import DisplayThreadList from '../Forum/DisplayThreadList'
import MakeMessage from '../Forum/MakeMessage'
// import MakeThread from '../Forum/MakeThread'
const databaseUrl = 'http://localhost:3000'

// const herokuBackendUrl = 'https://project-3-kpcc-backend.herokuapp.com'
// const databaseUrl = process.env.NODE_ENV === 'production' ? herokuBackendUrl : 'http://localhost:3000'
class Forums extends Component {
    constructor(props) {
        super()
        this.state = {
            // url: ''
            check: false,
            // Forum_name: props.Forum_name,
            // triggerThread: false,
            newThread: {},
            newPath: '',
        }
        this.handleClick = this.handleClick.bind(this)
        this.showThread = this.showThread.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
  
 
    handleChange(e) {
        let newThread = {
            [e.target.name]: e.target.value
        }
        newThread.forum = this.props.newPath
        // newThread.forum = this.props.location.pathname
        // let newLocation = newThread.forum
        // let newPath = newLocation.slice(8);
        this.setState(prevState => (
            { newThread: { ...prevState.newThread, ...newThread } }
        ))
    }
    handleClick(e) {
        e.preventDefault()
        this.setState({
            check: !this.state.check
        })
        axios({
            url: `${databaseUrl}/api/forums`,
            method: 'post'
        })
            .then(response => {
                this.setState({ forums: response.data.forums })
            })
    }
    showThread(e) {
        e.preventDefault()
        this.setState({
            triggerThread: true
        })
    }
    render() {


        return (

            <Container>
                <Row className="nav" >
                    <a href="/" className="btn btn-home" role="link" aria-pressed="true">MESSIAH</a>
                </Row>
                <Row className="forum-title" >
                    <h2>{this.props.forumName} Anonymous</h2>
                </Row>
                <Row>
                    <Col>
                        <Container className="side-bar">
                           
                        </Container>
                    </Col>
                </Row>
                {/* <MakeThread /> */}
                {/* <DisplayThreadList />
                <DisplayThread /> */}
                <MakeMessage />
                <DisplayMessage />
            <DisplayForum />
            </Container>

        )
    }
}
export default Forums;