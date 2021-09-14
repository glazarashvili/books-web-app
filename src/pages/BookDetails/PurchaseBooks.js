import React from 'react'

import classes from './PurchaseBooks.module.css'

const PurchaseBooks = ({ shops }) => {
  return (
    <div className={classes['purchase-books']}>
      <ul>
        {shops &&
          shops.map((elem, index) => {
            return (
              <li key={index}>
                <a rel='noreferrer' href={elem.url} target='_blank'>
                  {elem.name}
                </a>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default PurchaseBooks
