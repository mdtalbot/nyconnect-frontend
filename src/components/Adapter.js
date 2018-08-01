class Adapter {
  static isLoggedIn() {
    return !!localStorage.getItem('token')
  }

  static logout() {
    localStorage.removeItem('token');
  }

  static getJWT() {
    return localStorage.getItem('token');
  }

  static login(username, password) {
    return fetch(`http://localhost:4000/sessions/`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
  }
}

export default Adapter;
