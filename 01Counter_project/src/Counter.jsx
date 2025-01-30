import { useState } from "react";

function Counter(props) {
  let [count, setCount] = useState(18);

  function decrease() {
    if (count > 0) {
      alert(`you want to decrease the value : ${count}`);
      setCount(count - 1);
    } else {
      alert("You dont decrease value less than 0");
    }
  }

  function increase() {
    if (count < 20) {
      alert(`you want to increase the value : ${count}`);
      setCount(count + 1);
    } else {
      alert("you dont increase the value greater than 20");
    }
  }

  console.log(count);

  return (
    <>
      <button onClick={decrease}>-</button>
      {count}
      <button onClick={increase}>+</button>
    </>
  );
}

export default Counter;
