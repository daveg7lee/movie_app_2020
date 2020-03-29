import React from "react";

function Food({ fav }) {
  return <h3>I like {fav}</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="Chicken" />
      <Food fav="Ramen" />
      <Food fav="Cheese" />
      <Food fav="Rise" />
    </div>
  );
}
export default App;
