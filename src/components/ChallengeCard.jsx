import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const ChallengeCard = ({ challenge, index }) => {
  return (
    <Link to={`/challenge/${challenge.id}`} className="bg-slate-100 shadow-lg p-5 rounded-md">
      <h2 className="text-indigo-500"> <span className="text-indigo-300">#{index}</span> {challenge.name}</h2>
      <img
        src={challenge.image}
        alt="Project XYZ"
        className="rounded-md my-4 md:h-52 w-full"
      />
      <div className="flex justify-between text-indigo-400">
      <Link className="text-sm flex items-center" to={`/challenge/${challenge.id}`}>
          <FaGithub className="mr-1" />
          View Challenge
        </Link>
        <a 
        target="_blank"
        className="text-sm flex items-center" 
        href="https://github.com/marville001" rel="noreferrer">
          <FaGithub className="mr-1" />
          Source Code
        </a>
      </div>
    </Link>
  );
};

export default ChallengeCard;
