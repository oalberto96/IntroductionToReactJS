import React from "react";
import ReactDOM from "react-dom";

function InputLabel(props) {
  return (
    <div>
      <label>{props.label}</label>
      <br />
      <input id={props.id} onChange={props.handleTextChange} />
    </div>
  );
}

function CourseRestrictions(props) {
  var options = props.options.map((item, index) => {
    return (
      <div>
        <input
          onChange={props.handleInputChange}
          type="checkbox"
          value={props.values[index]}
        />
        {item}
        <br />
      </div>
    );
  });
  return options;
}

function CourseActivity(props) {
  var options = props.options.map((item, index) => {
    return (
      <option key={index} value={index}>
        {item}
      </option>
    );
  });
  return (
    <div>
      <label>{props.label}</label>
      <br />
      <select onChange={props.onChange}>{options}</select>
      <br />
    </div>
  );
}

function Course(props) {
  return (
    <tr>
      <td>
        <button onClick={props.removeCourse}>X</button>
      </td>
      <td>{props.first_name}</td>
      <td>{props.last_name}</td>
      <td>{props.activity}</td>
      <td>{props.restrictions}</td>
    </tr>
  );
}

function CourseList(props) {
  return (
    <table>
      <tr>
        <th>Remove</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Activity</th>
        <th>Restrictions</th>
      </tr>
      {props.courses.map((item, index) => {
        return (
          <Course
            first_name={item.first_name}
            last_name={item.last_name}
            activity={item.activity}
            restrictions={item.restrictions}
            removeCourse={() => props.removeCourse(index)}
          />
        );
      })}
    </table>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.courses = ["Science Lab", "Swimming", "Cooking", "Painting"];
    this.state = {
      first_name: "xa",
      last_name: "",
      course_selected: 0,
      courses: [],
      a: false,
      b: false,
      c: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event) {
    var new_value = {};
    new_value[event.target.id] = event.target.value;
    this.setState(new_value);
  }

  handleChange(event) {
    this.setState({ course_selected: event.target.value });
  }

  handleInputChange(event) {
    const dictionary = {};
    dictionary[event.target.value] = !this.state[event.target.value];
    this.setState(dictionary);
  }

  handleClick(event) {
    this.addCourse();
  }

  removeCourse(index) {
    var newCoursesList = this.state.courses.slice();
    newCoursesList.splice(index, 1);
    this.setState({ courses: newCoursesList });
  }

  addCourse() {
    var coursesCopy = this.state.courses.slice();
    var restrictions = [];
    this.state.a && restrictions.push("a");
    this.state.b && restrictions.push("b");
    this.state.c && restrictions.push("c");
    coursesCopy.push({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      activity: this.courses[this.state.course_selected],
      restrictions: restrictions.join()
    });
    this.setState({ courses: coursesCopy });
  }

  render() {
    return (
      <div>
        <InputLabel
          handleTextChange={this.handleTextChange}
          id="first_name"
          label="First Name"
        />
        <InputLabel
          handleTextChange={this.handleTextChange}
          id="last_name"
          label="Last Name"
        />
        <CourseActivity
          label="Select Activity"
          options={this.courses}
          onChange={this.handleChange}
        />
        <CourseRestrictions
          handleInputChange={this.handleInputChange}
          options={[
            "a) Dietary Restrictions",
            "b) Physical Disabilities",
            "c) Medical Needs"
          ]}
          values={["a", "b", "c"]}
        />
        <button onClick={this.handleClick}>Submit</button>
        <CourseList
          removeCourse={this.removeCourse.bind(this)}
          courses={this.state.courses}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
