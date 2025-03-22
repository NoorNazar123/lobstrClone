import React from "react";
import HeroImage from "@/components/HeroImage";
import { useRef, useEffect } from "react";
import { HeroProps } from "@/types/store";

const Hero: React.FC<HeroProps> = ({ term, setTerm, handleSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!term && inputRef.current) {
      inputRef.current.value = "";
    }
  }, [term]);

  const handleSearchAction = () => {
    const inputValue = inputRef.current?.value.trim();
    if (inputValue) {
      setTerm(inputValue);
      handleSearch(inputValue);
    }
  };

  const _handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchAction();
    }
  };

  return (
    <>
      <section className="pt-25 md:pt-20 pb-16 xl:pb-20 overflow-hidden">
        <div className="mx-auto max-w-c-1154 px-6.5 md:px-8 2xl:px-0">
          <div className="flex">
            <div className="md:pt-22.5 md:w-1/2">
              <h1 className="mb-11.5 pr-16 leading-[1.77] tracking-[0.1px]">
                store
              </h1>
              <p className="main-desc pr-5">
                We built hundreds of ready-made automations from social media to
                e-commerce to real estate. Choose the one you love.
              </p>

              <div className="mt-13">
                <div className="flex items-center px-2.5 gap-9 w-full h-15 rounded-md border sm:border-2 border-[#dee0ea] sm:border-primary border-solid">
                  <input
                    onKeyDown={_handleKeyDown}
                    placeholder="Search"
                    className="w-full border-none outline-none text-sm pl-4"
                    ref={inputRef}
                  />
                  <button
                    onClick={handleSearchAction}
                    className="w-[124px] h-10 font-bold text-sm text-white bg-red hover:bg-darkred  hidden sm:flex items-center justify-center rounded-lg"
                  >
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="animate_right md:w-1/2 hidden lg:block ml-21.5">
              <div className="relative 2xl:-mr-7.5">
                <div className=" relative aspect-[500/500] w-full py-4 px-10">
                  <HeroImage
                    fill={true}
                    className="dark:hidden relative"
                    priority={true}
                    src="/images/store/hero.svg"
                    alt="Hero"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
