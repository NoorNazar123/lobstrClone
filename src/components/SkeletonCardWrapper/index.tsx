import SkeletonCard from "../SkeletonCard";

const SkeletonCardWrapper = ({ itemCount }: { itemCount: any }) => {
  return (
    <>
      {Array.from({ length: itemCount }, (_, index) => (
        <SkeletonCard key={index} />
      ))}
    </>
  );
};

export default SkeletonCardWrapper;
