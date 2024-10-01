import React, { useState } from "react";
import InputArea from "./inputArea";
import ToDoItem from "./toDoItem";
import "./App.css";

const App = () => {
  const [items, setItems]  = useState([]);

  function addItem(inputText){
    setItems((prevItems) => {
      return [...prevItems,inputText];
    })
  }

  function deleteItem(id){
    setItems((prevItems) => {
      return prevItems.filter((item,index) => {
        return id!== index;
      });
    });
  }

  console.log(items);
  return (
    <div className="container1">
      <div className="heading">
        <h1>To-Do App</h1>
      </div>
      <InputArea addItem = {addItem} />
      <div>
        <ul>
          {
            items.map((todoItem,index) => {
              return <ToDoItem key={index} text ={todoItem} id = {index} deleteItem = {deleteItem} />;
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
 
