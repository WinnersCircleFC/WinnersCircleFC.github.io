import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss"; 

const brands = [
  { name: "Nike", logo: require("../../../assets/nike-11.svg").default },
  { name: "Adidas", logo: require("../../../assets/adidas-logo-svgrepo-com (2).svg").default },
  { name: "Jordan", logo: require("../../../assets/jordan-2.svg").default },
  { name: "Puma", logo: require("../../../assets/puma-logo.svg").default },
  { name: "Under Armour", logo: require("../../../assets/under-armour-logo-svgrepo-com.svg").default },
  { name: "Champion", logo: require("../../../assets/champion-logo.svg").default },
  { name: "Gildan", logo: require("../../../assets/gildan-logo.svg").default },
  { name: "Next Level", logo: require("../../../assets/next-level-apparel-logo-vector.svg").default },
  { name: "Columbia", logo: require("../../../assets/columbia-sportswear-co-1.svg").default },
  { name: "Comfort Colors", logo: require("../../../assets/comfort-colors-logo-vector.svg").default },
  { name: "Hanes", logo: require("../../../assets/hanes.svg").default },
  { name: "American Apparel", logo: require("../../../assets/american-apparel-2.svg").default },
  { name: "Jerzees", logo: require("../../../assets/jerzees-logo-vector.svg").default },
  { name: "Dickies", logo: require("../../../assets/cdnlogo.com_dickies.svg").default },
  { name: "Independent Trading Co.", logo: require("../../../assets/independent-trading-company-logo-vector.svg").default },
  {name: "Nautica", logo: require("../../../assets/nautica-2.svg").default },
  {name: "Russell Athletic", logo: require("../../../assets/russell-athletic-2.svg").default },
  {name:"Shaka Wear", logo: require("../../../assets/shaka.svg").default },
  {name: "Spyder", logo: require("../../../assets/spyder-active-sports-vector-logo.svg").default },
  {name: "Tommy Hilfiger", logo: require("../../../assets/tommy-hilfiger-2.svg").default },
  {name:"Van Heusen", logo: require("../../../assets/van-heusen-1.svg").default },
  {name:"Callaway", logo: require("../../../assets/callaway-golf-company-logo.svg").default }
];

const ClothingBrandCarousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4, // Adjust based on screen size
    slidesToScroll: 2,
    autoplay: true,
    cssEase: "linear",
    autoplaySpeed: 0, // Delay between slides
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <div key={index} className="tech-item">
            <img src={brand.logo} alt={brand.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClothingBrandCarousel;
