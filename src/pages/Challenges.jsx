import React from "react";
import ChallengeCard from "../components/ChallengeCard";

import data from "../data.json"

const Challenges = () => {
  return (
    <div className="container py-12">
      <div className="text-center mb-4 sm:max-w-lg mx-auto">
        <p className="">NB: All these challenges are done using <a
        href="https://reactjs.org/" target="_blank" rel="noreferrer" className="text-indigo-500">ReactJs Framework</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="text-indigo-500">TailwindCss</a> for styling</p>
      </div>
      <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {data.challenges.map((challenge, i) => (
          <ChallengeCard key={i} index={i+1} challenge={challenge} />
        ))}
      </div>
    </div>
  );
};

export default Challenges;
