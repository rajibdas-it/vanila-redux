import React, { useState } from "react";

const Counter = () => {
  //   const [count, setCount] = useState(0);

  //   const handleIncrement = () => {
  //     // setCount(count + 1); normal way.
  //     setCount((prevCount) => prevCount + 1); //paranormal way
  //   };

  //   const handleDecrement = () => {
  //     setCount((prevCount) => prevCount - 1);
  //   };

  const initialState = [
    {
      id: 1,
      count: 0,
    },
    {
      id: 2,
      count: 0,
    },
  ];

  const [state, setState] = useState(initialState);

  const handleIncrement = (id) => {
    const updateCounter = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count + 1,
        };
      }
      return {
        ...c,
      };
    });
    setState(updateCounter);
  };

  const handleDecrement = (id) => {
    const updateCounter = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count - 1,
        };
      }
    });
    setState(updateCounter);
  };
  console.log(state);
  return (
    <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div class="text-2xl font-semibold" id="value">
        {state.count}
      </div>
      <div class="flex space-x-3">
        <button
          class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          id="increment"
          onClick={() => handleIncrement(1)}
        >
          Increment
        </button>
        <button
          class="bg-red-400 text-white px-3 py-2 rounded shadow"
          id="decrement"
          onClick={() => handleDecrement(1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
