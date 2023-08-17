import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HomePage() {
  return (
    <section className="flex justify-center items-center flex-col ">
      <header className="bg-zinc-800 p-6 md:p-10 text-center">        
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        Welcome to My Online Diary
      </h1>
        <p className="text-md md:text-lg lg:text-xl text-slate-400 leading-relaxed">
          Are you ready to embark on a journey of self-discovery, reflection,
          and creativity? My Online Diary is your personal digital haven where
          you can record your thoughts, experiences, and emotions in the form
          of an online journal. Seamlessly combining the timeless art of
          journaling with modern technology, our platform provides you with a
          private space to capture the essence of your life.
        </p>

        <Link
          className="bg-zinc-500 text-white py-2 px-6 rounded-md mt-6 inline-block hover:bg-zinc-600 transition duration-300 ease-in-out"
          to="/register"
        >
          Get Started
        </Link>
      </header>
      <div className="mt-6 md:mt-12 lg:mt-16 w-full max-w-screen-lg mx-auto">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          dynamicHeight={false}
          showThumbs={false}
          showArrows={false}
          interval={5000}
        >
          <div>
            <img
              src="/img/slide1.jpg"
              alt="Slide 1"
              className="object-cover h-96 md:h-72 lg:h-96 lg:w-96"
            />
          </div>
          <div>
            <img
              src="/img/slide2.jpg"
              alt="Slide 2"
              className="object-cover h-96 md:h-72 lg:h-96 lg:w-96"
            />
          </div>
          <div>
            <img
              src="/img/slide3.jpg"
              alt="Slide 3"
              className="object-cover h-96 md:h-72 lg:h-96 lg:w-96"
            />
          </div>
          <div>
            <img
              src="/img/slide4.jpg"
              alt="Slide 4"
              className="object-cover h-96 md:h-72 lg:h-96 lg:w-96"
            />
          </div>
          <div>
            <img
              src="/img/slide5.jpg"
              alt="Slide 5"
              className="object-cover h-96 md:h-72 lg:h-96 lg:w-96"
            />
          </div>
          <div>
            <img
              src="/img/slide6.jpg"
              alt="Slide 6"
              className="object-cover h-96 md:h-72 lg:h-96 lg:w-96"
            />
          </div>
          <div>
            <img
              src="/img/slide7.jpg"
              alt="Slide 7"
              className="object-cover h-96 md:h-72 lg:h-96 lg:w-96"
            />
          </div>
          <div>
            <img
              src="/img/slide8.jpg"
              alt="Slide 8"
              className="object-cover h-96 md:h-72 lg:h-96 lg:w-96"
            />
          </div>
          <div>
            <img
              src="/img/slide9.jpg"
              alt="Slide 9"
              className="object-cover h-96 md:h-72 lg:h-96 lg:w-96"
            />
          </div>
          <div>
            <img
              src="/img/slide10.jpg"
              alt="Slide 10"
              className="object-cover h-96 md:h-72 lg:h-96 lg:w-96"
            />
          </div>
          <div>
            <img
              src="/img/slide11.jpg"
              alt="Slide 11"
              className="object-cover h-96 md:h-72 lg:h-96 lg:w-96"
            />
          </div>
          <div>
            <img
              src="/img/slide12.jpg"
              alt="Slide 12"
              className="object-cover h-96 md:h-72 lg:h-96 lg:w-96"
            />
          </div>
          <div>
            <img
              src="/img/slide13.jpg"
              alt="Slide 13"
              className="object-cover h-96 md:h-72 lg:h-96 lg:w-96"
            />
          </div>
          <div>
            <img
              src="/img/slide14.jpg"
              alt="Slide 14"
              className="object-cover h-96 md:h-72 lg:h-96 lg:w-96"
            />
          </div>
          <div>
            <img
              src="/img/slide15.jpg"
              alt="Slide 15"
              className="object-cover h-96 md:h-72 lg:h-96 lg:w-96"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default HomePage;
