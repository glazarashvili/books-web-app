import React from 'react'
import axios from 'axios'
import classes from './BookDetails.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useLocation } from 'react-router-dom'

import PurchaseBooks from './PurchaseBooks'
import { apiKey } from '../../const/api-key'
import Loading from '../../UI/Loading/Loading'
import BookDescription from './BookDescription'
import Template from '../../UI/Template/Template'
import LoginModal from '../../components/Header/HeaderLogin/LoginModal'

export const BookDetails = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const location = useLocation()

  const [isLoading, setIsLoading] = React.useState('')
  const [bookDetail, setBookDetail] = React.useState([])
  const [modalIsShown, setModalIsShown] = React.useState(true)

  const bookId = params.bookId
  const adrress = location.pathname.slice(7, location.pathname.length - 2)
  const isUserLoggedIn = useSelector(store => store.user.isUserLoggedIn)

  React.useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      axios
        .get(
          `https://api.nytimes.com/svc/books/v3/lists/current/${adrress}.json?api-key=${apiKey}`
        )
        .then(response => {
          setBookDetail(response.data.results.books[bookId])
          setIsLoading(false)
        })
    }, 1000)
  }, [bookId, adrress])

  const hideModal = () => {
    setModalIsShown(false)
  }

  const LoginSubmitHandler = (email, password) => {
    console.log(email, password)
    localStorage.setItem('isUserLoggedIn', true)
    dispatch({ type: 'SET_USER' })
  }

  const bookDetailContent = (
    <Template className={classes.template}>
      <div className={classes['left-menu']}>
        <img
          alt='book-detail'
          src={bookDetail.book_image}
          className={classes['left-menu_image']}
        />
      </div>
      <div className={classes['book-description']}>
        <BookDescription
          title={bookDetail.title}
          author={bookDetail.author}
          publisher={bookDetail.publisher}
          description={bookDetail.description}
        />
        <PurchaseBooks shops={bookDetail.buy_links} />
      </div>
    </Template>
  )

  return (
    <React.Fragment>
      {isUserLoggedIn && (
        <div className={classes['details-page']}>
          {isLoading && <Loading />}
          {!isLoading && bookDetailContent}
        </div>
      )}
      {!isUserLoggedIn && (
        <div className={classes['details-page']}>
          {modalIsShown && (
            <LoginModal
              onModalClose={hideModal}
              onLoginSubmit={LoginSubmitHandler}
            />
          )}
        </div>
      )}
    </React.Fragment>
  )
}
