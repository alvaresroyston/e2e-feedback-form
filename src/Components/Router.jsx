import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Feedback from "./Feedback";
import FeedbackDetails from "./FeedbackDetails";

function MyRouts() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/feedbackDetails" element={<FeedbackDetails />} />
      </Routes>
    </div>
  );
}

export default MyRouts;