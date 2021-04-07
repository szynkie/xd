import React from 'react'
import ReactDom from 'react-dom'

import './index.css'

const books = [
{
  id:1,
  img: 'https://ecsmedia.pl/c/rydzyk-i-przyjaciele-krete-sciezki-p-iext69596477.jpg',
  title: 'ksionszka',
  author: 'Krzychu'
},

{
  id:2,
  img: 'https://ecsmedia.pl/c/afekt-joanna-chylka-tom-13-p-iext69458757.jpg',
  title: 'ksienga',
  author: 'Zbychu'
},
{
  id:3,
  img: 'https://ecsmedia.pl/c/terapeutka-p-iext69597247.jpg',
  title: 'ksiunszka',
  author: 'Maciek'
}
]

function BookList(){
  return (
  <section className="booklist">
   {books.map((book)=>{
     return <Book key={book.id} {...book}></Book> 
   })}
  </section>
  )
}

const Book = ({img, title, author}:any) =>{
  
  return (
  <article className="book">
    <img src={img} alt=""/>
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
  )
}

ReactDom.render(<BookList/>,document.getElementById('root'))