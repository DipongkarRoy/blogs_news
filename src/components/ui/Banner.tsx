import { useEffect, useState } from "react";
import cover1 from "../../assets/1.jpg";
import cover2 from "../../assets/2.jpg";
import cover3 from "../../assets/3.jpg";
import cover4 from "../../assets/4.jpg";
import cover5 from "../../assets/3.jpg";
import Image from "next/image";
const newsCovered = [cover1, cover2, cover3, cover4, cover5];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (currentIndex) => (currentIndex + 1) % newsCovered.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  
  return (
    <div className="carousel mx-auto flex items-center justify-center">
      <div className="carousel-content">
        <Image
          className="w-[90%] h-[350px] object-cover"
          layout="fill"
          src={newsCovered[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />
      </div>
      <div className="carousel-indicators w-full h-[500px]">
        {newsCovered.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
