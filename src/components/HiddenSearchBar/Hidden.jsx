import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Style.css";

const Hidden = () => {
  const [showInput, setShowInput] = useState(false);

  const toggleSearch = () => {
    setShowInput(!showInput);
  };

  return (
    <section className={`container ${showInput ? "active" : ""}`}>
      <div className="search-box">
        {showInput ? (
          <>
            <input type="text" placeholder="Search..." autoFocus />
            <FaSearch onClick={toggleSearch} className="search-icon active-icon" />
          </>
        ) : (
          <FaSearch onClick={toggleSearch} className="search-icon" />
        )}
      </div>
    </section>
  );
};

export default Hidden;