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
    path: 'books/fiction',
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
    path: 'books/religion',
    component: 'ReligionBooks',
    exact: true,
  },
  {
    path: 'books/education',
    component: 'EducationBooks',
    exact: true,
  },
  {
    path: 'books/business',
    component: 'BusinessBooks',
    exact: true,
  },
  {
    path: `books/animals/:bookId`,
    component: 'BookDetails',
    exact: false,
  },
]
