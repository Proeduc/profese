import React from 'react'

function Footer() {
    return (
        <div className="container-fluid" style={{
            position: "fixed",
            bottom: "0px",
            backgroundColor: "#111", 
            lineHeight: "50px",
            width:"100%",
            color: "white"
        }}>
            <p style={{marginLeft: "20px"}}>Copyright 2010-2021 Profese. All Rights Reserved.</p>
        </div>
    )
}

export default Footer
