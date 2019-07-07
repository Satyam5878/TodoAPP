import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItems: false
  };

  handleChange = event => {
    this.setState({
      item: event.target.value
    });
    //console.log("Item changed to: " + this.state.item);
  };
  handleSubmit = event => {
    event.preventDefault();
    const newItem = {
      item: this.state.item,
      id: this.state.id
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      id: uuid(),
      item: "",
      editItems: false
    });
    //console.log(newItem);
  };

  handleClear = event => {
    this.setState({
      items: []
    });
  };
  handleDelete = (id) => {
    console.log("Handle Delet in APP");
    const filteredItems = this.state.items.filter((item) => item.id !==id);
    this.setState({
      items:filteredItems
    });
  };

  handleEdit = (editItem) =>{
    const filteredItems = this.state.items.filter((item) => item.id !== editItem.id);
    this.setState({
      items:filteredItems,
      item:editItem.item,
      id:editItem.id,
      editItems:true
    });
  };

  render() {
    return (
      <div className="conatiner">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItems={this.state.editItems}
            >
              {" "}
            </TodoInput>
            <TodoList items={this.state.items} handleClear={this.handleClear}
                      handleDelete={this.handleDelete}
                      handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
