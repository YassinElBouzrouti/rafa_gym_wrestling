import './Header.css'
const Header = () => `
 <header>
  <img src="/rafagym_logo.svg" alt="logo del gimnasio">
  <nav>
   <ul id="sidebar">
      <li><a href="#"><img src="/close.svg" alt="cerrar menu"></a></li>
      <li><a href="#hero">CLUB</a></li>
      <li><a href="#instalaciones">INSTALACIONES</a></li>
      <li><a href="#horarios">HORARIOS</a></li>  
      <li><a href="#contacto">CONTACTO</a></li>      
   </ul>
   <ul>
      <li class="hideOnMobile"><a href="#hero">CLUB</a></li>
      <li class="hideOnMobile"><a href="#instalaciones">INSTALACIONES</a></li>
      <li class="hideOnMobile"><a href="#horarios">HORARIOS</a></li>  
      <li class="hideOnMobile"><a href="#contacto">CONTACTO</a></li>  
      <li class="menu_button"><a href="#"><img src="/menu.svg" alt="menu"></a></li>    
   </ul>
  </nav>
 </header>
`

document.querySelector('.menu_button').addEventListener('click', showSidebar);
document.querySelector('#sidebar .close_btn').addEventListener('click', hideSidebar);
function showSidebar() {
   const sidebar = document.querySelector("#sidebar")
   sidebar.style.display = "flex"
}
function hideSidebar() {
   const sidebar = document.querySelector("#sidebar")
   sidebar.style.display = "none"
}


export default Header;