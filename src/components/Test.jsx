import { useState } from "react";

function Test({ count, onClick, message }) {
  return (
    <>
      <h1>hello</h1>
      <div className="card">
        <div>{message}</div>
        <button onClick={onClick}>count is {count}</button>
      </div>
    </>
  );
}

export default Test;
