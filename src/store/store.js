import initForm from "../../form.js";
export const store = {
  user:null,
  isLoged:false,

  onLogin(email, password, dataUsers) {
    if (email === dataUsers.email && password === dataUsers.password) {
      ((this.user = dataUsers), (this.isLoged = true));
      this.saveData(this.user);
    }
  },

  saveData(data) {
    const { password, ...restData } = data;
    localStorage.setItem("user", JSON.stringify(restData));
  },

  loadData() {
    const data = JSON.parse(localStorage.getItem("user"));
    console.log(data);
    
    if (data === null) {
      this.isLoged = false;
      this.user = null;
    }else{
      this.user = data;
      this.isLoged = true; 
    }
  },

  onLogout(dataUsers){
    const app = document.getElementById("app")
    localStorage.removeItem("user")
    initForm(app,this,dataUsers)
  }
};
