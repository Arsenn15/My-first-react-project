import {Component} from "react";
import AddSearch from "./components/addSearch";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
        <div>
          <AddSearch/>
        </div>
    )
  }
}

export default App;