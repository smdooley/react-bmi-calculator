import React, { useState } from 'react';

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(0);
  const [bmi, setBmi] = useState(0);

  const calculateBmi = () => {
    const heightMeters = height / 100;
    const bmi = weight / (heightMeters * heightMeters);
    setBmi(bmi.toFixed(2));
  };

  return (
    <div>
      <div class="relative isolate px-6 pt-14 lg:px-8">
        <div class="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Calculate your BMI with ease</h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">With just a few simple inputs of your height, weight, age, and gender, you'll get an instant readout of your BMI. Calculate your BMI today and take the first step towards a healthier you!</p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a href="#bmi-calculator" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
            </div>
            <p class="mt-6 text-xs leading-8 text-gray-600">Note that this calculator only provides a rough estimate of a person's BMI and should not be used as a substitute for professional medical advice.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-screen bg-gray-100" id="bmi-calculator">
        <div className="p-8 bg-white shadow-lg rounded-lg w-1/2">
          <div className="mb-4">
            <label className="block font-bold">Height (cm)</label>
            <input
              type="number"
              className="w-full border-gray-400 rounded-lg py-2 px-3"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold">Weight (kg)</label>
            <input
              type="number"
              className="w-full border-gray-400 rounded-lg py-2 px-3"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold">Gender</label>
            <select
              className="w-full border-gray-400 rounded-lg py-2 px-3"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-bold">Age</label>
            <input
              type="number"
              className="w-full border-gray-400 rounded-lg py-2 px-3"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={calculateBmi}
          >
            Calculate BMI
          </button>
          {bmi > 0 && (
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-2">Your BMI: {bmi}</h2>
              <p className="text-gray-700">
                A BMI of less than 18.5 means you're underweight, between 18.5 and 24.9 means you're
                normal weight, between 25 and 29.9 means you're overweight, and over 30 means you're
                obese.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
