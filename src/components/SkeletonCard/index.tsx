import React from "react";

const SkeletonCard = () => {
  return (
    <div className="p-8 bg-lightGrey rounded-lg w-[254px] max-w-[254px] h-[354px]">
      <div className="w-10 h-10 bg-darkGrey rounded-lg mb-5.5"></div>

      <div className="mb-15">
        <div className="w-24 h-4 bg-darkGrey rounded-xl mb-4"></div>
        <div className="w-40 h-4 bg-darkGrey rounded-xl"></div>
      </div>
      <div className="mb-5">
        <div className="w-40 h-2 bg-darkGrey rounded-xl mb-4"></div>
        <div className="w-40 h-2 bg-darkGrey rounded-xl mb-4"></div>
        <div className="w-40 h-2 bg-darkGrey rounded-xl mb-4"></div>
      </div>
      <div className="w-46 h-13 bg-darkGrey rounded-xl"></div>
    </div>
  );
};

export default SkeletonCard;
