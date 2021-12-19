import React from "react";
import ChallengeCard from "../components/ChallengeCard";

const Challenges = () => {
  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
          <ChallengeCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default Challenges;
