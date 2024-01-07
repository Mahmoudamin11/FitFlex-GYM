// DONE
import { useState } from "react";
const OnlineTraining = () => { // 610
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => { 
    setWidth(window.innerWidth)
  });
  const data = [
    {'lessons': '50 + 5 Lessons', 'price': '$350', 'valid': 'Valid for 170 days'},
    {'lessons': '70 + 8 Lessons', 'price': '$550', 'valid': 'Valid for 200 days'},
    {'lessons': '90 + 9 Lessons', 'price': '$850', 'valid': 'Valid for 250 days'},
  ]
  return (
    <div className={width > 610 ? 'space-up bg-onlineTrain relative w-full h-96 max-[470px]:p-14 p-20 mb-32 bg-cover bg-bottom flex flex-col items-center ' : 'space-up bg-onlineTrain relative w-full h-96 max-[470px]:p-14 p-20 mb-32 bg-cover bg-bottom flex flex-col items-center justify-center '}>
      <div className=" absolute w-full h-full bg-main-blue opacity-80 z-10 top-0 left-0"></div>
      <div className="flex flex-col items-center">
        <h1 className="title max-[477px]:text-3xl text-white z-20 relative text-center">Online Personal Training</h1>
        <p className=" text-mid-gray text-2xl mt-6 font-bold relative z-20">Membership</p>
        <p className=" text-main-gray text-xl mt-6  relative z-20 text-center">Choose Your Subscribtion</p>
        {width<= 610 && <div className="flex gap-5 relative z-20 mt-6 ">
          {
            data.map((btn) => (
              <button className="bg-main-orange text-main-blue trans cursor-pointer hover:opacity-80 hover:text-white px-4 py-2 rounded-md font-bold">{btn.price}</button>
            ))
          }
        </div>}
      </div>


      {/* Cards */}
      {width > 610 && <div className="flex gap-8 relative z-20 mt-8">
        {
          data.map((card) => (
            <div className="bg-white shadow-md  max-[815px]:py-5  py-8 px-10 rounded-xl flex flex-col gap-8 items-center relative">
              <div className="px-5 py-3 bg-main-blue text-white font-bold rounded-md cursor-default max-[963px]:text-sm max-[915px]:text-xs text-center">{card.lessons}</div>
              <p className="text-main-orange font-bold text-4xl max-[740px]:text-3xl">{card.price}</p>
              <div className="text-main-blue mb-2 max-[895px]:text-sm max-[851px]:text-xs text-center max-[851px]:font-bold">{card.valid}</div>
              <button className="bg-main-blue font-bold text-main-green rounded-md absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2  px-10 py-2 trans cursor-pointer hover:opacity-90">Buy</button>
            </div>
          ))
        }
      </div>}
    </div>
  )
}

export default OnlineTraining