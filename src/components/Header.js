import React from "react";
import { BiSearch } from "react-icons/bi";

const Header = ({ handleSubmit, input, setInput }) => {
  return (
    <header>
      <div className="container">
        <h1 className="logo-title">
          BOOK<span>FINDER</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter the Book or Author"
          />
          <button type="submit" className="submit-btn">
            <BiSearch />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
