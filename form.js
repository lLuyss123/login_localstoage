import { isLoged } from "./src/main.js";
export default function initForm(app,store,dataUsers){
    app.innerHTML = `
    <form id="form_login" class="w-full max-w-md border-2 border-slate-900 p-4 grid gap-4">
        <div class="flex flex-col">
          <label for="" class="capitalize font-medium">email</label>
          <input 
            type="email" 
            name="email" 
            placeholder="type your email" 
            class="bg-gray-100 h-10 pl-4 rounded-md"/>
        </div>
        <div class="flex flex-col">
          <label for="" class="capitalize font-medium">password</label>
          <input 
            type="password" 
            name="password" 
            placeholder="type your password" 
            class="bg-gray-100 h-10 pl-4 rounded-md"/>
        </div>
        <button class="bg-slate-900 h-10 text-white rounded-md w-full cursor-pointer">login</button>
      </form>
    `
    /** @type {HTMLElement} */
    const form= app.querySelector("#form_login")
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    
      const { email, password } = Object.fromEntries(new FormData(form));
    
      store.onLogin(email, password, dataUsers);
      isLoged()
      
    });
}