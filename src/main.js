import './style.css'
import Header, { showSidebar, hideSidebar } from './components/Header/Header';
import Main from "./components/Main/Main";
import Footer from './components/Footer/Footer';


function init() {
  document.body.innerHTML += Header();
  document.body.innerHTML += Main();
  document.body.innerHTML += Footer();

  const menuBtn = document.querySelector('.menu_button');
  const closeBtn = document.querySelector('#sidebar .close_btn');

  menuBtn.addEventListener('click', showSidebar);
  closeBtn.addEventListener('click', hideSidebar);
}

  
document.addEventListener("DOMContentLoaded", () => {
  init();
});