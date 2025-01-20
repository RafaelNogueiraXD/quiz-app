'use client';

import React, { useState } from 'react';
import Link from 'next/link'
import './globals.css'
const QuizSlider = () => {
  

  return (
    <div className="min-h-screen w-full bg-[#000000] flex items-center justify-center p-2 text-[#00ff00]  ">
      <div className="">
      <h1 className="text-4xl font-bold mb-8 text-center">
        <span>Hello, we are looking for extremely intelligent investigators.</span>
        <br/> 
        <span>
        To find them, we created a test. Good luck
        </span>
      </h1> 
      <div className="space-x-4"> 
      <Link href="/quiz">
        <center>
        <button className="px-4 py-2  text-white hover:border-dashed border-2 border-[#00ff00] rounded-lg shadow-md hover:bg-red-600 transition duration-300 text-[#00ff00] ">Go to Quiz</button>

        </center>
      </Link>
        {/* <button className="px-4 py-2  text-white hover:border-dashed border-2 border-sky-500 rounded-lg shadow-md hover:bg-red-600 transition duration-300">Labirinto</button>
        <button className="px-4 py-2  text-white hover:border-dashed border-2 border-sky-500 rounded-lg shadow-md hover:bg-red-600 transition duration-300">Dodge</button>
        <button className="px-4 py-2  text-white hover:border-dashed border-2 border-sky-500 rounded-lg shadow-md hover:bg-green-600 transition duration-300">Outros</button> */}
      </div>
      </div>
    </div>
  );
};

export default QuizSlider;