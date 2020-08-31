import React, { Component } from "react";
import { Parallax} from "react-materialize";

class Rowfirst extends Component {
  render() {
    return (
      <div>
        <Parallax image={<img src="./photos/four-min.jpg" alt="sksk" />}/>
        
      </div>
    );
  }
}

export default Rowfirst;
