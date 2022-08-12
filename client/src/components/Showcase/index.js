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
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 mr-10 ml-10">
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
  )
}

export default Showcase;