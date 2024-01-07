// DONE
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Feedback = () => {
    const info = [
        {name: 'Steven Mark', role:'Doc.'},
        {name: 'John Parker', role:'Eng.'},
        {name: 'Mark Davies', role:'Law.'},
    ];

    const star = [<FontAwesomeIcon icon={faStar} />, <FontAwesomeIcon icon={faStar} />, <FontAwesomeIcon icon={faStar} />, <FontAwesomeIcon icon={faStar} />, <FontAwesomeIcon icon={faStar} />];

    return (
        <div className="max-[820px]:min-md-marg max-[860px]:md-marg max-[1040px]:min-lg-marg max-[1290px]:lg-marg min-[1290px]:marg space-up">
            <div className="flex justify-between max-[720px]:flex-col max-[720px]:items-center max-[720px]:gap-3">
                <h2 className='title max-[1210px]:text-3xl max-[920px]:text-2xl max-[720px]:text-3xl max-[435px]:text-2xl max-[350px]:text-xl max-[720px]:text-center'>What People Thought <br />About Our Service</h2>
                <p className=' text-mid-black mt-2 w-1/2 max-[750px]:w-[50%] max-[580px]:w-3/4 max-[400px]:w-[90%] trans hover:text-main-blue max-[720px]:text-center'>professional athletes to be  successful in a particular sport by  teaching them the required skills needed.</p>
            </div>

            <div className="flex mt-10 gap-8 max-[750px]:flex-col max-[750px]:justify-center max-[750px]:items-center max-[750px]:gap-5 ">
                {
                    info.map((card) => (
                        <div className={"relative flex flex-col gap-8 cursor-default group trans hover:shadow-card hover:opacity-90  bg-main-blue p-8 rounded-lg w-full "}>
                            <div className="w-full flex justify-center gap-2">
                                {
                                    star.map(() => (
                                        <span className="text-main-green"><FontAwesomeIcon icon={faStar} /></span>
                                    ))
                                }
                            </div>

                            <p className="text-xl text-main-gray max-[1163px]:text-lg max-[1061px]:text-[16px] max-[931px]:text-sm uppercase">excellent personal trainer who really care and go above & beyond to help me achieve my goals.</p>
                            <div className="flex justify-between w-full items-center">
                                <span className=" font-bold text-white">{card.name}</span>
                                <span className="text-mid-gray font-bold text-sm">{card.role}</span>
                            </div>
                            <span className=" absolute top-3 left-8 text-mid-gray opacity-30 text-2xl"><FontAwesomeIcon icon={faQuoteLeft} size="2xl" /></span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Feedback;