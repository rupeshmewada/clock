import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {

  const [clock, setClock] = useState({ hour: 0, minute: 0, second: 0 });
  const [status, setstatus] = useState();

  function watch(params) {
    const time = new Date()

    const hour = time.getHours()
    const minute = time.getMinutes()
    const second = time.getSeconds()

    const timeset =
      `${hour}:${minute}:${second}`

    // console.log(timeset);
    setClock({ hour, minute, second })
  }


  useEffect(() => {
  }, []);

  const StartWatch = () => {
    const inter = setInterval(() => {
      watch()
    }, 1000);

    setstatus(inter)
  }


  function StopWat(params) {

    setstatus(clearInterval(status))
    setClock({ hour: 0, minute: 0, second: 0 }) 
  }

  return (
    <div className='flex h-screen items-center'>
      <div className='bg-gray-400 rounded shadow-xl border-gray-600 border-2 p-5'>

        <div className=' h-24 text-white flex items-center justify-evenly m-auto text-4xl  '>
           {clock.hour}:{clock.minute>9?clock.minute:'0'+clock.minute}:{clock.second > 9 ? clock.second : '0' + clock.second}
        </div>
        <button onClick={StartWatch} className='bg-green-500 w-auto m-2'>Start</button>
        <button onClick={StopWat} className='bg-red-500 w-auto m-2'>Stop</button>

      </div>
    </div>
  );
}

export default App;
