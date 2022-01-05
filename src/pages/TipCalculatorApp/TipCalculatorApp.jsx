import React from "react";

// - Very dark cyan: hsl(183, 100%, 15%)
// - Dark grayish cyan: hsl(186, 14%, 43%)
// - Dark grayish cyan: hsl(184, 14%, 56%)
// - Light grayish cyan: hsl(185, 41%, 84%)
// - Light grayish cyan: hsl(189, 41%, 97%)
// - White: hsl(0, 0%, 100%)

const TipCalculatorApp = () => {
  return (
    <div className="flex items-center justify-center min-h-[90vh]">
      <div className="bg-white p-5 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <div className="relative bg-slate-100 mb-6">
            <input
              type="text"
              className="w-full bg-transparent h-10 rounded p-2 py-3 text-right text-2xl focus:outline-cyan-400 text-[#1e474b]"
              defaultValue={0}
            />
            <span className="absolute left-2 top-1/2 -translate-y-1/2">$</span>
          </div>
          <h3 className="text-sm text-slate-600 font-bold">Select Tip %</h3>
          <div className="grid grid-cols-3 grid-rows-2 gap-3 mt-2 mb-6">
            <div className="bg-[#1e474b] p-4 cursor-pointer py-2 text-center text-white font-bold rounded-md hover:bg-cyan-100 hover:text-slate-700">
              5%
            </div>
            <div className="bg-[#1e474b] p-4 cursor-pointer py-2 text-center text-white font-bold rounded-md hover:bg-cyan-100 hover:text-slate-700">
              10%
            </div>
            <div className="bg-[#1e474b] p-4 cursor-pointer py-2 text-center text-white font-bold rounded-md hover:bg-cyan-100 hover:text-slate-700">
              15%
            </div>
            <div className="bg-[#1e474b] p-4 cursor-pointer py-2 text-center text-white font-bold rounded-md hover:bg-cyan-100 hover:text-slate-700">
              25%
            </div>
            <div className="bg-[#1e474b] p-4 cursor-pointer py-2 text-center text-white font-bold rounded-md hover:bg-cyan-100 hover:text-slate-700">
              50%
            </div>
            <div className="bg-[#1e474b] p-4 cursor-pointer py-2 text-center text-white font-bold rounded-md hover:bg-cyan-100 hover:text-slate-700">
              Custom
            </div>
          </div>

          <h3 className="text-sm text-slate-600 font-bold">Number of people</h3>
          <div className="relative bg-slate-100 mt-2 mb-6">
            <input
              type="text"
              className="w-full bg-transparent h-10 rounded p-2 py-3 text-right text-2xl focus:outline-cyan-400 text-[#1e474b]"
              defaultValue={0}
            />
            <span className="absolute left-2 top-1/2 -translate-y-1/2">$</span>
          </div>
        </div>
        <div className="bg-[#1e474b] rounded-md p-6 pb-12 md:pb-6 relative">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-slate-100">Tip Amount</h2>
              <p className="text-slate-400">/ person</p>
            </div>
            <h2 className="text-3xl text-cyan-300 font-bold opacity-80">
              $0.00
            </h2>
          </div>
          <div className="flex justify-between items-center mt-8">
            <div>
              <h2 className="text-slate-100">Total</h2>
              <p className="text-slate-400">/ person</p>
            </div>
            <h2 className="text-3xl text-cyan-300 font-bold opacity-80">
              $0.00
            </h2>
          </div>
          <button className="mt-12 bg-cyan-300 w-full uppercase font-bold text-[#1e474b] py-2 rounded-md">RESET</button>
        </div>
      </div>
    </div>
  );
};

export default TipCalculatorApp;
