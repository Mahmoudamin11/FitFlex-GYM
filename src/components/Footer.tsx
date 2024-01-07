// DONE
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='space-up bg-main-blue max-[820px]:min-md-pad max-[860px]:md-pad max-[1040px]:min-lg-pad max-1290:lg-pad min-[1290px]:pad py-8 flex flex-col'>
            <div className='flex max-[600px]:flex-col max-[600px]:h-auto max-[600px]:pb-8 justify-between max-[1190px]:justify-around max-[720px]:justify-between items-center h-52 border-b-[0.5px] border-solid border-mid-gray'>

                <div className="flex gap-10 items-center  max-[600px]:items-center max-[1190px]:flex-col max-[1190px]:items-start max-[1190px]:gap-5">
                    <h2 className='text-3xl text-white font-bold max-[600px]:text-center'>Stay Connected<br className="max-[600px]: " /> With Us</h2>
                    
                    {/* Icons */}
                    <div className="flex gap-4">
                        <span className="text-white rounded-full w-5 h-5 p-5 flex items-center justify-center trans hover:bg-mid-gray cursor-pointer border-[1px] border-solid border-white">
                            <FontAwesomeIcon icon={faFacebookF} size="lg" />
                        </span>
                        <span className="text-white rounded-full w-5 h-5 p-5 flex items-center justify-center trans hover:bg-mid-gray cursor-pointer border-[1px] border-solid border-white">
                        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                        </span>
                        <span className="text-white rounded-full w-5 h-5 p-5 flex items-center justify-center trans hover:bg-mid-gray cursor-pointer border-[1px] border-solid border-white">
                        <FontAwesomeIcon icon={faGithubAlt} size="lg" />
                        </span>
                    </div>
                </div>

                <span className=" w-[0.5px] h-1/3  my-auto bg-mid-gray "></span>

                <div className='flex gap-10 items-center max-[600px]:mt-8 max-[600px]:items-center max-[1190px]:flex-col max-[1190px]:items-start max-[1190px]:gap-5'>
                    <h2 className='text-3xl text-white font-bold'>Join <br className="max-[600px]:hidden"/> Newsletter</h2>
                    <div className=" relative">
                        <input type="text" className=" outline-none text-xs bg-transparent border-[1px] w-72 max-[1225px]:w-64 border-solid border-mid-gray p-2 text-white rounded-md" placeholder="Your Email" />
                        <button className=" absolute bg-white text-main-blue font-bold px-2 py-[7px] trans hover:opacity-90 rounded-md top-0 right-0 text-sm">Submit</button>
                    </div>
                </div>
            </div>
            
            <div className="py-8 flex max-[540px]:grid grid-cols-2 max-[540px]:gap-y-8 max-[540px]:text-center max-[540px]:items-start place-items-center   justify-between border-b-[0.5px] border-solid border-mid-gray ">
                <div className="flex max-[540px]:w-full w-1/3 flex-col gap-5">
                    <h1 className="text-3xl text-white font-bold">FitFlex</h1>
                    <p className=" text-mid-gray max-[404px]:text-sm">Fitness professional need to have at least a high school diploma and in sime fields.</p>
                </div>
                
                <ul className="flex flex-col max-[540px]:gap-3  gap-5 max-[540px]:text-center">
                    <li className="text-white font-bold">Home</li>
                    <ul className="flex flex-col gap-2 ">
                        <li className=" text-mid-gray trans hover:text-white cursor-pointer">About</li>
                        <li className=" text-mid-gray trans hover:text-white cursor-pointer">Features</li>
                        <li className=" text-mid-gray trans hover:text-white cursor-pointer">Download</li>
                        <li className=" text-mid-gray trans hover:text-white cursor-pointer">Pricing</li>
                    </ul>
                </ul>
                
                <ul className="flex flex-col max-[540px]:gap-3 gap-5 max-[540px]:text-center">
                    <li className="text-white font-bold">Company</li>
                    <ul className="flex flex-col gap-2">
                        <li className=" text-mid-gray trans hover:text-white cursor-pointer">About us</li>
                        <li className=" text-mid-gray trans hover:text-white cursor-pointer">Reviews</li>
                        <li className=" text-mid-gray trans hover:text-white cursor-pointer">FAQs</li>
                        <li className=" text-mid-gray trans hover:text-white cursor-pointer">Stories</li>
                    </ul>
                </ul>
                
                <ul className="flex flex-col max-[540px]:gap-3 gap-5 max-[540px]:text-center">
                    <li className="text-white font-bold">Contact</li>
                    <ul className="flex flex-col gap-2">
                        <li className=" text-mid-gray trans hover:text-white cursor-pointer">+20 1228050484</li>
                        <li className=" text-mid-gray trans hover:text-white cursor-pointer"><a target="_blank" href="">My Gmail</a></li>
                        <li className=" text-mid-gray trans hover:text-white cursor-pointer">Contact us</li>
                        <li className=" text-mid-gray trans hover:text-white cursor-pointer">Terms of service</li>
                    </ul>
                </ul>
            
            </div>
            
            {/* Copyright */}
            <div className="pt-8 text-white w-full flex items-center justify-center max-[485px]:text-sm max-[435px]:text-xs max-[378px]:text-[10px]">
                Copyright &copy; {year} <span className="mx-1 text-main-green font-bold">Mahmoud Amin</span> All Rights Reserved
            </div>
        </div>
    )
}

export default Footer;