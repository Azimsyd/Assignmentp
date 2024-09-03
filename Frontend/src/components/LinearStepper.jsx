import React from 'react'
import { Stepper, Step, StepLabel, Typography, TextField, Button } from "@mui/material"
import { useState } from 'react'
// import { useForm } from 'react-hook-form'

function getSteps() {
  return [
    "Basic Info",
    "Contact info",
    "personal info"
  ]
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-full px-4 py-2 border rounded-md outline-none"
            // {...register("fullname", { required: true })}
            />
            {/* <br /> */}
            {/* {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )} */}
          </div>
          <div className="mt-3 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md outline-none"
            // {...register("fullname", { required: true })}
            />
            {/* <br /> */}
            {/* {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )} */}
          </div>
          <div className="mt-3 space-y-2">
            <span>Number</span>
            <br />
            <input
              type="number"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded-md outline-none"
            // {...register("fullname", { required: true })}
            />
            {/* <br /> */}
            {/* {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )} */}
          </div>
          <div className="mt-3 space-y-2">
            <span>Address line one</span>
            <br />
            <input
              type="text"
              placeholder="Enter your address 1"
              className="w-full px-4 py-2 border rounded-md outline-none"
            // {...register("fullname", { required: true })}
            />
            {/* <br /> */}
            {/* {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )} */}
          </div>
          <div className="mt-3 space-y-2">
            <span>Address line two</span>
            <br />
            <input
              type="text"
              placeholder="Enter your address 2"
              className="w-full px-4 py-2 border rounded-md outline-none"
            // {...register("fullname", { required: true })}
            />
            {/* <br /> */}
            {/* {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )} */}
          </div>
          <div className='flex flex-col md:flex-row md:space-x-20'>
            <div className="mt-3 space-y-2">
              <span>City</span>
              <br />
              <input
                type="text"
                placeholder="Enter your city"
                className="w-full px-4 py-2 border rounded-md outline-none"
              // {...register("fullname", { required: true })}
              />
              {/* <br /> */}
              {/* {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )} */}
            </div>
            <div className="mt-3 space-y-2">
              <span>State</span>
              <br />
              <input
                type="text"
                placeholder="Enter your state"
                className="w-full px-4 py-2 border rounded-md outline-none"
              // {...register("fullname", { required: true })}
              />
              {/* <br /> */}
              {/* {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )} */}
            </div>
            <div className="mt-3 space-y-2">
              <span>Pincode</span>
              <br />
              <input
                type="number"
                placeholder="Enter your pincode"
                className="w-full px-4 py-2 border rounded-md outline-none"
              // {...register("fullname", { required: true })}
              />
              {/* <br /> */}
              {/* {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )} */}
            </div>
            <div className="mt-3 space-y-2">
              <span>Country</span>
              <br />
              <input
                type="text"
                placeholder="Enter your country"
                className="w-full px-4 py-2 border rounded-md outline-none"
              // {...register("fullname", { required: true })}
              />
              {/* <br /> */}
              {/* {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )} */}
            </div>
          </div>
        </>
      );

    case 1:
      return (
        <>
          <div className='flex justify-center items-center my-10'>
            <div class="w-full max-w-lg p-6 bg-gray-black rounded-lg shadow-md">
              <h2 class="text-2xl font-semibold mb-4">Upload Files</h2>
              <form action="/upload" method="post" enctype="multipart/form-data">
                <div class="mb-4">
                  <label for="files" class="block text-sm font-medium text-gray-700 mb-2">Select files (PNG, PDF only):</label>
                  <input type="file" id="files" name="files[]" accept=".png, .pdf" multiple
                    class="block w-full text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  <p class="text-xs text-gray-500 mt-1">You can upload up to 3 files.</p>
                </div>
              </form>
            </div>
          </div>
        </>
      );

    case 2:
      return (
        <>
          <div class=" flex items-center justify-center my-5">
            <div class="w-full max-w-lg p-6 rounded-lg shadow-md">
              <h2 class="text-2xl font-semibold mb-4">Multi-Field Select Dropdown Form</h2>
              <form onsubmit="handleSubmit(event)">
                <div class="mb-4">
                  <label for="options" class="block text-sm font-medium mb-2">Select options:</label>
                  <select id="options" name="options[]" multiple
                    class="block w-full p-2 space-y-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value="Option1">Option 1</option>
                    <option value="Option2">Option 2</option>
                    <option value="Option3">Option 3</option>
                    <option value="Option4">Option 4</option>
                    <option value="Option5">Option 5</option>
                  </select>
                  <p class="text-xs mt-1">Hold down Ctrl (or Cmd) to select multiple options.</p>
                </div>
              </form>
            </div>
          </div>
        </>
      );
    default:
      return "unknown step";
  }
}

const LinearStepper = () => {
  const [activeStep, setactiveStep] = useState(0)
  const [skippedSteps, setSkippedSteps] = useState([])
  const steps = getSteps()

  const isStepOptional = (step) => {
    return step === 1;
  }
  const isStepSkipped = (step) =>{
    return skippedSteps.includes(step);
  }


  const handleNext = () => {
    setactiveStep(activeStep + 1)
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep))
  }
  const handleBack = () => {
    setactiveStep(activeStep - 1)
  }

  const handleSkip =()=>{
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep])    
    }
    setactiveStep(activeStep + 1)
  }

  return (
    <>
        <Stepper alternativeLabel activeStep={activeStep} className=' invert'>
          {steps.map((step, index) => {
              const labelProps ={};
              const stepProps = {};
              if (isStepOptional(index)) {
                labelProps.optional =(
                  <Typography variant='caption'>optional</Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.Completed = false;
              }
              return (
                <Step {...stepProps} key={index}>
                  <StepLabel {...labelProps} >{step}</StepLabel>
                </Step>
              )
            })
          }
        </Stepper>

      {activeStep === 3 ? (
        <Typography variant="h3" className='text-center'>Thank You</Typography>
      ) : (
        <>
          <div className=''>
            <form>{getStepContent(activeStep)}</form>
          </div>
          <div className='flex justify-around mt-5'>
            <Button variant="contained" className='invert' disabled={activeStep === 0} onClick={handleBack}>Back</Button>
            <div className='flex gap-4'>
              {isStepOptional(activeStep) && (
                <Button variant="contained" className='invert' onClick={handleSkip}>Skip</Button>
              )}
              <Button variant="contained" className='invert' onClick={handleNext}>{activeStep === 2 ? "Submit" : "Next"}</Button>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default LinearStepper

