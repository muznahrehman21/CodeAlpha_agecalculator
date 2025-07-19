import React, { useState } from "react";

function CalculationUI() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState("");

  const handleCalculateAge = () => {
    const today = new Date();
    const birth = new Date(birthDate);

    if (birth > today) {
      setError("🚫 Please enter a valid birth date from the past.");
      setShowResult(false);
      return;
    }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      // borrow days from previous month
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      months += 12;
      years--;
    }

    setAge({ years, months, days });
    setError("");
    setShowResult(true);
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto px-4 py-8 rounded-lg w-full max-w-md">
      <h2 className="font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Age Calculation
      </h2>
      <p className="mt-3 max-w-xl text-white text-base sm:text-lg md:text-xl text-center">
        Select your birth date to calculate your age.
      </p>

      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        className="bg-transparent mt-6 px-4 py-2 border border-gray-300 rounded-lg text-white placeholder-white"
        max={new Date().toISOString().split("T")[0]}
      />

      <button
        onClick={handleCalculateAge}
        className="bg-white hover:bg-gray-200 mt-4 px-6 py-2 rounded-lg font-semibold text-[#6B21A8]"
        disabled={!birthDate}
      >
        Calculate Age
      </button>

      {error && (
        <p className="mt-4 font-medium text-red-300 text-sm">{error}</p>
      )}

      {showResult && !error && age && (
        <div className="flex flex-col items-center mt-8 animate-fade-in">
          <p className="font-semibold text-white text-lg sm:text-xl text-center">
            🎉 You are <span className="text-yellow-300">{age.years}</span>{" "}
            years, <span className="text-yellow-300">{age.months}</span> months,
            and <span className="text-yellow-300">{age.days}</span> days old!
          </p>
        </div>
      )}
    </div>
  );
}

export default CalculationUI;
