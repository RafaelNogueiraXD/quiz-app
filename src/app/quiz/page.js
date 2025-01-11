'use client';

import React, { useState } from 'react';

import { redirect } from 'next/navigation'
import '../globals.css'
const QuizSlider = () => {
  const [userAnswer, setUserAnswer] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  var contador = 0;
  const quizData = [
    {
      question: "Qual é a capital do Brasil?",
      answer: "1",
      image: "/inicio.jpg",
      name: ""
    },
    {
      question: "Quantos planetas existem no sistema solar?",
      answer: "2",
      image: "/meio.jpg",
      name: ""
    },
    {
      question: "Qual é o maior país do mundo?",
      answer: "3",
      image: "/fim.jpg",
      name: "invited"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (userAnswer.toLowerCase() === quizData[currentSlide].answer) {
      setCurrentSlide((prev) => (prev + 1) % quizData.length);
      if(quizData[currentSlide].name == "invited"){
        alert("voce foi convidado");
        redirect(`/`);
      }
    }else{
      alert("errou!");
    }
    setUserAnswer('');
  };

  return (
    <div className="min-h-screen w-full bg-[#333333] flex items-center justify-center p-4">
      {/* Layout para telas pequenas (versão 1) */}
      <div className="w-4/5 md:hidden shadow-animate ">
        <div className="bg-gray rounded-lg shadow-xl p-8">
          <div className="relative aspect-video mb-8">
            <img
              src={quizData[currentSlide].image}
              alt="Quiz"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-white-800">
              {quizData[currentSlide].question}
            </h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 text-black-800">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                class="
                block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6
                rounded-lg
                focus:ring-2 ring-purple-500 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900
                "
                placeholder="Digite sua resposta..."
              />
              
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg 
                         hover:bg-blue-600 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Layout para telas médias e grandes (versão 2) */}
      <div className="hidden md:block w-4/5 aspect-video relative">
        <div className="absolute inset-0 overflow-hidden rounded-lg shadow-animate">
          <img
            src={quizData[currentSlide].image}
            alt="Quiz"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">
            {quizData[currentSlide].question}
          </h2>
          
          <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center gap-4">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="w-full px-4 py-3 bg-white/90 backdrop-blur border-0 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-white/80
                        placeholder-gray-500 text-gray-800"
              placeholder="Digite sua resposta..."
            />
            
            <button
              type="submit"
              className="px-8 py-3 bg-white/20 backdrop-blur border-2 border-white
                       text-white rounded-lg hover:bg-white/30 transition-colors
                       font-semibold"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuizSlider;