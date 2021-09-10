import React from 'react'

import { useParams } from 'react-router-dom'

export const BookDetails = () => {
  const params = useParams()

  const bookId = params.bookId

  console.log(params.bookId)

  return <div>Book Number {bookId} </div>
}
