import React from "react";
import Carousel from "../Carousel/Carousel";

function Home() {
  let slides = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1713427607343-3e2ecbec35f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1710270118556-7e8729603201?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1710480972511-64078762edc5?q=80&w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1705615427893-041594865d7b?q=80&w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1701861970872-877cc646ea8e?q=80&w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
    },
  ];
  

  return (
    <>
      <div className="container">
      <div className="w-[100%] p-11">
        <Carousel slides={slides} />
      </div>
      </div>
    </>
  );
}

export default Home;
