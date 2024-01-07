// DONE
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import List from './List';
const NavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => { 
    setWidth(window.innerWidth)
  })
  const [list, setList] = useState(0);

  
  const showList = () => { 
    if (list == 1)
    {
      setList(0);
    }
    else { 
      setList(1);

    } 
  }
  
  return (
    <>
    
    <div className="flex justify-between items-center bg-white max-[820px]:min-md-pad max-[860px]:md-pad max-[1040px]:min-lg-pad max-[1290px]:lg-pad min-[1290px]:pad  py-5">

        <h1 className="text-3xl font-bold text-main-blue">FitFlex</h1>
        
        {width > 700 &&<ul className="flex items-center gap-10 max-[808px]:gap-5">
            <li className="cursor-pointer text-main-black font-bold">Home</li>
            <li className="cursor-pointer text-mid-black trans hover:text-black">About</li>
            <li className="cursor-pointer text-mid-black trans hover:text-black">Feature</li>
            <li className="cursor-pointer text-mid-black trans hover:text-black">Download</li>
            <li className="cursor-pointer  text-mid-black trans hover:text-black">Pricing</li>
        </ul>}
        {width <= 700 && <FontAwesomeIcon onClick={() => showList()} icon={faBars} size="xl" className=" cursor-pointer trans text-main-blue" />
        }
        {width > 700 && <button className="text-white tracking-wide bg-main-orange py-2 px-4 trans hover:opacity-80 rounded-md">
            Contact Us
        </button>}
    </div>
    <List List={list} />
    </>
  )
}

export default NavBar;