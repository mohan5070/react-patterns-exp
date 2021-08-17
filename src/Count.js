const { useState, useCallback } = require("react");

function Count() {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <>
      <div>{count}</div>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default Count;
