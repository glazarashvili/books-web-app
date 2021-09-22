import React from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useLocation } from 'react-router-dom'

import classes from './BookDetails.module.css'
import PurchaseBooks from './PurchaseBooks'
import Loading from '../../UI/Loading/Loading'
import BookDescription from './BookDescription'
import Template from '../../UI/Template/Template'
import Backdrop from '../../UI/Backdrop/Backdrop'
import LoginModal from '../../components/Header/HeaderLogin/LoginModal'

const key = 'ti9WowZzdtbgGUQ2pFo6Nd0r0Cj4i9P2'

export const BookDetails = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const location = useLocation().pathname
  const [isLoading, setIsLoading] = React.useState('')
  const [modalIsShown, setModalIsShown] = React.useState(true)
  const [bookDetail, setBookDetail] = React.useState([])
  const isUserLoggedIn = useSelector(store => store.user.isUserLoggedIn)

  const bookId = params.bookId
  const adrress = location.slice(7, location.length - 2)

  React.useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      axios
        .get(
          `https://api.nytimes.com/svc/books/v3/lists/current/${adrress}.json?api-key=${key}`
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

  return (
    <React.Fragment>
      {isUserLoggedIn && (
        <div className={classes['details-page']}>
          {isLoading && <Loading />}
          {!isLoading && (
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
          )}
        </div>
      )}
      {!isUserLoggedIn && (
        <div className={classes['details-page']}>
          {modalIsShown && (
            <React.Fragment>
              {ReactDOM.createPortal(
                <LoginModal
                  onClose={hideModal}
                  onLoginSubmit={LoginSubmitHandler}
                />,
                document.getElementById('modal')
              )}
              {ReactDOM.createPortal(
                <Backdrop backdropClick={hideModal} />,
                document.getElementById('backdrop')
              )}
            </React.Fragment>
          )}
        </div>
      )}
    </React.Fragment>
  )
}
