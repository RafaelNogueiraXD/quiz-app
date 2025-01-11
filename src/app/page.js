'use client';

import React, { useState } from 'react';
import Link from 'next/link'
import './globals.css'
const QuizSlider = () => {
  

  return (
    <div className="min-h-screen w-full bg-[#333333] flex items-center justify-center p-2  ">
      <div className="">
      <h1 className="text-4xl font-bold mb-8">Bem-vindo aos Enigmas</h1> 
      <div className="space-x-4"> 
      <Link href="/quiz">
        <button className="px-4 py-2  text-white hover:border-dashed border-2 border-sky-500 rounded-lg shadow-md hover:bg-red-600 transition duration-300">Quiz</button>
      </Link>
        <button className="px-4 py-2  text-white hover:border-dashed border-2 border-sky-500 rounded-lg shadow-md hover:bg-red-600 transition duration-300">Labirinto</button>
        <button className="px-4 py-2  text-white hover:border-dashed border-2 border-sky-500 rounded-lg shadow-md hover:bg-red-600 transition duration-300">Dodge</button>
        <button className="px-4 py-2  text-white hover:border-dashed border-2 border-sky-500 rounded-lg shadow-md hover:bg-green-600 transition duration-300">Outros</button>
      </div>
      </div>
    </div>
  );
};

export default QuizSlider;