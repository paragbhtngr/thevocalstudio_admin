const api = {
  backend_url: "localhost:3003",
  // User API
  login: "/user/login",
  logout: "/user/logout",
  createUser: "/user/createnewuser",
  deleteUser: "/user/deleteuser",
  isAuthenticated: "/user/authrequired",
  resetPw: "/user/resetpw",
  changePw: "/user/changepw",
  // Audio API
}

export default api