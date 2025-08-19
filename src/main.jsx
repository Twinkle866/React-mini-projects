import { createRoot } from "react-dom/client";
import Counter from "./components/Counter/Counter.jsx";
import Todo from "./components/Todo/Todo.jsx";
import Meals from "./components/MealsAPI/Meals.jsx";
import Calculator from "./components/Calculator/Calculator.jsx"
import Hidden from "./components/HiddenSearchBar/Hidden.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Accordian from "./components/Accordians/Accordian.jsx";


createRoot(document.getElementById("root")).render(  
  <>
    {/* <Counter/> */}
    {/* <Todo/>*/}
    {/* {<Meals/>} */}
   {/* {<Calculator/>} */}
   {/* <Hidden/> */}
   {/* <Testimonials/> */}
   <Accordian/>
  </>
);
