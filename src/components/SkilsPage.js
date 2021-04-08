import React from 'react'
import { AiFillCopyrightCircle, AiFillDatabase} from 'react-icons/ai'
import {BsGearWideConnected} from 'react-icons/bs'
import { CgCPlusPlus } from 'react-icons/cg'
import { FaIndustry } from 'react-icons/fa'
import {MdHttp} from 'react-icons/md'
import { SiJavascript, SiArduino, SiHeroku, SiWebpack} from 'react-icons/si'

const SkillPage = () => (
     <div className="skill-page-content">
          <div className="web-dev-container">

               <h2><MdHttp/><AiFillDatabase/> Web Development</h2>
               <SiJavascript className="skill-page-icon"/>
               <AiFillCopyrightCircle className="skill-page-icon"/>
               <CgCPlusPlus className="skill-page-icon"/>
               <SiHeroku className="skill-page-icon"/>
               <SiWebpack className="skill-page-icon"/>

          </div>
          <div className="ind-automation-container">

               <h2><BsGearWideConnected/> Industrial Automation</h2>
               <FaIndustry className="skill-page-icon" />
               <SiArduino className="skill-page-icon" />
               
          </div>
     </div>
)

export default SkillPage