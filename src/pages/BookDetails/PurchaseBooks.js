import React from 'react'

const PurchaseBooks = ({ shops }) => {
  return (
    <div>
      <ul>
        {shops.map(elem => {
          return (
            <li>
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
