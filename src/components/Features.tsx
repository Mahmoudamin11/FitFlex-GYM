// DONE
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import dumbbell from '../assets/dumbbell-gym 1.svg'; 
import food from '../assets/apple-4 1.svg'; 
import man from '../assets/muscular-male-gymnast-rising-a-dumbbell 1.svg'; 
import rope from '../assets/jump-rope 1.svg'; 

const Features = () => {
    const [width, setWidth] = useState(window.innerWidth);
    window.addEventListener('resize', () => { 
        setWidth(window.innerWidth)
    })
    const [cards] = useState([
        {'icon': dumbbell, 'title': 'Fitness Programs', 'text': 'Workouts and plans to help you reach your fitness goals, no matter your starting point.', 'state': 1},
        {'icon': rope, 'title': 'Personal Training', 'text': 'Get one-on-one guidance and motivation from our certified trainers for faster results.', "state": 2},
        {'icon': man, 'title': 'Senior Fitness', 'text': 'Stay active, agie, and independent as you age with our senior-focused programs.', "state": 3},
        {'icon': food, 'title': 'Food Monitor', 'text': 'Stay healthy, active, and aware using our food monitor and be watched by our trainers.', 'state': 4},
    ]);
    const [direction, setDirection] = useState('left')
    const Prev = () => { 
        setDirection('left');
    }
    const Next = () => { 
        setDirection('right');
    }

    return (
        <div className='max-[820px]:min-md-marg max-[860px]:md-marg max-[1040px]:min-lg-marg max-[1290px]:lg-marg min-[1290px]:marg space-up flex flex-col '>
            <div className='flex justify-between max-[720px]:flex-col max-[720px]:items-center max-[720px]:gap-2'>
                <h2 className='title max-[1210px]:text-3xl max-[920px]:text-2xl max-[720px]:text-3xl max-[435px]:text-3xl max-[350px]:text-xl max-[720px]:text-center'>Best Features <br /> We Offer For You</h2>
                <p className=' text-mid-black mt-2 w-1/2 max-[1165px]:w-[40%] max-[763px]:w-[45%] max-[1165px]:text-sm max-[750px]:w-text-sm max-[750px]:w-[50%] max-[580px]:w-3/4 max-[400px]:w-[90%] max-[1065px]:mt-3 max-[1065px]:text-xs trans hover:text-main-blue max-[720px]:text-center'>A comprehensive fitness program tailored to an <br className=" max-[750px]:hidden" /> individual typically focuses on one or more specific skills</p>
                
                {width >= 720 &&<div className='flex items-center gap-4 trans'>
                    <button id='prev' onClick={() => Prev()} className={direction == 'right' ? " w-12 h-12 p-8 border-[1px] border-solid border-main-blue bg-transparent flex items-center justify-center rounded-full" : " w-12 h-12 p-6 border-[1px] border-solid border-main-blue bg-transparent flex items-center justify-center rounded-full pointer-events-none"}>
                    <span className={direction == 'right' ?"w-10 h-10 p-6 rounded-full flex items-center justify-center bg-main-orange text-white hover:opacity-70 trans ": "w-10 h-10 p-6 rounded-full flex items-center justify-center text-main-blue "}>
                        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                    </span>
                    </button>
                    
                    <button id='next' onClick={() => Next()} className={direction == 'left' ? " w-12 h-12 p-8 border-[1px] border-solid border-main-blue bg-transparent flex items-center justify-center rounded-full" : " w-12 h-12 p-6 border-[1px] border-solid border-main-blue bg-transparent flex items-center justify-center rounded-full pointer-events-none"}>
                    <span className={direction == 'left' ?"w-10 h-10 p-6 rounded-full flex items-center justify-center bg-main-orange text-white hover:opacity-70 trans ": "w-10 h-10 p-6 rounded-full flex items-center justify-center text-main-blue "}>
                        <FontAwesomeIcon icon={faArrowRight} size="lg" />
                    </span>
                    </button>
                </div>}

            </div>
            
            {/* Cards */}
            {width >= 720 &&<div className={direction == 'left' ? " translate-x-1/6 trans w-full flex gap-5 mt-10  py-2":direction == 'right' ? " -translate-x-1/6 trans w-full flex gap-5 mt-10 overflow-x-hidden py-2": "w-full translate-x-0 flex gap-5 mt-10 overflow-x-hidden py-2" }>
                {
                    cards.map((card) => (
                        <div className={direction=='right' && card.state == 4 ?"flex translate-x-0  flex-col cursor-default group trans hover:shadow-card hover:opacity-90  bg-main-blue p-8 rounded-lg w-full items-end" : direction!='right' && card.state == 4 ?" hidden translate-x-[200%]":direction=='right' && card.state == 1 ?"hidden translate-x-[200%]  " : direction=='left' && card.state == 1 ?" flex flex-col translate-x-0 cursor-default group trans hover:shadow-card hover:opacity-90  bg-main-blue p-8 rounded-lg w-full items-end" :"flex  flex-col cursor-default group trans hover:shadow-card hover:opacity-90  bg-main-blue p-8 rounded-lg w-full items-end"}>
                            <img src={card.icon} alt="" className="w-10 mb-4" />
                            <div className="">
                                <h2 className="text-white text-xl max-[927px]:text-lg max-[779px]:text-[16px] font-bold  mb-2">{card.title}</h2>
                                <p className="text-mid-gray trans max-[779px]:text-sm group-hover:text-white">{card.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>}

            {width< 720 && <div className={"w-full translate-x-0 grid grid-cols-2 max-[535px]:grid-cols-1 gap-5 mt-10  py-2" }>
                {
                    cards.map((card) => (
                        <div className={"flex  flex-col cursor-default group trans hover:shadow-card hover:opacity-90  bg-main-blue p-8 rounded-lg w-full items-end"}>
                            <img src={card.icon} alt="" className="w-10 mb-4" />
                            <div className="">
                                <h2 className="text-white text-xl max-[927px]:text-lg max-[779px]:text-[16px] font-bold  mb-2">{card.title}</h2>
                                <p className="text-mid-gray trans max-[779px]:text-sm group-hover:text-white">{card.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>}

        </div>
    );
}

export default Features;