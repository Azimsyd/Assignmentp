import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import MultiStepForm from "./home/MultiStepForm";
import Table from "./table/Table";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
        <Routes>
          <Route path="/" element={<MultiStepForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/table" element={<Table />}/>
        </Routes>
        <Toaster />
    </>
  );
}

export default App;
