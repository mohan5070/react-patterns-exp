const { useState, useCallback, Children, cloneElement } = require("react");

function CompoundCount(props) {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const allProps = { handleClick, count };

  return (
    <div>
      {Children.map(props.children, (child) => {
        return cloneElement(child, allProps, null);
      })}
    </div>
  );
}

function Display({ count }) {
  return <div>{count}</div>;
}

function Button({ handleClick }) {
  return <button onClick={handleClick}>Click me</button>;
}

CompoundCount.Display = Display;
CompoundCount.Button = Button;

export { CompoundCount };
