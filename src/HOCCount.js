const { useState, useCallback } = require("react");
// this is usefull if multiple components using same logic and only
// few details are different.  example apis are different and
//rendering logic is same..

function Count({ count, handleClick }) {
  return (
    <>
      <div>{count}</div>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

function HOCCount(Component) {
  return function WrapperComponent(props) {
    const [count, setCount] = useState(1);

    const handleClick = useCallback(() => {
      setCount((count) => count + 1);
    }, []);

    return <Component count={count} handleClick={handleClick} />;
  };
}

export default HOCCount(Count);
