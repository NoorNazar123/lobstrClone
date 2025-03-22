"use client";

import Hero from "@/components/_Store/Hero";
import dynamic from "next/dynamic";
// import Hero from "@/components/_Store/Hero";
// import SkeletonTools from "@/components/Skeleton/skeletonTools";
import { useEffect, useRef, useState } from "react";
// import { filterNoCodeTools, getNoCodeTools } from "@/lib/api";

// const Tools = dynamic(() => import('@/components/_Store/Tools'), {
//   ssr: false,
//   loading: () => <SkeletonTools />
// })

const Sections = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState<any>(null);
  const [filteredCrawlers, setFilteredCrawlers] = useState<any>(null);
  const scrollRef = useRef(null);

  //   useEffect(() => {
  //     const fetchTools = async () => {
  //       const response = await getNoCodeTools();
  //       setData(response)
  //     };

  //     fetchTools();
  //   }, []);

  //   const filterTools = async (search: string) => {
  //     if (search) {
  //       const data = await filterNoCodeTools(search);
  //       setFilteredCrawlers(data.crawlers)
  //     } else {
  //       setFilteredCrawlers(null)
  //     }
  //   };

  //   useEffect(() => {
  //     if (filteredCrawlers) {
  //       window.scrollTo({
  //         top: 600,
  //         left: 0,
  //         behavior: "smooth",
  //       });
  //     }
  //   }, [filteredCrawlers])

  //   const clearFilteredCrawlers = () => {
  //     setFilteredCrawlers(null)
  //     setSearchValue("")
  //   }
  //   useEffect(() => {
  //     if (window.location.href.includes('?')) {
  //       const element = scrollRef.current;
  //       if (element) {
  //         const offset = 100;
  //         // @ts-ignore
  //         const top = element.getBoundingClientRect().top + window.scrollY - offset;

  //         window.scrollTo({ top, behavior: 'smooth' });
  //       }
  //     }

  //   }, [])
  return (
    <main>
      <Hero
        term={searchValue}
        // handleSearch={(search: any) => filterTools(search)}
        setTerm={setSearchValue}
        handleSearch={undefined}
      />
      {
        data?.crawlers ? (
          <div ref={scrollRef}>
            Tool
            {/* <Tools clearFilteredCrawlers={clearFilteredCrawlers} filteredCrawlers={filteredCrawlers} tools={data.crawlers} /> */}
          </div>
        ) : (
          "skeleton"
        )
        //  <SkeletonTools />
      }
    </main>
  );
};

export default Sections;
