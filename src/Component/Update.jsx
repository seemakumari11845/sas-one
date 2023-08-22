import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const id=JSON.parse(window.localStorage.getItem("st"))

export default function Update(){
    const [name,setName]=useState("")
    const [Fname,setFname]=useState("")
    const [Mname,setMname]=useState("")
    const [Dob,setDob]=useState("")
    const[Gender,setGender]=useState("")
    const [Mob,setMob]=useState("")
    const [Email,setEmail]=useState("")
    const [Dpartment,setDpartment]=useState("")

    useEffect(()=>{
        const id= JSON.parse(window.localStorage.getItem("st"));
        
        fetch('http://localhost:5000/Sipl/'+id)
        .then((res)=>{
            return res.json()
        }).then((resp)=>{
            setName(resp.name);
            setFname(resp.Fname);
            setMname(resp.Mname);
            setDob(resp.Dob);
            setGender(resp.Gender);
            setMob(resp.Mob);
            setEmail(resp.Email);
            setDpartment(resp.Dpartment);  
            
        })

    },[])

function Update(){
    let data={name,Fname,Mname,Dob,Gender,Mob,Email,Dpartment}

   fetch(`http://localhost:5000/Sipl/${id}`,{
    method:"PUT",
   headers:{
    "Accept":"Application/json",
    
        "Content-Type":"Application/json"
    },
    body:JSON.stringify(data)})
    .then((res)=>{
        res.json()
    }).then((resp)=>{
        console.log(resp)
        
    })

}
    return(
        <React.Fragment>
       <div id="outer">
       <div id="box1">
      
      <h1 style={{textAlign:"center"}}>Registration</h1>
      <form>
      Name:<br/><input type="text" placeholder="please enter Student name" class="a" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
      
      Fname:<br/><input type="text"   placeholder="please enter Father name" class="a" value={Fname} onChange={(e)=>setFname(e.target.value)}/><br/>
      Mname:<br/><input type="text"  placeholder="" class="a" value={Mname} onChange={(e)=>setMname(e.target.value)}/><br/>
      Dob:<br/><input type="date" class="a" placeholder="" value={Dob} onChange={(e)=>setDob(e.target.value)}/><br/>
      Gender:<br/><input type="text" class="a" placeholder="" value={Gender} onChange={(e)=>setGender(e.target.value)}/><br/>
      Mob:<br/><input type="number" class="a" placeholder="" value={Mob} onChange={(e)=>setMob(e.target.value)}/><br/>
      Email:<br/><input type="email" class="a" placeholder="" value={Email} onChange={(e)=>setEmail(e.target.value)}/><br/>
      Dpartment:<br/><input type="text" class="a" placeholder="" value={Dpartment} onChange={(e)=>setDpartment(e.target.value)}/><br/>
       <Link to="/showuser"> <input type="button" onClick={Update}  id="btn1" value="Update"/><br/></Link>
        
      </form>
      </div></div>
       </React.Fragment>
    )
}