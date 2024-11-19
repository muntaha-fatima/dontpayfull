"use client";

import { useState ,useEffect} from "react";
import Image from "next/image";

export default function Blog() {
  const [currentSlide, setCurrentSlide] = useState(0) ; 
  const [animate, setAnimate] = useState(false) ;
  const images = [
    "/image/travel1.jpg",
    "/image/health1.jpg",
    "/image/sport.png",
    "/image/travel1.jpg",
    "/image/app.png",
    "/image/home-(3).png",
    "/image/bali.png",
    "/image/fashion1.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

 
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };


  return (
    <div className="container mx-auto m-0 ">
     
      <section className="p-0 ">
        <div className="relative text-3xl font-bold text-start mb-18 pb-10">
        
          
          <button
            onClick={nextSlide}
           
            
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-3 rounded-full cursor-pointer z-10"
          
          >
        
            ❮       
            
            
          </button>
          
            
          
          <div className="w-screen md:w-scree h-full md:h-full relative">
            <div
              className={`  ${
                animate ? "opacity-0 transition-opacity duration-500" : "opacity-100 transition-opacity duration-500"
              }`}
              onAnimationEnd={nextSlide}
            >
              <Image
                src={images[currentSlide]}
                alt="Current Image"
                layout="responsive" 
                width={1920}
                height={1080} 
                className="w-full h-full object-cover" 
              /> 
              <div className="absolute inset-0 flex flex-col  items-start text-white p-44 mb-80">
  
  <h1 className="mb-16 mt-32">
  Best Practices for Preserving Your Smart Appliances' Performance
  </h1>
  
  <button className="bg-gray-400 text-white px-4 py-2   rounded hover:bg-blue-700">
         Read more
  </button>
</div>
</div>
          </div>

          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-3 rounded-full cursor-pointer z-10"
          > 
            
            
            ❯
          </button>
        </div>
      </section>


           
         <section className="p-8">
           <h2 className="text-3xl font-bold text-start mb-7r ">Browse Categories</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            
             <div className="relative bg-blue-50 shadow-md rounded-md overflow-hidden hover:shadow-sm transition-shadow ">
               <Image
                src="/image/travel1.jpg"
                alt="Travel"
                width={700}
                height={450}
                className=""
              /><h1 className="p-10 text-black font-bold text-3xl">Travel</h1>
            </div>
          
            <div className="relative  bg-blue-50 shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow ">
              <Image
                src="/image/health1.jpg"
                alt="Health"
                width={700}
                height={450}
                className="rounded shadow-md"
              /><h1 className="p-10 text-black font-bold text-3xl">Lifestyle</h1>
            </div>
   
            <div className="relative  bg-blue-50 shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow  ">
              <Image
                src="/image/sport.png"
                alt="Sport"
                width={800}
                height={450}
                className="rounded shadow-md"
              /><h1 className="p-10 text-black font-bold text-3xl">Sports and Fitness</h1>
            </div>
      
            
            <div className="relative bg-blue-50 bg-transparent shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow ">
              <Image
                src="/image/sport fitness.jpg"
                alt="Travel"
                width={700}
                height={450}
                className="rounded shadow-md"
              /><h1 className="p-10 text-black font-bold text-3xl">Health and Beauty</h1>
            </div>
          </div>
        </section>


      
      <section>
        <h2 className="text-black font-bold text-3xl mb-8 text-start pt-6">Featured Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
          <div className="relative bg-transparent shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow">
          
            <Image
              src="/image/app.png"
              alt="App"
              width={700}
              height={450}
              className="rounded shadow-md"
            />  <h1 className="p-10 text-black  text-3xl">Best Practices for Preserving Your Smart Appliances Performance</h1>
            
          </div>

          <div className="relative bg-transparent shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow ">
            <Image
              src="/image/home-(3).png"
              alt="Home"
              width={700}
              height={450}
              className="rounded shadow-md"
            /><h1 className="p-10 text-black text-3xl">Home Security Cameras Made Easy: Your Ultimate Guide to Safety Solutions</h1>
          </div>

          <div className="relative bg-transparent shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              src="/image/bali.png"
              alt="Bali"
              width={900}
              height={450}
            /><h1 className="p-10 text-black  text-3xl">Why Smart Homes Are the Future: Discover the Advantages of IoT</h1>
          </div>
          <div className="relative bg-transparent shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow pb-28">
            <Image
              src="/image/home-(3).png"
              alt="digi"
              width={800}
              height={450}
            /><h1 className="p-10 text-black  text-3xl">Chasing Thrills: Top Adventure Travel Hotspots</h1>
          </div>


          <div className="relative bg-transparent shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow pb-28">
            <Image
              src="/image/adveture.png"
              alt="digi"
              width={800}
              height={450}
            /><h1 className="p-10 text-black  text-3xl">Best Places for Digital Nomads in 2024</h1>
          </div>
          <div className="relative bg-transparent shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow pb-28">
            <Image
              src="/image/fashion1.jpg"
              alt="Fashion"
              width={800}
              height={450}
            /><h1 className="p-10 text-black  text-3xl">Scotland Secret Wonders: Exploring Beyond Edinburgh and Glasgow</h1>
          </div>


          <div className="relative bg-transparent shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow pb-28">
            <Image
              src="/image/digi.png"
              alt="fitness"
              width={800}
              height={450}
            /><h1 className="p-10 text-black  text-3xl">Exploring Balis Hidden Cultural Wonders</h1>
          </div>
  
          <div className="relative bg-transparent shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow pb-28">
            <Image
              src="/image/fitness.png"
              alt="digi"
              width={800}
              height={450}
            /><h1 className="p-10 text-black  text-3xl">Techniques and Benefits of Stretching</h1>
          </div>

          <div className="relative bg-transparent shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow pb-28">
            <Image
              src="/image/sport.png"
              alt="digi"
              width={800}
              height={450}
            /><h1 className="p-10 text-black text-3xl">A Guide for Beginners to Start Cycling</h1>
          </div>
        </div>
      </section>

      <div className="m-40 mt-80 pl-72 md:-mb-96">
        <footer className="md:h-16 flex justify-items-center bg-neutral-50">
          <nav className="footer-links">
            <a href="/support/home" className="px-4 text-gray-500">
              Home /
            </a>
            <a href="/support/solutions" className="text-gray-500">
              Solutions /
            </a>
            <a href="http://dontpayfull.com" className="text-gray-500">
              Main Website /
            </a>
            <a href="http://forum.dontpayfull.com" className="text-gray-500">
              Forum /
            </a>
            <a href="http://blog.dontpayfull.com" className="text-gray-500">
              Blog
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
}





