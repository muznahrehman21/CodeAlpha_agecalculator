import React from "react";
import CalculationUI from "./CalculationUI";
import { useNavigate } from "react-router-dom";
function Page() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center mx-auto px-4 py-8 rounded-lg w-full max-w-md">
      <h1 className="font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Welcome to the Age Calculator
      </h1>
      <p className="mt-3 max-w-xl text-white text-base sm:text-lg md:text-xl">
        Calculate your age in a few clicks!
      </p>
      <button
        onClick={() => navigate("/agecalculation")}
        className="bg-white hover:bg-gray-200 mt-6 px-6 py-3 rounded-lg text-[#6B21A8] text-sm sm:text-base transition duration-200 ease-in-out"
      >
        Let's Go
      </button>
    </div>
  );
}

export default Page;
