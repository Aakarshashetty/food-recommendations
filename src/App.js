import './App.css';
import { useState } from "react";
import "./styles.css";

const foodList = {
  Continental: [
    { name: "Crispy Calamari Rings", rating: "4/5" },
    { name: "Quick Salted Caramel Pie", rating: "4/5" },
    { name: "Chicken and Cheese Salad", rating: "5/5" }
  ],
  Indian: [
    { name: "Butter Chicken", rating: "5/5" },
    { name: "Hyderabi Biriyani", rating: "5/5" },
    { name: "Idli Sambar", rating: "4/5" }
  ],
  Asian: [
    { name: " Vietnamese Dumplings", rating: "4/5" },
    { name: "Japanese Prawn Tempura", rating: "3.5/5" },
    { name: "Chilli Chicken", rating: "5/5" }
  ]
};

var foodArray = Object.keys(foodList);
// console.log(foodArray);

function App() {
  const [food, setFood] = useState("");
  function clickFoodHandler(item) {
    // console.log("clicked!",item);
    setFood(item);
  }
  return (
    <div className="App">
      <h1>Fab Fooooood😋</h1>
      <p>
        Check out my favourite food. Try at home and relish a delcious spread
      </p>
      {foodArray.map((item) => {
        return (
          <span onClick={() => clickFoodHandler(item)} style={{}} key={item}>
            {item}
          </span>
        );
      })}
      <hr />
      <div className="list">
        <ul>
          {food
            ? foodList[food].map((foodType) => (
                <li key={foodType.name}>
                  {" "}
                  <div>
                    {foodType.name}
                    <br /> <small>{foodType.rating}</small>
                  </div>
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
}

export default App;
