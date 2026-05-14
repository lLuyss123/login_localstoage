const dataUser = {
  id: 1,
  firstName: "abrahan",
  lastName: "villa",
  role: "team leader",
  email: "abrahan.villa@riwi.io",
  password: "123456",
};

export const store = {
  user: null,
  isLoged: false,

  onLogin(email, password) {
    if (email === dataUser.email && password === dataUser.password) {
      this.user = dataUser;
      this.isLoged = true;
      this.saveData(this.user);
    }
  },

  saveData(data) {
    const { password, ...restData } = data;
    localStorage.setItem("user", JSON.stringify(restData));
  },

  loadData() {
    const data = JSON.parse(localStorage.getItem("user"));

    if (data === null) {
      this.isLoged = false;
      this.user = null;
    } else {
      this.user = data;
      this.isLoged = true;
    }
  },

    onLogout() {
    localStorage.removeItem("user");
    this.user = null;
    this.isLoged = false;
  },
};