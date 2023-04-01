import React, { useEffect } from 'react'
import style from './homeCrud.module.css'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const Editusers=()=>{
    let [name,setName]= useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")
    let {nath}=useParams()
    //nath is one variable where we store the all the id and target it as per our requiredment
    //by using useprams
    let Navigate=useNavigate()

    console.log(nath);

    let nameData=(e)=>{
        setName(e.target.value)
      }
      let salaryData=(e)=>{
        setSalary(e.target.value)
      }
      let companyData=(e)=>{
        setCompany(e.target.value)
      }
      let formHandle=(e)=>{
        e.preventDefault()
        // console.log(name);
        // console.log(salary);
        // console.log(company);
        let payload={name,salary,company}
        //after server link we concatinate whit that variable to target the id
        axios.put(`http://localhost:3000/users/${nath}`,payload)
        // .then(()=>{
        //   console.log("DATA HAS BEEN ADDED");
        // })
        Navigate("/xyz")
      }
      //this is using to show the particular data consol to ui
      useEffect(()=>{
        axios.get(`http://localhost:3000/users/${nath}`)
        .then((x)=>{
          // console.log(x.data);
          setName(x.data.name)
          setSalary(x.data.salary)
          setCompany(x.data.company)
        })

      },[])

  return (
    
      <form action="" id={style.form}>
      <div id={style.box}>
      <label>EMP-Name :</label>
      <input type="text" value={name} onChange={nameData}/><br />
      <label>EMP-Salary :</label>
      <input type="number" value={salary} onChange={salaryData}/><br />
      <label>EMP-Company :</label>
      <input type="text" value={company} onChange={companyData}/><br/>
      </div><br />
      <button id={style.done} onClick={formHandle}>UPDATE</button>
      </form>
    
  )
}

export default Editusers