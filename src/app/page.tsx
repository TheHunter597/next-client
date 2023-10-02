"use client";
import { useState } from "react";
export default function Home() {
  let [number, setNumber] = useState(0);
  return (
    <div>
      <h1>The Current number is</h1>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
    </div>
  );
}
