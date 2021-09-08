import React from 'react'

import './Filtered.css'

import { useDispatch, useSelector } from 'react-redux'

export const BestSellers = () => {
  const dispatch = useDispatch()
  const toggle = useSelector(state => state.toggle)

  console.log(toggle)

  const onClick = () => {
    dispatch({ type: 'toggle' })
  }

  return (
    <div className='filtered-container'>
      {toggle && <p>BestSellers</p>}
      <button
        style={{ width: '200px', height: '30px' }}
        onClick={onClick}></button>
    </div>
  )
}
