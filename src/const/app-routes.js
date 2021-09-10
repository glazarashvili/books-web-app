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
    path: 'fiction',
    component: 'FictionBooks',
    exact: false,
  },
  {
    path: 'animals',
    component: 'AnimalsBooks',
    exact: false,
  },
  {
    path: 'culture',
    component: 'CultureBooks',
    exact: false,
  },
  {
    path: 'religion',
    component: 'ReligionBooks',
    exact: false,
  },
  {
    path: 'education',
    component: 'EducationBooks',
    exact: false,
  },
  {
    path: 'business',
    component: 'BusinessBooks',
    exact: false,
  },
  {
    path: 'books/:bookId',
    component: 'BookDetails',
    exact: false,
  },
]
