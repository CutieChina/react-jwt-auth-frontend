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
      document.body.style.backgroundImage = ("url('https://thumbs.gfycat.com/SkinnyHandmadeCobra-small.gif')")
      // document.body.style.backgroundColor = "#000000";

      console.log(this.props)

        const steps = [
          {
            id: '0',
            message: "What Are You Doing Here",
            trigger: '1',
          },
          {
            id: '1',
            user: true,
            inputAttributes: {
              keyboardType: 'email-address'
            },
            trigger: '2'
          },
          {
            id: '2',
            message: "Where Are We Gonna Go",
            trigger: '3',
          },
          {
            id: '3',
            options: [
              { value: 1, label: "To work", trigger: '4' },
              { value: 2, label: "To school", trigger: '4' },
              { value: 3, label: "To a graveyard", trigger: '4' },
            ],
          },
          {
            id: '4',
            message: "It's like we Just Woke Up One Morning, And Then It's Welcome To The Show",
            trigger: '5',
          },
          {
            id: '5',
            options: [
              { value: 1, label: "What do you mean?", trigger: '6' },
            ],
          },
        {
          id: '6',
          message: "Don't Ask Any Questions Just Go With The Flow",
          trigger: '7',
        },
        {
          id: '7',
          message: "Make As Much Money As You Can, And Try Your Best Not To Get Broke.",
          trigger: '8',
        },
        {
          id: '8',
          message: "Co py Ev ery thi ng You Se e On A T. V.",
          trigger: '9'
        },
        {
          id: '9',
          message: "F r o m A H a i r s t y l e s T o T h e C l o t h e s. ",
          trigger: '10'
        },
        {
          id: '10',
          message: " ∀ND D∅∏'T THI∏K T∅ ∅FT∃∏, J∇ST D∅ ∃X∀CTLY ∀S Y∅U'R∃ T∅ΓD",
          end:true
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
            <blockquote>&nabla; WARNING: IF YOU ARE SCARED OF THE PARANORMAL, HAVE CHANCES OF PTSD FROM ANY HORRIFIC EVENTS, AND/OR PSYCHOLOGICALLY UNFIT FOR HORROR *PLEASE DO NOT CLICK PLAY NOR CONTINUE ON THIS SITE* &nabla;</blockquote>
        </div>
        )
    }
}

export default Bot