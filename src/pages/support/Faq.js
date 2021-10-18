import { useState } from "react"
import React from 'react'
import './Support.css'

function Faq({ques, ans}) {
    const [Show, setShow] = useState(false)
    return (
        <>
            <div className="support__faq">
                <h4 className="faq__ques text-justify">
                    {
                        Show ? 
                        <span 
                        className="glyphicon glyphicon-minus" 
                        style={{cursor:"pointer"}} 
                        onClick= {() => setShow(!Show)}>&nbsp;</span>
                        :<span 
                        className="glyphicon glyphicon-plus"
                        style={{cursor:"pointer"}} 
                        onClick= {() => setShow(!Show)}>&nbsp;</span>
                    }
                    {ques}
                </h4>
                {
                    Show && 
                    <div className="support__faq__ans">
                        <p className="support__faq__para text-primary text-justify">{ans}</p> 
                    </div> 
                } 
            </div>
        </>
    )
}

export default Faq
