import SkeletonCardWrapper from "../SkeletonCardWrapper";
import SkeletonLoader from "./SkeletonLoader";

const SkeletonTools = () => {
  return (
    <>
      <section className="pb-20 overflow-hidden relative">
        <div className="mx-auto max-w-c-1154 px-6.5 md:px-8 2xl:px-0">
          <div className="flex justify-center md:justify-normal lg:gap-8">
            <div
              className={`w-[300px] w- h-screen md:h-auto hidden md:relative md:block overflow-auto md:border-0 fixed bg-white md:bg-tranparent`}
            >
              <div className="w-full pt-6">
                <div className="w-36 h-4 bg-darkGrey rounded-xl mb-10"></div>
                <div className="w-22 h-4 bg-darkGrey rounded-xl mb-4 "></div>
                <div className="w-36 h-4 bg-darkGrey rounded-xl mb-4 "></div>
                <div className="w-22 h-4 bg-darkGrey rounded-xl mb-4 "></div>
                <div className="w-36 h-4 bg-darkGrey rounded-xl mb-4 "></div>
                <div className="w-22 h-4 bg-darkGrey rounded-xl mb-4 "></div>
                <div className="w-36 h-4 bg-darkGrey rounded-xl mb-4 "></div>
                <div className="w-22 h-4 bg-darkGrey rounded-xl mb-4 "></div>
                <div className="w-36 h-4 bg-darkGrey rounded-xl mb-4 "></div>
                <div className="w-22 h-4 bg-darkGrey rounded-xl mb-4 "></div>
              </div>
            </div>

            <div className="animate_right w-full pt-16 md:pt-2">
              <div className="flex justify-center">
                <SkeletonLoader className="flex flex-col items-center gap-10 w-full md:hidden">
                  <SkeletonCardWrapper itemCount={2} />
                </SkeletonLoader>
                <div className=" flex-wrap items-center justify-center l-md:justify-start gap-14 m-lg:gap-5 w-full hidden md:flex pt-11">
                  <SkeletonCardWrapper itemCount={9} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkeletonTools;
