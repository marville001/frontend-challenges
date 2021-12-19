import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const ChallengeCard = ({ key }) => {
  return (
    <Link to="/project/xyz" className="bg-slate-100 shadow-lg p-5 rounded-md">
      <h2 className="text-indigo-500">Challenge Name</h2>
      <img
        src="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/so0b0hpmowz5ujjwbhkp.jpg"
        alt="Project XYZ"
        className="rounded-md my-4 h-52 w-full"
      />
      <div className="flex justify-between text-indigo-400">
      <Link className="text-sm flex items-center" to="/project/xyz">
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
