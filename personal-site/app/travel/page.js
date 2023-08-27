
'use client'


import Link from 'next/link'
import { useState } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Sphere,
    Graticule
  } from "react-simple-maps";


  const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"



export default function TravelPage(){

    const [showMap, setShowMap] = useState(false); // State variable to toggle map section
    const [showYear2023, setShowYear2023] = useState(false);
    const [showYear2022, setShowYear2022] = useState(false);
    const [showYear2021, setShowYear2021] = useState(false);
    const [showYear2020, setShowYear2020] = useState(false);
    const [showYear2019, setShowYear2019] = useState(false);
    const [showYear2018, setShowYear2018] = useState(false);
    return (
        <main className=" mx-auto w-full max-w-screen-sm px-8  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">
         
         <section>

            <div>

                <div className="flex flex-wrap">
                <h2 className="w-full pt-8 sm:text-[102px] text-[60px] font-bold leading-10 inset-x-0 bottom-0 pr-8 text-text-lvl-1 lg:w-1/3">Travel</h2>
                <div className="w-full text-text-lvl-2 mt-2 lg:w-2/3 lg:mt-[0px]">
                
                I really enjoy traveling and it's something that I am tryning to do more and more of.
               Here is a digital scrapbook of all the places I have been to so far , plus some countries that I would love to visit. 
               <br/>
               <br/>
               I am always open to recommendations of new places to checkout in any of the cities/places listed below.
                    </div>
                </div>
                

                <ul className="mt-20 gap-x-6 gap-y-3 flex cursor-pointer flex-wrap">
                    <li><h3    className={`text-base text-text-lvl-4 hover:text-text-lvl-3 cursor-pointer ${
                showYear2023 ? 'underline underline-offset-4' : ''
              }`}
              onClick={() => {
                setShowYear2023(true);
                setShowYear2022(false);
                setShowYear2021(false);
                setShowYear2020(false);
                setShowYear2019(false);
                setShowYear2018(false);
                setShowMap(false);
              }} ><span className={showYear2023 ? 'hover:underline' : ''}>2023</span><sup className="pl-[2px] text-[10px]">2</sup></h3></li>
                    <li><h3    className={`text-base text-text-lvl-4 hover:text-text-lvl-3 cursor-pointer ${
                showYear2022 ? 'underline underline-offset-4' : ''
              }`}
              onClick={() =>    setShowYear2023(false);
                setShowYear2022(true);
                setShowYear2021(false);
                setShowYear2020(false);
                setShowYear2019(false);
                setShowYear2018(false);
                setShowMap(false);} ><span className={showYear2022 ? 'hover:underline' : ''}>2022</span><sup className="pl-[2px] text-[10px]">1</sup></h3></li>
                    <li><h3    className={`text-base text-text-lvl-4 hover:text-text-lvl-3 cursor-pointer ${
                showYear2021 ? 'underline underline-offset-4' : ''
              }`}
              onClick={() => setShowYear2021(!showYear2021)} ><span className={showYear2021 ? 'hover:underline' : ''}>2021</span><sup className="pl-[2px] text-[10px]">1</sup></h3></li>
                    
                    <li><h3    className={`text-base text-text-lvl-4 hover:text-text-lvl-3 cursor-pointer ${
                showYear2020 ? 'underline underline-offset-4' : ''
              }`}
              onClick={() => setShowYear2020(!showYear2020)} ><span className={showYear2020 ? 'hover:underline' : ''}>2020</span><sup className="pl-[2px] text-[10px]">0</sup></h3></li>
                    <li><h3    className={`text-base text-text-lvl-4 hover:text-text-lvl-3 cursor-pointer ${
                showYear2019 ? 'underline underline-offset-4' : ''
              }`}
              onClick={() => setShowYear2019(!showYear2019)} ><span className={showYear2019 ? 'hover:underline' : ''}>2019</span><sup className="pl-[2px] text-[10px]">3</sup></h3></li>
                   
                    <li><h3    className={`text-base text-text-lvl-4 hover:text-text-lvl-3 cursor-pointer ${
                showYear2018 ? 'underline underline-offset-4' : ''
              }`}
              onClick={() => setShowYear2018(!showYear2018)} ><span className={showYear2018 ? 'hover:underline' : ''}>2018</span><sup className="pl-[2px] text-[10px]">2</sup></h3></li>
                    <li><h3    className={`text-base text-text-lvl-4 hover:text-text-lvl-3 cursor-pointer ${
                showMap ? 'underline underline-offset-4' : ''
              }`}
              onClick={() => setShowMap(!showMap)} ><span className={showMap ? 'hover:underline' : ''}>Places I want to visit</span><sup className="pl-[2px] text-[10px]">40</sup></h3></li>
                   </ul>

            </div>
            </section>

   {/* 2023 Travel */}
   {showYear2023 && ( // Render the year 2022 section when showYear2022 is true
        <section>
      <div>
        <h3> Paris </h3>
        </div>
        </section>
      )}

   {/* 2022 Travel */}
   {showYear2022 && ( // Render the year 2022 section when showYear2022 is true
        <section>
       <h1>
        2022
        </h1>
        </section>
      )}

   {/* 2021 Travel */}
   {showYear2021 && ( // Render the year 2022 section when showYear2022 is true
        <section>
          {/* ... Add content for the year 2022 */}
        </section>
      )}

   {/* 2020 Travel */}
   {showYear2020 && ( // Render the year 2022 section when showYear2022 is true
        <section>
          {/* ... Add content for the year 2022 */}
        </section>
      )}

   {/* 2019 Travel */}
   {showYear2019 && ( // Render the year 2022 section when showYear2022 is true
        <section>
          {/* ... Add content for the year 2022 */}
        </section>
      )}

         {/* 2018 Travel */}
   {showYear2018 && ( // Render the year 2022 section when showYear2022 is true
        <section>
          {/* ... Add content for the year 2022 */}
        </section>
      )}

 {/* Places I want to travel to */}
 {showMap && (
<section>
<ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} fill="#ffffff"
            stroke="#000000"/>
          ))
        }
      </Geographies>
    </ComposableMap>
</section>
 )}

           

         
        </main>
    )
}