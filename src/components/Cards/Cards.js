import React from 'react'
import Template from '../../UI/Template/Template'

import CardItem from './CardItem'

import classes from './Cards.module.css'

const books = [
  {
    title: '1984',
    author: 'Leo Tolstoy',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB8Tq-_rEZrRX0JPqc4V4haxcGFiNo_fXt-w&usqp=CAU',
    price: '9.99GEL',
  },
  {
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPpletuK4COjTj93pq9XyJLsloD1dQtYfbqQ&usqp=CAU',
    price: '9.99GEL',
  },
  {
    title: 'Madame Bovary',
    author: 'George Orweell',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbuVghZhAraKxE123BJqxscxPLNW2mUC64vQ&usqp=CAU',
    price: '9.99GEL',
  },
  {
    title: 'War and Peace',
    author: 'Vladimir Nabokov',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPDH6qP1vkKXBRa0kYA5esSkmVWtcZHCkFRg&usqp=CAU',
    price: '9.99GEL',
  },
  {
    title: 'BoThe Great Gatsby',
    author: 'George Eliot',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTff-VFyyXEDN7_TyMhziFuFfz_o6mHG2GtQA&usqp=CAU',
    price: '9.99GEL',
  },
]

const Cards = () => {
  return (
    <div className={classes['card-container']}>
      <Template>
        {books.map(book => {
          return (
            <CardItem
              image={book.img}
              title={book.title}
              price={book.price}
              author={book.author}
            />
          )
        })}
      </Template>
    </div>
  )
}

export default Cards
