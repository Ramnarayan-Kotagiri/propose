import React, { useState } from "react"

import ASK from './Assets/ASK.gif'
import YES from './Assets/YES.gif'

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 10 + 22;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Don't break my heart, say yes!",
      "Are you really sure?",
      "Think about it again!",
      "You’re just teasing me, right?",
      "One more chance?",
      "Don’t make me sad!",
      "Please, reconsider!",
      "You're too cute to say no!",
      "This is your final answer?",
      "Listen to your heart!",
      "You’re really making me anxious!",
      "Why are you doing this to me?",
      "I’m not giving up!",
      "You're just testing me, aren't you?",
      "Don't be so hard on me!",
      "You’re killing me with suspense!",
      "Second thoughts?",
      "Any doubts?",
      "Final answer?",
      "You're making me sad ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <main className="main">
      {yesPressed ? (
        <>
          <img src={YES} />
          <div className="text-4xl my-4 ">YAYYYYY!!!!!!!!!</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            style={{ width: "400x", height: "240px" }}
            src={ASK}
          />
          <h1 className="text-2xl text-center md:text-4xl my-4 ">Ready to be my forever partner-in-crime? 😉</h1>
          <div className="flex flex-wrap mb-8 gap-6 text-center items-center">
            <button
              onClick={() => setYesPressed(true)}
              style={{ fontSize: yesButtonSize, height: yesButtonSize * 2 }}
              className="rounded-full cursor-pointer flex items-center border border-[#a7efb8] bg-[#a7efb8] py-3 px-12 text-white transition-all hover:bg-white hover:text-[#a7efb8] dark:bg-white dark:text-[#a7efb8] dark:hover:bg-[#a7efb8] dark:hover:text-white"
            >
              Yes
            </button>

            <button
              onClick={handleNoClick}
              style={{ height: "auto", maxHeight: "42px" }}
              className="rounded-full cursor-pointer border border-[#c90d0d] bg-[#c90d0d] py-3 px-8 text-sm text-white transition-all hover:bg-white hover:text-[#c90d0d] dark:bg-white dark:text-[#c90d0d] dark:hover:bg-[#c90d0d] dark:hover:text-white">
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </main>
  )
}

export default App
