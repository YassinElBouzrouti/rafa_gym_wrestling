import './style.css'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from './components/Footer/footer';

function init() {
  document.body.innerHTML += Header();
  document.body.innerHTML += Main();
  document.body.innerHTML += Footer();
}
document.addEventListener("DOMContentLoaded", () => {
  init();
});