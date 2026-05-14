import { store } from "./store/store.js";
import "./style.css";
import { getElementById } from "./utils/getElementById";
import initForm from "../form.js";

const app = getElementById("app");
const form = getElementById("form_login");

const dataUser = {
  id: 1,
  firstName: "abrahan",
  lastName: "villa",
  role: "team leader",
  email: "abrahan.villa@riwi.io",
  password: "123456",
};


store.loadData()

isLoged();

export function isLoged() {
  if (store.isLoged) {
    app.innerHTML = `<h1>Bienvenido ${store.user.firstName}</h1>
  <button id="btn_logout"> LogOut </button>
  `;
    const button = getElementById("btn_logout");
    console.log(button);
    button.addEventListener("click", () => {
      store.onLogout(dataUser);
    });

  }else{
    initForm(app,store,dataUser)
  }
}

