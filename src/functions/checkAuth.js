const checkAuth = () => localStorage.getItem('isAuth') === 'true'

export default checkAuth;