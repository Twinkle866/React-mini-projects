import { createRoot } from "react-dom/client";
import Counter from "./components/Counter/Counter.jsx";
import Todo from "./components/Todo/Todo.jsx";
import Meals from "./components/MealsAPI/Meals.jsx";
import Calculator from "./components/Calculator/Calculator.jsx"


createRoot(document.getElementById("root")).render(  
  <>
    {/* <Counter/> */}
    {/* <Todo/>*/}
    {/* {<Meals/>} */}
   {<Calculator/>}
  </>
);
