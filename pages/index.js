import React, { useState } from "react";

const Joke = () => {
  const [joke, setJoke] = useState("");

  const getJoke = async () => {
    const res = await fetch("/api/joke");
    const data = await res.json();
    setJoke(data.joke);
  };

  return (
    <>
      <button onClick={getJoke}>Get a Joke!</button>
      <p>{joke}</p>
    </>
  );
};

export default Joke;

