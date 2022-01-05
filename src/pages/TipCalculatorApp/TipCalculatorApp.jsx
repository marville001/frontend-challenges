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
      <div className="bg-white p-5 rounded-lg grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="relative bg-slate-100 mb-6">
            <input
              type="text"
              className="w-full bg-transparent h-10 rounded p-2 py-3 text-right text-2xl focus:outline-cyan-400 text-cyan-900"
              defaultValue={0}
            />
            <span className="absolute left-2 top-1/2 -translate-y-1/2">$</span>
          </div>
          <h3 className="text-sm text-slate-600 font-bold">Select Tip %</h3>
          <div className="grid grid-cols-3 grid-rows-2 gap-3 mt-2 mb-6">
            <div className="bg-slate-800 p-4 cursor-pointer py-2 text-center text-white font-bold rounded-md hover:bg-cyan-100 hover:text-slate-700">
              5%
            </div>
            <div className="bg-slate-800 p-4 cursor-pointer py-2 text-center text-white font-bold rounded-md hover:bg-cyan-100 hover:text-slate-700">
              10%
            </div>
            <div className="bg-slate-800 p-4 cursor-pointer py-2 text-center text-white font-bold rounded-md hover:bg-cyan-100 hover:text-slate-700">
              15%
            </div>
            <div className="bg-slate-800 p-4 cursor-pointer py-2 text-center text-white font-bold rounded-md hover:bg-cyan-100 hover:text-slate-700">
              25%
            </div>
            <div className="bg-slate-800 p-4 cursor-pointer py-2 text-center text-white font-bold rounded-md hover:bg-cyan-100 hover:text-slate-700">
              50%
            </div>
            <div className="bg-slate-800 p-4 cursor-pointer py-2 text-center text-white font-bold rounded-md hover:bg-cyan-100 hover:text-slate-700">
              Custom
            </div>
          </div>

          <h3 className="text-sm text-slate-600 font-bold">Number of people</h3>
          <div className="relative bg-slate-100 mt-2 mb-6">
            <input
              type="text"
              className="w-full bg-transparent h-10 rounded p-2 py-3 text-right text-2xl focus:outline-cyan-400 text-cyan-900"
              defaultValue={0}
            />
            <span className="absolute left-2 top-1/2 -translate-y-1/2">$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipCalculatorApp;
