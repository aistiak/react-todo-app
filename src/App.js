import React from 'react';
import AddItem from "./components/AddItem"
import ItemList from "./components/ItemList"
import CompletedList from "./components/completedList"
import {} from "./redux.js"
import { useDispatch } from "react-redux"
import "./App.css"
function App() {
  return (
    <div className="main">
      <AddItem/>
      <ItemList/>
      <CompletedList/>
    </div>
  );
}

export default App;
