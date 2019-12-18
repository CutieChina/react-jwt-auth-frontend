// import React, { Component } from 'react';
// import './App.css';
// import { Container, Card, Row, Col, Button, } from 'react-bootstrap';
// import axios from 'axios';
// import { Link } from "react-router-dom"
// import AnimeIMG from "./Images/20f6e3b764e4f26231ff0cc5b8b68865.jpg"
// import MusicIMG from "./Images/37821.jpg"
// import OracleIMG from "./Images/fullsizeoutput_6be0.jpg"
// import SportsIMG from "./Images/nyKIn6ZJ_400x400.jpg"
// const databaseUrl = 'http://localhost:3000'
// // const herokuBackendUrl = 'https://project-3-kpcc-backend.herokuapp.com'
// // const databaseUrl = process.env.NODE_ENV === 'production' ? herokuBackendUrl : 'http://localhost:3000'
// class Home extends React.Component {
//   state = {
//     users: [],
//     subject: [],
//     forums: []
//   }
//   componentDidMount() {
//     this.getUsers()
//     this.getForums()
//   }
//   getForums = () => {
//     axios({
//       url: `${databaseUrl}/api/forums`,
//       method: 'get'
//     })
//       .then(response => {
//         this.setState({ forums: response.data.forums })
//       })
//   }
//   getUsers = () => {
//     axios({
//       url: `${databaseUrl}/api/users`,
//       method: 'get'
//     })
//       .then(users => {
//         this.setState({ users })
//       })
//   }
//   render() {
//     console.log(this.state)
//     return (
//       <Container>
//         <Row className="forum">
//           <Card sm={3} style={{ width: '15rem' }}>
//             <Card.Body>
//               <Card.Title>Anime </Card.Title>
//               <Card.Img className="forum-img" variant="top" src={AnimeIMG} />
//               <Card.Text>
//                 Where fans from around the world can gather to discuss anime and Japanese culture! All anime fans are welcome.
//               </Card.Text>
//               <Link to="/anime" className="btn btn-danger" role="button" aria-pressed="true">Anime</Link>
//             </Card.Body>
//           </Card>
//           <Card sm={3} style={{ width: '15rem' }}>
//             <Card.Body>
//               <Card.Title>Music </Card.Title>
//               <Card.Img className="forum-img" variant="top" src={MusicIMG} />
//               <Card.Text>
//                 The place to discuss music of all genres! Be it todays top headlines or sharing your original content, this is the place to be.
//               </Card.Text>
//               <Link to="/music" className="btn btn-danger" role="button" aria-pressed="true">Music</Link>
//             </Card.Body>
//           </Card>
//           <Card sm={3} style={{ width: '15rem' }}>
//             <Card.Body>
//               <Card.Title>Oracle Cards </Card.Title>
//               <Card.Img className="forum-img" variant="top" src={OracleIMG} />
//               <Card.Text>
//                 Here we discuss Oracle decks, ivination decks, meditation cards, and cartomantic or non-Tarot decks of all kinds.
//               </Card.Text>
//               <Link to="/oraclecards" className="btn btn-danger" role="button" aria-pressed="true">Oracal Cards</Link>
//             </Card.Body>
//           </Card>
//           <Card sm={3} style={{ width: '15rem' }}>
//             <Card.Body>
//               <Card.Title>Sports </Card.Title>
//               <Card.Img className="forum-img" variant="top" src={SportsIMG} />
//               <Card.Text>
//                 The ultimate sports fan community where we share and dicuss current news, fantisay teams and video games.
//               </Card.Text>
//               <Link to="/sports" className="btn btn-danger" role="button" aria-pressed="true">Sports</Link>
//             </Card.Body>
//           </Card>
//         </Row>
//       </Container>
//     );
//   }
// }
// export default Home;