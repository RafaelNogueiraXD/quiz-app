'use client';

import React, { useState } from 'react';

import { redirect } from 'next/navigation'
import '../globals.css'
import { Background } from '../_components/background';
// import { Pop_up } from '../_components/pop_up';

const QuizSlider = () => {
  const [userAnswer, setUserAnswer] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  var contador = 0;
  const quizData = [
    {
      question: "I AM NOT ALIVE, BUT I GROW; I DON'T HAVE LUNGS, BUT I NEED AIR;",
      question2: "I DON'T HAVE A MOUTH, BUT WATER KILLS ME. WHAT AM I?",
      answer: "Fire",
      image: "/inicio.jpg",
      name: "",
      if_error: "Congratulations, you're dumber than a fifth grader"
    },
    {
      question: "What is the name of the adult stage of an insect?",
      question2: "",
      answer: "Imago",
      image: "/meio.jpg",
      name: "",
      if_error: "It looks like someone missed biology classes, try again. "

    },
    {
      question: "I have cities, but I don't have a house. I have mountains, but no trees. I have water, but no fish. What am I?",
      question2: "",
      answer: "Map",
      image: "/fim.jpg",
      name: "invited",
      if_error: "Making mistakes like this doesn't even come close to solving the case. "

    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (userAnswer.toLowerCase() === quizData[currentSlide].answer.toLowerCase()) {
      setCurrentSlide((prev) => (prev + 1) % quizData.length);
      if(quizData[currentSlide].name == "invited"){
        alert("Congratulations, attend this address: Bairro Vera Cruz, Rua Carlos Ribeiro 357, on January 26th at 3:30 pm");
        redirect(`/`);
      }
    }else{
      alert(quizData[currentSlide].if_error);
    }
    setUserAnswer('');
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4">
    <Background />

      <div className="hidden md:block w-4/5 aspect-video relative">
        <div className="absolute inset-0 overflow-hidden rounded-lg ">
          <div className="absolute inset-0 " />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          <h2 className="text-xl font-bold mb-8 text-[#00ff00] text-center">
            {quizData[currentSlide].question}
          </h2>
          <h2 className="text-xl font-bold mb-8 text-[#00ff00] text-center">
              {quizData[currentSlide].question2}
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