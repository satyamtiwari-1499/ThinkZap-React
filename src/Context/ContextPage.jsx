import React, { createContext, useState } from 'react'
import { data } from '../assets/data';

export const contextinfo = createContext();

const ContextPage = (props) => {
  

    const [index, setindex] = useState(0)
    const [question, setquestion] = useState(data[index])
    const [navOpen, setnavOpen] = useState(false)
      const [score, setscore] = useState(0);
    

  return (
    <contextinfo.Provider value={{question, setquestion,navOpen, setnavOpen,index, setindex,score, setscore}}>
        {props.children}
    </contextinfo.Provider>
  )
}

export default ContextPage