import React from "react";
import ReactDOM from "react-dom";

function ShoppingTitle(props) {
  return (
    <div>
      <h2>{props.title} </h2>
      <p>{props.description} </p>
    </div>
  );
}

function ShoppingOptions(props) {
  return (
    <div>
      <h2> {props.title} </h2>
      <div>
        {props.message}
        <input
          type="checkbox"
          id={props.id}
          name={props.name}
          value={props.value}
        />
      </div>
      <div>
        <p>
          {props.message2}
          <select>
            <option value={props.options[0]}>{props.options[0]}</option>
            <option value={props.options[1]}>{props.options[1]}</option>
            <option value={props.options[2]}>{props.options[2]}</option>
            <option value={props.options[3]}>{props.options[3]}</option>
          </select>
        </p>
      </div>
    </div>
  );
}

function ListItems(props) {
  return (
    <ul>
      <table>
        <tbody>
          <tr>
            <th> {props.attrTitle[0]} </th>
            <th> {props.attrTitle[1]} </th>
            <th> {props.attrTitle[2]} </th>
            <th> {props.attrTitle[3]} </th>
          </tr>
          <tr>
            <td> {props.attrValue[0]} </td>
            <td> {props.attrValue[1]} </td>
            <td> {props.attrValue[2]} </td>
            <td>
              <button> Buy now </button>
            </td>
          </tr>
        </tbody>
      </table>
    </ul>
  );
}

function ShoppingApp() {
  var ListItemsHeaders = ["Year", "Model", "Price", "Buy"];
  var cars = [
    ["2013", "A", "32000"],
    ["2011", "B", "4400"],
    ["2016", "B", "15500"]
  ];
  var trucks = [["2014", "D", "18000"], ["2013", "E", "5200"]];
  var convertibles = [
    ["2009", "F", "2000"],
    ["2010", "G", "6000"],
    ["2012", "H", "12500"],
    ["2017", "M", "50000"]
  ];

  return (
    <div>
      <ShoppingTitle
        title="Welcome to React Transportation"
        description="The best place to buy vehicles online"
      />

      <ShoppingOptions
        title="Choose Options"
        message="New Only"
        message2="Select Type "
        options={["All", "Cars", "Trucks", "Convertibles"]}
      />

      <ShoppingList
        title="Cars"
        listItemsHeaders={ListItemsHeaders}
        cars={cars}
      />

      <ShoppingList
        title="Trucks"
        listItemsHeaders={ListItemsHeaders}
        cars={trucks}
      />

      <ShoppingList
        title="Convertibles"
        listItemsHeaders={ListItemsHeaders}
        cars={convertibles}
      />
    </div>
  );
}

function ShoppingList(props) {
  return (
    <div>
      <h2> {props.title} </h2>
      {props.cars.map(function iterator(car, key) {
        return <ListItems attrTitle={props.listItemsHeaders} attrValue={car} />;
      })}
    </div>
  );
}

ReactDOM.render(<ShoppingApp />, document.getElementById("root"));
