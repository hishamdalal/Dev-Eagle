import Options from '../../../Options.json';

export function Toast_run() {
  const notifications = document.querySelector(".notifications");
  const buttons = document.querySelectorAll("[data-toast]");


  // const icons = {
  //   timer: 5000,
  //   success:"fa-circle-check",
  //   error: "fa-circle-xmark",
  //   warning: "fa-triangle-exclamation",
  //   info: "fa-circle-info",
  //   random: "fa-solid fa-star",
  // }

  const icons = Options.vendors.Toast.icons;

  const removeToast = (toast) => {
    toast.classList.add("hide")
    if (toast.timeoutId) clearTimeout(toast.timeoutId)
    setTimeout(() => toast.remove(), 500)
  }

  const createToast = (type, msg) => {
    const icon = icons[type];
    
    const toast = document.createElement("li")
    toast.className = `toast ${type}`
    toast.innerHTML = `<div class="column">
                          <i class="fa-solid ${icon}"></i>
                          <span>${msg}</span>
                        </div>
                        <i class="fa-solid fa-xmark" ></i>`
    
                        notifications.appendChild(toast) 
    toast.timeoutId = setTimeout(() => removeToast(toast), icons.timer);
    toast.lastChild.addEventListener('click', (e) => {
      //console.log(e.target.parentNode, e.target.parentElement)
      removeToast(e.target.parentElement)
    });
    
  }

  buttons.forEach((btn) => {
    const type = btn.getAttribute('data-type');
    const msg =  btn.getAttribute('data-msg');
    btn.addEventListener("click", () => createToast(type, msg))
  });


}
