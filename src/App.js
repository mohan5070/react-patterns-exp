import Count from "./Count";
import { CompoundCount } from "./CompoundComponent";

import "./styles.css";
import { FlexibleCompoundCounter } from "./FlexibleCounter";
import HOCCount from "./HOCCount";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Count />
      <hr />
      <CompoundCount>
        <CompoundCount.Display />
        <CompoundCount.Button />
      </CompoundCount>
      <hr />
      <FlexibleCompoundCounter>
        <FlexibleCompoundCounter.Display />
        <FlexibleCompoundCounter.Button />
      </FlexibleCompoundCounter>
      <hr />
      <HOCCount />
    </div>
  );
}
