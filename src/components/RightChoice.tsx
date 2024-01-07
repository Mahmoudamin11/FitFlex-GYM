// DONE
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import man from '../assets/shirtless-bodybuilder-jumping-place (1) 1.png';

const RightChoice = () => {
    const data = [
        {'txt': 'Wide range of equipment'},
        {'txt': '1 free program for new member'},
        {'txt': 'State-of-the-art equipment'},
        {'txt': '24-hour gym access'},
        {'txt': 'Nutrition consulting'},
    ]
  return (
    <div className='space-up max-[820px]:min-md-marg max-[860px]:md-marg max-[1040px]:min-lg-marg max-[1290px]:lg-marg min-[1290px]:marg flex justify-between max-[563px]:justify-center max-[563px]:items-center'>
        <div className="imgDiv w-1/2 max-[750px]:w-[40%] max-[650px]:w-[45%] max-[750px]:h-96 max-[563px]:hidden">
            <img src={man} alt="" className="w-full h-full" />
            <div className=' max-[720px]:hidden flex flex-col justify-between h-full absolute top-0 pt-3 right-0 py-3 pr-3 items-end '>
                
                <span className='w-16 h-16 bg-main-green trans hover:opacity-70 rounded-md   text-main-blue flex justify-center items-center max-[750px]:text-sm'>
                    <FontAwesomeIcon icon={faCrown} size='xl' />
                </span>
                
                <span className='  trans hover:opacity-70  px-3 py-3 text-sm rounded-md bg-main-blue font-bold text-main-green cursor-default flex flex-col items-center gap-3 max-[750px]:text-sm'>
                    <span className='trans text-main-green max-[750px]:text-sm'>
                        <FontAwesomeIcon icon={faUserTie} size='xl' />
                    </span>
                    <p className="text-xs text-main-green text-center w-full">Pro.<br /> trainer</p>
                </span>
                
            </div>
        </div>
        
        <div className="flex flex-col max-[563px]:text-center max-[750px]:gap-7 max-[563px]:gap-10 gap-8 my-auto max-[750px]:text-sm max-[650px]:w-1/2 max-[563px]:justify-center max-[563px]:items-center max-[563px]:w-full">
            <h2 className="title max-[563px]:text-3xl  max-[1210px]:text-3xl max-[920px]:text-2xl max-[720px]:text-3xl max-[650px]:text-2xl max-[350px]:text-xl ">What Makes us the <br className=" max-[563px]:hidden" />Right Choice?</h2>
            <p className=' text-mid-black max-[563px]:text-center  trans hover:text-main-blue max-[1170px]:text-sm max-[1090px]:text-xs '>A comprehensive fitness program tailored to an<br className=" max-[650px]:hidden" />  individual typically focuses on one or more specific skills</p>
            <div className="flex flex-col max-[750px]:gap-3 gap-8">
                {
                    data.map((reason) => (
                        <div className="flex">
                            <FontAwesomeIcon icon={faCircleChevronRight} className="text-main-blue max-[563px]:mt-[3px] mt-1" />
                            <p className=" ml-2 text-main-blue font-bold">{reason.txt}</p>
                        </div>
                    ))
                }
            </div>
            <button className="text-white tracking-wide max-[563px]:w-2/3 max-[430px]:w-full w-1/3 max-[1170px]:w-1/2 bg-main-orange py-2 px-4 trans hover:opacity-80 rounded-md">
                Explore More
            </button>
        </div>

    </div>
  )
}

export default RightChoice;