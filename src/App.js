import './App.css';
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foodsDB from "./foods.json";
import { useState } from "react";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';


function App() {
  const [foods, setFoods] = useState(foodsDB)

  //function addFood
  const addNewFood = (food) => {
    const updatedFoods = [foods, food];
    setAddFoods(updatedFoods)
  };


  //function searchFood

  //function Delete

  return (
    <div className="App">

      <Divider>Food List</Divider>
      <Button> Hide Form / Add New Food </Button>
      <AddFoodForm />

      {foods.map((foodElement) => (
        <FoodBox item={foodElement} />
      )
      )}

      <AddFoodForm a />

    </div>
  )
}

export default App;
