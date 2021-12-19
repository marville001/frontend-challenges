import React from "react";
import ChallengeCard from "../components/ChallengeCard";

import data from "../data.json"

const Challenges = () => {
  return (
    <div className="container py-12">
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
