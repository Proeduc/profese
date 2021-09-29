import React, { useEffect, useState } from 'react'

import './Discussion.css'
import { useParams } from "react-router";

import { db } from '../../firebase'

export default function Custom() {
  const[fname,setFname]=useState()
 
  const { id } = useParams();
  const [topic, setTopics] = useState(null);
  const LoadResults = async () => {
    try {
      const docRef = db.collection("answers").doc(id);
      const result = await docRef.get();
      if (result.exists) {
        setTopics(result.data());
       
      } else {
        console.log("no Document Found");
      }

    }
    catch (error) {
      console.log("error:", error);
    }
  };
  useEffect(() => {
    LoadResults();
  });
  if (!topic) {
    return <h1>Loading</h1>;
  }


  const addData =(e)=>{
    e.preventDefault();
    console.log(fname )
   try{
    db.collection('topics').doc(id).set({
        FirstName:[...fname,fname],
       

    });
   console.log("submit")
   
   }catch(err){
    console.log("submit err")
   }
  }
  return (
    <div>
     {topic.FirstName}<br/>
    

     <input
                  type="text"
                  placeholder="Subject"
                  className="form__input"
                  value={fname} onChange={(e)=>setFname(e.target.value)} 
                  required
                />
                 {/* <Button type="submit" onClick={addData} variant="primary fc p-1 col-sm-10">Create Account</Button>
                  */}
<button type="submit" onClick={addData}>submit</button>
     
    </div>
  )
}
