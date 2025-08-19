import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";

function Meals() {
  const [items, setitems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setitems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemslist = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card" key={idMeal}>
        <img src={strMealThumb} alt={strMeal} />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          color: "black",   // ya "maroon"
          margin: "20px 0",
          fontFamily: "sans-serif",
          fontSize: "2.5rem",
          letterSpacing: "2px",
        }}
      >
        SeaFood Meals
      </h1>

      <div className="items-container">{itemslist}</div>
    </div>
  );
}

export default Meals;
