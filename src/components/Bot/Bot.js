import React, {Component} from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
// import ChatBot from '../../lib/index';
import './Bot.css';

const theme = {
    botAvatar: '#000000',
    background: '#000000',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#000000',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

class Bot extends Component {
    constructor() {
        super()
    }

    render() {
      document.body.style.backgroundImage = "url('http://25.media.tumblr.com/tumblr_m90gmpfzbY1rbw6bto1_500.gif')"
      console.log(this.props)

        const steps = [
          {
            id: '0',
            message: "Welcome",
            trigger: '1',
          },
          {
            id: '1',
            message: 'mamacita',
            end: true,
          },
         
        ];
        

    return(
            
        <div className='botbody'>
            {/* <div style={{display: 'flex', justifyContent: 'center'}}> */}
            <ThemeProvider theme={theme}>
        <ChatBot 
        // speechSynthesis={{ enable: true, lang: 'en', }} 
        steps={steps} 
        />
        </ThemeProvider>
            {/* </div> */}
        </div>
        )
    }
}

export default Bot