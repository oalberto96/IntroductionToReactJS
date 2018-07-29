import React from "react";
import ReactDOM from "react-dom";

function Circle(props) {
  var color = "white";
  if (props.cell == 1) {
    color = "black";
  } else if (props.cell == 2) {
    color = "red";
  }
  var style = {
    backgroundColor: color,
    border: "1px solid black",
    borderRadius: "100%",
    paddingTop: "98%"
  };

  return <div style={style}> </div>;
}

function Cell(props) {
  var style = {
    height: 50,
    width: 50,
    border: "1px solid black",
    backgroundColor: "yellow"
  };

  return (
    <div style={style} onClick={() => props.handleClick(props.row, props.col)}>
      <Circle cell={props.cell} />
    </div>
  );
}

function Row(props) {
  var style = {
    display: "flex"
  };
  var cells = [];
  for (let i = 0; i < 7; i++) {
    cells.push(
      <Cell
        key={i}
        cell={props.cells[i]}
        row={props.row}
        col={i}
        handleClick={props.handleClick}
      />
    );
  }
  return <div style={style}>{cells}</div>;
}

function Board(props) {
  var rows = [];
  for (let i = 5; i >= 0; i--) {
    rows.push(
      <Row
        key={i}
        row={i}
        cells={props.cells[i]}
        handleClick={props.handleClick}
      />
    );
  }
  return <div> {rows} </div>;
}

class Game extends React.Component {
  constructor(props) {
    super(props);

    var cells = [];
    for (let i = 0; i < 6; i++) {
      cells.push(new Array(7).fill(0));
    }
    this.state = { player: false, cells: cells, winner: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(row, col) {
    console.log("row: " + row + " | col: " + col);
  }

  render() {
    return (
      <div>
        <h1> Blacks turn </h1>
        <Board cells={this.state.cells} handleClick={this.handleClick} />
        <button> Restart </button>
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
