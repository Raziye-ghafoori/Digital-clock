import { useState,useEffect  } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour12: true });
  };

  const getDay = (Day:number)=>{
    const Days =['Sun','Mon','Tues','Wed','Thurs','Fri','Sat']
    return Days[Day]
  }

  const getMonth = (Month:number)=>{
    const Months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return Months[Month]
  }

  

  return (
    <>
      <div className=' bg-white/30 backdrop-blur-sm w-[700px] h-[500px] flex flex-col justify-evenly rounded-[10px]'>
        <div className='font-bold text-[95px] text-slate-300 text-shadow-lg/30 ' >
        {formatTime(time)}
        </div>
        <hr className='w-[80%] mx-[auto] text-amber-100' />
        <div className='text-[30px] flex justify-around text-shadow-lg/20'>
          <div>
            <div className=' pb-[10px] italic'>Day</div> <div className='font-bold'>{getDay(time.getDay())} , {time.getDate()} </div> 
          </div>
          <div><div className=' pb-[10px] italic'>Month</div>  <div className='font-bold'>{getMonth(time.getMonth())}</div> </div>
          <div>
           <div className=' pb-[10px] italic'>Year</div><div className='font-bold'>{time.getFullYear()}</div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
