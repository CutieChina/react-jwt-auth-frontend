import React from 'react';
import './Home.css'
// import Bot from '../Bot/Bot'
import TTT from '../TTT/TTT'


class Home extends React.Component {

    render() {
        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/11/3b/40/113b40e515fdf3326d78c5a9bafce7cc.gif')"
        return(
    <div>
        <TTT />
        <h1 className='title'> Pl&nabla;y With M&exist;</h1>
        <blockquote>&nabla; WARNING: IF YOU ARE SCARED OF THE PARANORMAL, HAVE CHANCES OF PTSD FROM ANY HORRIFIC EVENTS, AND/OR PSYCHOLOGICALLY UNFIT FOR HORROR *PLEASE DO NOT CLICK PLAY NOR CONTINUE ON THIS SITE* &nabla;</blockquote>
       
    </div>
        )
    }
}


export default Home