import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Contact from "./Contact";
import Images from "./Images";
import Slideimgs from "./Slider";
import Reference from "./Reference";
import Rowlast from "./Rowlast";
import Icons from "./Icons";
import Rowfirst from "./Rowfirst";
import Carouselslide from "./Carouselslide";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slideimgs />
        <Content />
        <Carouselslide />
        <Icons />
       <Rowfirst/>
        <Reference />
        <Rowlast />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default Main;
