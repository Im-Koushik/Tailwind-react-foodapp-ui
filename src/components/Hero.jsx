import React from "react";

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='relative max-h-[500px] '>
        {/* overlay */}
        <div className='absolute bg-black/40 flex flex-col justify-center max-h-[500px] w-full h-full text-gray-200'>
          <h1 className='font-bold px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
            The <span className='text-orange-500'>Best</span>
          </h1>
          <h1 className='font-bold px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
            <span className='text-orange-500'>Foods </span>Delivered
          </h1>
        </div>
        <img
          src='https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
          className='w-full max-h-[500px] object-cover '
        />
      </div>
    </div>
  );
};

export default Hero;
