import React, { Component, Fragment } from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Exercises from "./Exercises";
import { muscles, exercises } from "../stor";

export default class extends Component {
  state = {
    exercises
  };

  getExerciseByMuscle() {
    return this.state.exercises;
  }

  render() {
    console.log(this.getExerciseByMuscle());
    return (
      <Fragment>
        <Header />
        <Exercises />
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}
