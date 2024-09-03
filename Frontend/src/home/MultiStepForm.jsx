import React from "react";
import Navbar from "../components/Navbar";
import LinerStepper from '../components/LinearStepper'

function MultiStepForm() {
  return (
    <>
      <Navbar />
      <div className=" max-w-screen-2xl container mx-auto md:px-20 p-20 flex flex-col md:flex-col my-10">
        <div><h1 className="text-center md:text-5xl text-xl pb-10">Welcome</h1></div>
      <LinerStepper/>
      </div>
    </>
  );
}

export default MultiStepForm;
