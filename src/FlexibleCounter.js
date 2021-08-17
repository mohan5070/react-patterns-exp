const { useState, useCallback, createContext, useContext } = require("react");
const CounterContext = createContext(undefined);

function CounterProvider({ children, value }) {
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

function useCounterContext() {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
}

function FlexibleCompoundCounter(props) {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const allProps = { handleClick, count };

  return <CounterProvider value={allProps}>{props.children}</CounterProvider>;
}

function Display() {
  const { count } = useCounterContext();
  return <div>{count}</div>;
}

function Button() {
  const { handleClick } = useCounterContext();
  return <button onClick={handleClick}>Click me</button>;
}

FlexibleCompoundCounter.Display = Display;
FlexibleCompoundCounter.Button = Button;

export { FlexibleCompoundCounter };
