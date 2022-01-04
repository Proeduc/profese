import React from 'react'

function SessionList() {
    return (
        <>
        <h3 style={{color:"grey"}}><b>CART ITEMS</b></h3> 
        <table className="table table-responsive"> 
            <tbody>
                <tr>
                    <td>01</td>
                    <td><img style={{width:"100px", height:"100px"}} src='https://images.unsplash.com/flagged/photo-1558963675-94dc9c4a66a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdW1lbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/></td>
                    <td>
                        <div><span style={{color:"grey"}}>Topic: </span>Compiler design</div>
                        <div><span style={{color:"grey"}}>Session Date: </span>10.01.22</div>
                        <div><span style={{color:"grey"}}>Requested On: </span>01.01.22</div>
                        <div><span style={{color:"grey"}}>Duration: </span>45 Mintues</div>
                    </td> 
                    {/* use this button if approved */}
                    <td><button className='btn btn-success'>Pay & view solution</button></td>
                </tr>


                <tr>
                    <td>02</td>
                    <td><img style={{width:"100px", height:"100px"}} src='https://images.unsplash.com/flagged/photo-1558963675-94dc9c4a66a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdW1lbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/></td>
                    <td> 
                        <div><span style={{color:"grey"}}>Topic: </span>Compiler design</div>
                        <div><span style={{color:"grey"}}>Session Date: </span>10.01.22</div>
                        <div><span style={{color:"grey"}}>Requested On: </span>01.01.22</div>
                        <div><span style={{color:"grey"}}>Duration: </span>45 Mintues</div>
                        {/* if pending then give remove option */}
                        <br/>
                        <button className='btn btn-danger'>Remove from Cart</button>
                    </td> 
                    {/* use this button if not approved */}
                    <td><button className='btn btn-danger' disabled>Pending</button></td>
                </tr>

                <tr>
                    <td>03</td>
                    <td><img style={{width:"100px", height:"100px"}} src='https://images.unsplash.com/flagged/photo-1558963675-94dc9c4a66a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdW1lbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/></td>
                    <td>
                        <div><span style={{color:"grey"}}>Topic: </span>Compiler design</div>
                        <div><span style={{color:"grey"}}>Session Date: </span>10.01.22</div>
                        <div><span style={{color:"grey"}}>Requested On: </span>01.01.22</div>
                        <div><span style={{color:"grey"}}>Duration: </span>45 Mintues</div>
                    </td> 
                    {/* use this button if approved */}
                    <td><button className='btn btn-success'>Pay & view solution</button></td>
                </tr>
            </tbody>
        </table>
    </>
    )
}

export default SessionList
