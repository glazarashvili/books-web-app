export const appRoutes = [
  {
    path: 'landing',
    component: 'Landing',
    exact: true,
  },
  {
    path: 'login',
    component: 'Login',
    exact: false,
  },
  {
    path: 'register',
    component: 'Register',
    exact: false,
  },
  {
    path: 'books/hardcover-fiction',
    component: 'FictionBooks',
    exact: true,
  },
  {
    path: 'books/animals',
    component: 'AnimalsBooks',
    exact: true,
  },
  {
    path: 'books/culture',
    component: 'CultureBooks',
    exact: true,
  },
  {
    path: 'books/religion-spirituality-and-faith',
    component: 'ReligionBooks',
    exact: true,
  },
  {
    path: 'books/education',
    component: 'EducationBooks',
    exact: true,
  },
  {
    path: 'books/business-books',
    component: 'BusinessBooks',
    exact: true,
  },
  {
    path: `books/culture/:bookId`,
    component: 'BookDetails',
    exact: false,
  },
  {
    path: `books/animals/:bookId`,
    component: 'BookDetails',
    exact: false,
  },
  {
    path: `books/hardcover-fiction/:bookId`,
    component: 'BookDetails',
    exact: false,
  },
  {
    path: `books/business-books/:bookId`,
    component: 'BookDetails',
    exact: false,
  },
  {
    path: `books/education/:bookId`,
    component: 'BookDetails',
    exact: false,
  },
  {
    path: `books/religion-spirituality-and-faith/:bookId`,
    component: 'BookDetails',
    exact: false,
  },
]
