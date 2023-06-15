import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Tour from "../pages/Tour";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TourDetails from "../pages/TourDetails";
import SearchResultList from "../pages/SearchResultList";
import Contact from "../pages/Contact";
import ThanhYou from "../pages/ThanhYou";
import CreateTour from "../pages/CreateTour.tsx";
import PaymentSuccess from "../pages/PaymentSuccess.tsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tour />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tour/search" element={<SearchResultList />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thank-you" element={<ThanhYou />} />
      <Route path="/create-tours" element={<CreateTour />} />
      <Route path="/payment-success" element={<PaymentSuccess/>}></Route>
    </Routes>
  );
};

export default Routers;
