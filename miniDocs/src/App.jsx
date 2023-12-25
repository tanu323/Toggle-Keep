import React from 'react';
import Background from './components/Background.jsx';
import Forground from './components/Forground.jsx';

const App = () => {
  return (
    //Absolute position: element apne normal position ke hisab se shift hoga
    //Relative position: element apne parent position ke hisab se shift hoga(condition: Parent element ke hisab se position karne ke liye parent ko koi na koi postion(like absolute or relative or any) deni padegi otherwise wo by default body ke hisan se khud ki position ko shift karega)
    <div className='relative w-screen h-screen bg-zinc-800'>
      <Background />
      <Forground />
    </div >
  )
}

export default App
