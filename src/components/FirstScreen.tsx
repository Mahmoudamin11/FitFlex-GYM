// DONE
import mainPic from '../assets/Component 1.png';
import human1 from '../assets/h1.png';
import human2 from '../assets/h2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const FirstScreen = () => {
  return (
    <div className='grid grid-cols-[1fr_400px] max-[1117px]:grid-cols-[1fr_330px] max-[885px]:grid-cols-[1fr_280px] max-[700px]:flex flex-col justify-center items-center  max-[720px]:gap-12 max-[1290px]:gap-16  min-[1290px]:gap-32 max-[820px]:min-md-pad max-[860px]:md-pad max-[1040px]:min-lg-pad max-[1290px]:lg-pad min-[1290px]:pad mt-16 max-[1117px]:mt-[105px] max-700:mt-0'>
        <div className='flex flex-col justify-center gap-10 max-[1285px]:gap-12 max-[700px]:items-center max-700:h-[90vh]'>
            <h1 className='min-[1285px]:text-[150px] max-510:text-8xl max-410:text-[85px] max-372:text-[75px] max-700:ml-0 max-700:text-[120px] max-[720px]:text-[80px] max-[775px]:text-[90px] max-[860px]:text-[105px] max-[939px]:text-[95px] max-[1180px]:text-[110px] max-[1285px]:text-[130px] -ml-3   leading-none text-main-blue font-bold relative'>
                Elvate <br /> Fitness
                <span className=' absolute text-lg max-[1175px]:text-sm cursor-pointer trans hover:shadow-card hover:rotate-0 max-[1290px]:top-[94%] max-[1290px]:right-3 max-[1285px]:top-[94%] max-[1285px]:right-16 max-[1250px]:top-[94%] max-[1250px]:right-6 max-[1205px]:-right-2 max-[1180px]:right-10 max-[1145px]:right-0 max-[1116px]:right-14 max-[1090px]:right-8 max-[1065px]:-right-2 max-[1040px]:right-16 max-[1000px]:right-6 max-[965px]:-right-2 max-[938px]:right-6 max-[905px]:-right-2 max-[885px]:right-2 max-[860px]:right-2 max-[780px]:-right-8 max-[775px]:right-4 max-[730px]:-right-4 max-[720px]:right-4 max-[700px]:-right-4     min-[1290px]:top-[96%] min-[1290px]:right-6  transform -translate-y-3/4 -rotate-45 max-[1175px]:w-12 max-[1175px]:h-12  w-16 h-16 bg-main-green text-main-blue flex items-center justify-center rounded-full'>GYM</span>    
            </h1>
            <p className='max-700:text-center max-700:w-2/3 uppercase text-main-blue min-[775px]:text-lg max-[720px]:text-sm  font-semibold w-3/4 max-[1258px]:w-[80%] max-[1220px]:w-[85%] max-[1191px]:w-[90%] max-[1163px]:w-full max-[720px]:w-[90%] max-425:w-full'>Fitness Program tailored to an individual typically focuses on skills</p>
            <div className='flex '>
                <button className="text-white tracking-wide bg-main-blue py-2 px-4 trans hover:opacity-80 rounded-md">Join Us Now</button>
                <div className='flex flex-row-reverse'>
                    <p className='px-5 cursor-pointer peer max-[909px]:text-xs  trans hover:shadow-card shadow-lg  rounded-full  bg-white mr-8 z-20 flex items-center justify-center font-bold text-main-blue'>
                        Play Again
                    </p>
                    <div className='-mr-2 max-[890px]:ml-2 ml-8 w-[50px] h-[50px] trans peer-hover:play rounded-full bg-transparent border-2  border-solid border-main-blue flex justify-center items-center'>
                        <div className="relative cursor-pointer  hover:opacity-70  trans  z-30 w-10 h-10 rounded-full bg-main-orange p-2 text-white flex items-center justify-center ">
                        <FontAwesomeIcon icon={faPlay}  />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <div id='img' className='imgDiv max-[1117px]:w-[330px] max-[885px]:w-[280px] max-[700px]:hidden'>
            <img src={mainPic} className='w-[480px]  h-[500px] max-[1117px]:w-[330px] max-[1117px]:h-[420px]  ' />
            
            <div className='flex w-full absolute top-0 pt-3 left-0 px-5 max-[885px]:px-3 justify-between items-center'>
                
                <span className='w-16 h-16 max-[885px]:w-12 max-[885px]:h-12 bg-main-green trans hover:opacity-70 rounded-full  text-main-blue shadow-card flex justify-center items-center'>
                    <FontAwesomeIcon icon={faDumbbell} size='xl' />
                </span>
                
                <span className='  trans hover:opacity-70  px-3 py-2 text-sm max-[885px]:text-xs rounded-md bg-main-blue font-bold text-main-green cursor-default'>Fitness Goals</span>
                
            </div>

            <div className=' absolute w-[60%] max-[1117px]:w-3/4 trans group  hover:shadow-card cursor-pointer top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-main-green rounded-md'>
                <div className='flex justify-between items-center'>
                    {/* PICS */}
                    <div className='flex'>
                        <img src={human1} alt="" className='w-10 h-10 max-[885px]:w-8 max-[885px]:h-8 border-[1px] border-solid border-white rounded-full z-10 ' />
                        <img src={human2} alt="" className='w-10 h-10 max-[885px]:w-8 max-[885px]:h-8 border-[1px] border-solid border-white rounded-full -ml-2 z-20 ' />
                        <span className='w-10 h-10 max-[885px]:w-8 max-[885px]:h-8 trans group-hover:play rounded-full bg-main-blue  text-white flex items-center justify-center -ml-2 z-30 trans hover:opacity-70'>
                        <FontAwesomeIcon icon={faPlay}  />
                        </span>

                    </div>

                    <div className='flex flex-col h-full font-extrabold text-lg max-[885px]:text-sm leading-tight  text-main-blue'>
                        <span>Check</span>
                        <span>Review</span>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default FirstScreen