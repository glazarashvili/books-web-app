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
    path: 'new',
    component: 'NewBooks',
    exact: false,
  },
  {
    path: 'culture',
    component: 'CultureBooks',
    exact: false,
  },
  // {
  //   path: 'movies/:movieId',
  //   component: 'MovieDetail',
  //   exact: false,
  // },
]
