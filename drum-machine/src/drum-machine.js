import React from 'react';
//import ReactDOM from 'react-dom';
import './drum-machine.css';

const drums = [{
  keyCode: 81,
  letter: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
 {
  keyCode: 87,
  letter: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
 {
  keyCode: 69,
  letter: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
 {
  keyCode: 65,
  letter: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
 {
  keyCode: 83,
  letter: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'}, 
 {
  keyCode: 68,
  letter: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'}, 
{
  keyCode: 90,
  letter: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'}, 
{
  keyCode: 88,
  letter: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'}, 
{
  keyCode: 67,
  letter: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}];

class Drums extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
    window.focus()
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }
  
  handleKeyDown = event => {
    if(event.keyCode === this.props.letter.charCodeAt()){
      this.handleClick();
      this.props.handleDisplay(this.props.id);
    }
  }

  handleClick = () => {
    const sound = document.getElementById(this.props.letter);
    sound.currentTime = 0;
    sound.play();
    this.props.handleDisplay(this.props.id);
  }

  render(){
    return(
        <div className='drum-pad' id={this.props.id + this.props.letter} onClick={this.handleClick}>
            {this.props.letter}
          <audio className='clip' id={this.props.letter} src={this.props.url}></audio>
        </div>
    );
  }
}

class DrumDisplay extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      display: 'Press a Button'
    }
    this.handleDisplay = this.handleDisplay.bind(this);
  }

  handleDisplay(display) {
    this.setState({
      display: display
    });
  } 

  render(){
    return(
      <div id="drum-machine" className="container">
      <h1 className="display-1"> Drum Machine </h1>
      <p id = "display">{this.state.display}</p>
      <div id = "drum-elements" >
        {drums.map((drum) => (
          <Drums
            key = {drum.id}
            id = {drum.id}
            keycode = {drum.keyCode}
            letter = {drum.letter}
            url = {drum.url}
            handleDisplay = {this.handleDisplay}
            />
        ))}
      </div>
      </div>
    );
  }
}

//ReactDOM.render(<DrumDisplay />, document.getElementById('root'));
export default DrumDisplay;
