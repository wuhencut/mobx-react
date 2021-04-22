import { inject, observer } from "mobx-react";
import React from "react";
@inject("count") @observer
class App extends React.Component {
  render() {
    const { count } = this.props;
    return <div>
      <button onClick={() => count.minus()}>-</button>
      <div>{count.num}</div>
      <button onClick={() => count.plus()}>+</button>
    </div>;
  }
}
export default App;
