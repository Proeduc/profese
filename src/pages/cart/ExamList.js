import React from 'react'

function ExamList() {
    return (
        <>
           {/* show this page when nothing in cart copy it to another sections also */}
           <div className='cart__empty' align="center">
                <h3 style={{color:"darkgray"}}><b>NOTHING IN CART</b></h3>
                <img src="https://image.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg"/>
           </div>
        </>
    )
}

export default ExamList
