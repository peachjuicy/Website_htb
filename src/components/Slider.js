import React, { Component } from "react";
import { Slider, Slide, Caption } from "react-materialize";

class Slideimgs extends Component {
  render() {
    return (
      <div>
        <Slider options={{indicators: false, interval:2000}}>
          <Slide image={<img src="./photos/1-min.jpg" alt="sksk"></img>}>
            
          </Slide>
          <Slide image={<img src="./photos/four-min.jpg" alt="sksk"></img>}>
            <Caption placement="left">
              <h3>Left Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img src="./photos/one-min.jpg" alt="sksk"></img>}>
            
          </Slide>
          <Slide image={<img src="./photos/five-min.jpg" alt="sksk"></img>}>
            <Caption placement="left">
              <h3>This is our big Tagline!</h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </Caption>
          </Slide>
        </Slider>
      </div>
    );
  }
}

export default Slideimgs;
