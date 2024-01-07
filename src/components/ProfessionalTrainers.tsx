// DONE
import {useState} from 'react';
const ProfessionalTrainers = () => {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => { 
    setWidth(window.innerWidth)
  });
  return (
    <div className={width > 610 ?'mt-72 max-[820px]:min-md-marg max-[860px]:md-marg max-[1040px]:min-lg-marg max-[1290px]:lg-marg min-[1290px]:marg':'space-up max-[820px]:min-md-marg max-[860px]:md-marg max-[1040px]:min-lg-marg max-[1290px]:lg-marg min-[1290px]:marg'}>
          <div className="flex justify-between max-[720px]:flex-col max-[720px]:items-center max-[720px]:gap-3">
            <h2 className='title max-[1210px]:text-3xl max-[920px]:text-2xl max-[720px]:text-3xl max-[435px]:text-2xl max-[350px]:text-xl max-[720px]:text-center'>Our Professional Trainer<br />Just For Your Service</h2>
            <p className=' text-mid-black mt-2 w-1/2 max-[485px]:w-3/4 trans hover:text-main-blue max-[920px]:text-sm max-[435px]:text-xs max-[720px]:text-center'>Coach can help amateur and professional athletes to be  successful in a particular sport by  teaching them the required skills needed.</p>
          </div>    

          <div className="mt-10 w-full flex justify-between max-[760px]:items-center max-[760px]:flex-col max-[760px]:gap-5">
            <div className="relative ml-5 max-[760px]:ml-0 bg-coach1 bg-cover border-[15px] max-[760px]:bg-center max-[1160px]:bg-center -rotate-[10deg] max-[760px]:rotate-0 border-solid border-main-orange shadow-card max-[1065px]:w-[27.5%] max-[760px]:w-full   min-[1065px]:w-[22.5%] h-96 rounded-full max-[760px]:rounded-md"></div>
            <div className=" border-[15px] bg-person bg-cover border-solid border-main-blue shadow-card max-[1065px]:w-[27.5%] max-[760px]:w-full max-[760px]:bg-center  min-[1065px]:w-[22.5%] h-96 rounded-full max-[760px]:rounded-md"></div>
            <div className="relative mr-5  max-[760px]:mr-0 border-[15px] bg-coach2 bg-cover bg-center rotate-[10deg] max-[760px]:rotate-0 border-solid border-main-orange shadow-card max-[1065px]:w-[27.5%] max-[760px]:w-full max-[760px]:bg-top  min-[1065px]:w-[22.5%] h-96 rounded-full max-[760px]:rounded-md"></div>
          </div>

          <div className="w-full flex justify-center">
            <button className="text-white mt-10  tracking-wide  bg-main-orange py-2 px-4 trans hover:opacity-80 rounded-md">
              Explore More
            </button>
          </div>

    </div>
  )
}

export default ProfessionalTrainers;