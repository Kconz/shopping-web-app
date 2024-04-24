import React from "react";

function About() {
  return (
    <div className="container pt-11">
      <div className="bg-orange-400 w-full h-[100%] text-center p-8 rounded-3xl ">
        <div className="flex flex-col mx-auto my-2 ">
          <h1 className="text-white font-semibold">About</h1>
          <div className="pt-5 flex justify-center pb-7 ">
            <img
              src="https://images.unsplash.com/photo-1669023414180-4dcf35d943e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
              alt=""
              className="w-2/3 h-full rounded-xl"
            />
          </div>
          <h2 className="text-2xl text-white">
            About this project. Only use for practice in coding. It use
            TailwindCss and React and will keep this project in my portfolio.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
