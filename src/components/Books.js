import React from "react";
import Loading from "./Loading";

const Books = ({ loading, isError, bookList }) => {
  return (
    <main>
      <div className="container">
        {loading ? (
          <Loading />
        ) : isError ? (
          <div className="loading">Something Went Wrong!</div>
        ) : (
          bookList.map((book, index) => {
            const {
              id,
              volumeInfo: {
                title,
                subtitle,
                infoLink,
                publisher,
                publishedDate,
              },
            } = book;

            const image = book.volumeInfo.hasOwnProperty("imageLinks")
              ? book.volumeInfo.imageLinks.thumbnail
              : "none";

            const authors = book.volumeInfo.hasOwnProperty("authors")
              ? book.volumeInfo.authors
              : "No Found";

            return (
              <a
                href={infoLink}
                key={id}
                target="_blank"
                className="card card-body"
                rel="noreferrer"
              >
                <img
                  src={
                    image === "none"
                      ? "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Placeholder_book.svg/2000px-Placeholder_book.svg.png"
                      : image
                  }
                  alt="book"
                />
                <div className="book-info">
                  <h2 className="book-title">{title}</h2>
                  <p>
                    <b>Author: </b>
                    {authors === "No Found" ? authors : authors.join(", ")}
                  </p>
                  <p>
                    <b>Publisher: </b>
                    {publisher}
                  </p>
                  <p>
                    <b>Published: </b>
                    {publishedDate}
                  </p>
                  <p className="about-book">{subtitle}</p>
                </div>
              </a>
            );
          })
        )}
      </div>
    </main>
  );
};

export default Books;
