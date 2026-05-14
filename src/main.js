import { store } from "./store/store.js";
import "./style.css";
import { getElementById } from "./utils/getElementById"
import getLoginForm from "../form.js";

const app = getElementById("app");

store.loadData();

function renderApp() {
  if (store.isLoged) {
    renderWelcome();
  } else {
    renderLogin();
  }
}

renderApp();

function renderWelcome() {
  app.innerHTML = `
    <h1>Bienvenido ${store.user.firstName}</h1>
    <button id="btn_logout">LogOut</button>
  `;

  const button = getElementById("btn_logout");

  button.addEventListener("click", () => {
    store.onLogout();
    renderApp();
  });
}

function renderLogin() {
  app.innerHTML = getLoginForm();

  const form = getElementById("form_login");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const { email, password } = Object.fromEntries(new FormData(form));

    store.onLogin(email, password);
    renderApp();
  });
}

