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
    exact: false,
  },
  {
    path: 'books/animals',
    component: 'AnimalsBooks',
    exact: false,
  },
  {
    path: 'books/culture',
    component: 'CultureBooks',
    exact: false,
  },
  {
    path: 'books/religion',
    component: 'ReligionBooks',
    exact: false,
  },
  {
    path: 'books/education',
    component: 'EducationBooks',
    exact: false,
  },
  {
    path: 'books/business',
    component: 'BusinessBooks',
    exact: false,
  },
  // {
  //   path: 'books/:bookId',
  //   component: 'BookDetails',
  //   exact: true,
  // },
]
