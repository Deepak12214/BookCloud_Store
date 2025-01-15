import React from "react";
import Slider from "react-slick";
import Cart from "./Cart";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useBook from "../../hooks/useBook";
import { useSelector } from "react-redux";


function ImageSlider() {
  useBook();
  const Book = useSelector((state)=>state.book);
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // <></>
    <div className="lg:w-10/12 py-14 lg:py-24 m-auto">
    <div className=" px-2 pb-14 lg:w-11/12 lg:m-auto">
      <h1 className="text-2xl font-semibold">Free Offered Books</h1>
      <p className="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam assumenda iusto optio voluptatum omnis, nam molestias numquam accusantium illo nisi, maiores, fugiat ut ipsum unde voluptate hic magnam eos debitis!</p>
    </div>
    <div className="slider-container    z-0">
      <Slider {...settings}>
        {Book==null || undefined ?(<div>Loading...</div>):(
          Book.map((data)=>{
            return (<div className="flex  justify-items-center  h-auto" key={data.id}>
            <Cart  name={data.name} title={data.title} image={data.image} category={data.category} size={true} />
            </div>
            )
          })
        )}
      </Slider>
</div>
</div>
  );
}

export default ImageSlider;
