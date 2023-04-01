import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './homeCrud.module.css'
import { Link } from 'react-router-dom'


const Users = () => {
  let [content,setContent]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/users")
    .then((response)=>{
      // console.log(response.data);
      setContent(response.data)
    })
  },[])

  let deleteData=(a)=>{
    axios.delete(`http://localhost:3000/users/${a}`)
    window.location.assign("/xyz")
  } 
  console.log(content);
  return (
    <section id={style.profile}>
      {content.map((x)=>{
        return(
          <div id={style.cards} key={x.id}>
            <table>
            <tr>
              <td><h4>ID :</h4></td>
              <td><h4>{x.id}</h4></td>
            </tr>
            <tr>
              <td><h4>NAME :</h4></td>
              <td><h4>{x.name}</h4></td>
            </tr>
            <tr>
              <td><h4>SALARY :</h4></td>
              <td><h4>{x.salary}</h4></td>
            </tr>
            <tr>
              <td><h4>Company :</h4></td>
              <td><h4>{x.company}</h4></td>
            </tr>
            <tr>
              <td><button id={style.edit}><Link to={`/edit/${x.id}`}>EDIT</Link></button></td>
              <td><button  id={style.delete} onClick={()=>{deleteData(x.id)}}>Delete</button></td>
              </tr>
            </table>
          </div>
        )
      })}
    </section>
  )
}

export default Users
