import React from "react";

const Mainstrcture = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="mypic" />
          <div className="cardinfo">
            <h3 className="title">{props.title}</h3>
            <span className="des">{props.des}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainstrcture;
