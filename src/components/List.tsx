// DONE
import { useState } from "react";
const List = ({List}:any) => {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => { 
    setWidth(window.innerWidth)
  })
  return (
        <>
        {width <= 700 && <ul className={List == 1 ?"flex  relative  flex-col w-full max-[820px]:min-md-pad max-[860px]:md-pad max-[1040px]:min-lg-pad max-[1290px]:lg-pad min-[1290px]:pad py-5 bg-white  items-start gap-5" : "hidden"}>
            <li className="cursor-pointer text-main-black font-bold hover:pl-2 hover:bg-main-orange hover:text-white w-full">Home</li>
            <li className="cursor-pointer text-mid-black trans hover:pl-2 hover:bg-main-orange hover:text-white w-full">About</li>
            <li className="cursor-pointer text-mid-black trans hover:pl-2 hover:bg-main-orange hover:text-white w-full">Feature</li>
            <li className="cursor-pointer text-mid-black trans hover:pl-2 hover:bg-main-orange hover:text-white w-full">Download</li>
            <li className="cursor-pointer  text-mid-black trans hover:pl-2 hover:bg-main-orange hover:text-white w-full">Pricing</li>
            <li className="cursor-pointer  text-main-orange trans hover:pl-2 hover:bg-main-orange hover:text-white w-full">Contact</li>
        </ul>}
        </>
  )
}

export default List;