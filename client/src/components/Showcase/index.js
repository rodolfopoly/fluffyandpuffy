import React from "react";
import { Carousel } from "flowbite-react";
import cakeShowcase from '../../assets/cake.png'
import cookiesShowcase from '../../assets/cookies.png'
import cakeTwoShowcase from '../../assets/Sprinkles-cake.jpg'
import cakeThreerShowcase from '../../assets/Triple-chocolate-cake.jpg'
import cupcakeShowcase from '../../assets/Baby-shower-cupcakes.jpg'
import miniDessertShowcase from '../../assets/Mini-pavlova.jpg'
import cupcakeTwoShowcase from '../../assets/Mixed-Cupcakes.jpg'
import cupcakeThreeShowcase from '../../assets/Super-fudgy-chocolate-cupcake.jpg'
import miniDessetTwoShowcase from '../../assets/Strawberry-box.jpg'
import cookiesTwoShowcase from '../../assets/cookie-letter.jpg'
import cookiesThreeShowcase from '../../assets/Baby-shower-cookie.jpg'
function Showcase() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 mr-10 ml-10 pt-28">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slide={false}>
            <img
              src={cakeShowcase}
              alt="..."
            />
            <img
              src={cakeTwoShowcase}
              alt="..."
            />
            <img
              src={cakeThreerShowcase}
              alt="..."
            />
          </Carousel>
        </div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slide={false}>
            <img
              src={cookiesShowcase}
              alt="..."
            />
            <img
              src={cookiesTwoShowcase}
              alt="..."
            />
            <img
              src={cookiesThreeShowcase}
              alt="..."
            />
          </Carousel>
        </div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slide={false}>
            <img
              src={cupcakeShowcase}
              alt="..."
            />
            <img
              src={cupcakeTwoShowcase}
              alt="..."
            />
            <img
              src={cupcakeThreeShowcase}
              alt="..."
            />
          </Carousel>
        </div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slide={false}>
            <img
              src={miniDessertShowcase}
              alt="..."
            />
            <img
              src={miniDessetTwoShowcase}
              alt="..."
            />
          </Carousel>
        </div>
      </div>
      <div className="grid  sm:grid-cols-3 gap-2 h-16 mt-10 mb-10 ml-2">
        <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-sm text-lg px-5 py-2.5 text-center mr-2 mb-2" >Experience the Art of the Pastry.</button>
        <button type="button" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-bold rounded-sm text-lg px-5 py-2.5 text-center mr-2 mb-2" disabled>Locally owned, right here in Miami!</button>
        <button type="button" class="text-white bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-bold rounded-sm text-lg px-5 py-2.5 text-center mr-2 mb-2">Vegan? Gluten Free? No worries we got you.</button>
      </div>
    </>
  )
}

export default Showcase;