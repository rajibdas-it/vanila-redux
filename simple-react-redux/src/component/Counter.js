import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // setCount(count + 1); normal way.
    setCount((prevCount) => prevCount + 1); //paranormal way
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div class="text-2xl font-semibold" id="value">
        {count}
      </div>
      <div class="flex space-x-3">
        <button
          class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          id="increment"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          class="bg-red-400 text-white px-3 py-2 rounded shadow"
          id="decrement"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
