import axios from 'axios'
import React, { useState } from 'react'
import style from"./homeCrud.module.css"
import { useNavigate } from 'react-router-dom'

const CreateUsers=()=>{
  let [name,setName]= useState("")
  let [salary,setSalary]=useState("")
  let [company,setCompany]=useState("")
  let Navigate = useNavigate()//it is used to go one page to another 

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
    axios.post("http://localhost:3000/users",payload)
    .then(()=>{
      console.log("DATA HAS BEEN ADDED");
    })
    Navigate("/xyz")
  }
  return (
    <div id={style.MainForm}>
    <form>
      <h2>User Details </h2><br />
      <label>Emp-Name :</label>
      <input type="text" value={name} onChange={nameData}/><br />
      <label>Emp-Salary :</label>
      <input type="number" value={salary} onChange={salaryData}/><br />
      <label>Emp-Company :</label>
      <input type="text" value={company} onChange={companyData}/><br/>
      <button onClick={formHandle}>Submit</button>
    </form>
    </div>
  )
}

export default CreateUsers
