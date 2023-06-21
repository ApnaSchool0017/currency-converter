import React, { useState } from "react";

const App = () => {
  // states input amount in rs
  const [amount, setAmount] = useState(0);
  // state for convert to currency
  const [targetCurrency, setTargetCurrency] = useState("USD");
  // state for store result
  const [result, setResult] = useState(0);
  // state for button
  const [visible, setVisible] = useState(false);

  // ftn for handle input amount
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    setVisible(true);
    console.log(amount);
  };

  // ftn for handle given currency to convert
  const handleTargetCurrencyChange = (e) => {
    setTargetCurrency(e.target.value);
  };

  // ftn for result
  const Result = () => {
    if (amount !== "") {
      if (targetCurrency === "GBP") {
        const x = amount / 100;
        setResult(x.toFixed(8));
      } else if (targetCurrency === "EUR") {
        const x = amount / 200;
        setResult(x.toFixed(8));
      } else {
        const x = amount / 280;
        setResult(x.toFixed(8));
      }
    } else {
      setVisible(false);
      alert("enter rupees to convert");
      setResult(0);
    }
  };
  return (
    // main div
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-400">
      <div className="bg-slate-200 p-20 rounded-2xl">
        {/* main heading */}
        <h1 className="text-4xl font-bold mb-10">Currency Converter</h1>

        {/* input amount in rupees and select sonvertable currency */}
        <div className="flex mb-8 space-x-4">
          <input
            type="number"
            className="w-40 rounded border border-gray-300 py-2 px-3 mr-2"
            placeholder="Enter Rs"
            value={amount}
            onChange={handleAmountChange}
          />

          <span className="text-xl font-bold mr-2 mt-2">to </span>
          <select
            className="w-40 rounded-md border border-gray-300 py-3 px-3 "
            value={targetCurrency}
            onChange={handleTargetCurrencyChange}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <div className="flex items-center  justify-between">
          {/* result */}
          <div>
            <span className="text-2xl font-bold ml-2 text-emerald-500 ">
              {targetCurrency}:{result}
            </span>
          </div>
          {/* visible and unvisible button */}
          <div className="mr-6">
            {visible ? (
              <button
                onClick={Result}
                className="text-white font-bold pl-4 pr-4 pt-2 pb-2 rounded-md bg-green-500 hover:bg-green-400"
              >
                Convert
              </button>
            ) : (
              <button className=" text-white font-bold pl-4 pr-4 pt-2 pb-2 rounded-md bg-gray-300">
                Convert
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
