import React from 'react'

const Book = ({img, title, author}:any) =>{
  
  const clickHandler = (e:any) =>{
    console.log(e)
    alert('hello')
  }
  const complexExample = (author:any)=>{
    console.log(author)
  }
  return (
  <article className="book" onMouseOver={()=>{
    console.log(title)
  }}>
    <img src={img} alt=""/>
    <h1 onClick={()=> console.log(title)}>{title}</h1>
    <h4>{author}</h4>
    <button type='button' onClick={clickHandler}>reference</button>
    <button type='button' onClick={()=>complexExample(author)}>complex</button>
  </article>
  )
}

export default Book
