import React from "react";
import "./BookCard.css";

const BookCard = props => (
  <div className="card">
    <div className="content">
      <div id="img-container">
        <img alt="" src={props.image} />
      </div>

      <a href={props.link} id="book-link">
        <button> View</button>
      </a>
      <button id="save-link" onClick={props.saveBook}>
        Save
      </button>

      <ul>
        <li>
          <strong>Title:</strong> {props.title}
        </li>
        <li>
          <strong>Authors:</strong> {props.authors}
        </li>
        <li>
          <strong>Description:</strong> {props.description}
        </li>
      </ul>
    </div>
  </div>
);

export default BookCard;
