import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { questions } from "./Quiz";

class QuestionPage extends React.Component {
  constructor(props) {
    super(props);

    // set state using this.state  
    // console.log("1. constructor")
    this.state = {
      emoji: null
    }
  }

  getRandomEmoji() {
    const randomEmojis = ["👺", "🐣", "🦋", "🚳", "🌮", "🔮", "🎒"];
    let randomIndex = Math.floor(Math.random() * randomEmojis.length);
    console.log("getRandomEmoji=", randomEmojis[randomIndex])
    return randomEmojis[randomIndex];
  }

  componentDidMount() {
    // console.log("3. componentDidMount")
    let randomEmoji = this.getRandomEmoji();
    this.setState({
      emoji: randomEmoji
    });

  }

  componentDidUpdate(prevProps, prevState) {
    console.log("4. componentDidUpdate")
    let randomEmoji = this.getRandomEmoji();
    if(prevState.emoji !== randomEmoji) {
      
      this.setState({
        emoji: randomEmoji
      });
    }
  }

  componentWillUnmount() {
    // console.log("5. componentWillUnmount")
  }

  render() {
    // console.log("2. render")
    return (
      <Box sx={{border: "1px dashed grey"}}>
        <Typography>
          {this.state.emoji}
        </Typography>

        <Typography>
          Question {this.props.questionNumber} / {questions.length}
        </Typography>

        <Typography>{questions[this.props.questionNumber]}</Typography>

        {this.props.questionNumber < questions.length && <Button variant="outlined" onClick={this.props.incrementNumber} >Next</Button> }
        
      </Box>
    )
  }
}

export default QuestionPage;
