import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Books from "./components/Books";

function App() {
  const [bookList, setBookList] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setIsError(false);
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${input}&startIndex=0&maxResults=30`;

    fetch(URL)
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        if (data.items !== undefined) {
          setBookList(data.items);
          setLoading(false);
        } else {
          setLoading(false);
          setIsError(true);
        }
      })
      .catch((error) => {
        setIsError(true);
        console.log(error);
      });
  };

  return (
    <>
      <Header handleSubmit={handleSubmit} input={input} setInput={setInput} />
      <Books loading={loading} isError={isError} bookList={bookList} />
      <Footer />
    </>
  );
}

export default App;
