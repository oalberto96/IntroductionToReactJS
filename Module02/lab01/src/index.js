import React from "react";
import ReactDOM from "react-dom";

function Question(props) {
  return <h1> {props.question}</h1>;
}

function Option(props) {
  return (
    <button onClick={() => props.handleClick(props.value)}>
      {props.value}
    </button>
  );
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    var n1 = this.generateRandom(1, 10);
    var n2 = this.generateRandom(1, 10);
    var options = this.generateArrayWithOptions(n1 * n2);
    this.state = { incorrect: 0, correct: 0, n1: n1, n2: n2, options: options };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    var correct = this.state.correct;
    var incorrect = this.state.incorrect;
    var n1 = this.generateRandom(1, 10);
    var n2 = this.generateRandom(1, 10);
    var options = this.generateArrayWithOptions(n1 * n2);
    value == this.state.n1 * this.state.n2 ? correct++ : incorrect++;
    this.setState({
      incorrect: incorrect,
      correct: correct,
      n1: n1,
      n2: n2,
      options: options
    });
  }

  render() {
    return (
      <div>
        <Question
          question={"What is " + this.state.n1 + " X " + this.state.n2}
        />
        <Option handleClick={this.handleClick} value={this.state.options[0]} />
        <Option handleClick={this.handleClick} value={this.state.options[1]} />
        <Option handleClick={this.handleClick} value={this.state.options[2]} />
        <Option handleClick={this.handleClick} value={this.state.options[3]} />
        <h2>Correct: {this.state.correct} </h2>
        <h2>Incorrect: {this.state.incorrect} </h2>
      </div>
    );
  }

  generateArrayWithOptions(correctOption) {
    var options = [];
    for (let i = 0; i < 4; i++) {
      options.push(
        this.generateRandom(
          0,
          correctOption + correctOption * this.generateRandom(0, 3)
        )
      );
    }
    options[this.generateRandom(0, 4)] = correctOption;
    return options;
  }

  generateRandom(min, max) {
    return Math.floor(Math.random() * max) + min;
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
