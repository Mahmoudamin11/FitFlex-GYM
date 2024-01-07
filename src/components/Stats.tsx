// DONE
import { useState } from "react";
const Stats = () => {
  const [text] = useState([
    {'title':'2500', 'topic':'New users login every single day to our app'},
    {'title':'62', 'topic':'Years of EXP in health induates by experts'},
    {'title':'130', 'topic':'Dranch offices to give you best services ever'},
    {'title':'150k+', 'topic':'Users install ours every single days'},
  ])
  return (
    <div className="bg-main-blue rounded-lg flex max-[565px]:flex-col  justify-between max-[565px]:gap-8 gap-2 p-8 space-up max-[820px]:min-md-marg max-[860px]:md-marg max-[1040px]:min-lg-marg max-[1290px]:lg-marg min-[1290px]:marg">
      {
        text.map((part) => (
          <div className="flex flex-col gap-5 max-[760px]:gap-3 max-[565px]:gap-2">
            <h2 className="text-white font-bold text-[42px] max-[760px]:text-[30px] max-[565px]:text-[40px]">{part.title}</h2>
            <p className="text-mid-gray max-[760px]:text-sm max-[565px]:text-lg  trans hover:text-white ">{part.topic}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Stats;