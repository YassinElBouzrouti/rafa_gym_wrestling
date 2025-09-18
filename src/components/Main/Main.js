import './Main.css'
const Main = () => `
<main>
  <section id="hero">
    <h1>Entrena <span>lucha olímpica</span>, <span>boxeo</span>, <span>acondicionamiento físico</span> y <span>recupérate</span> en nuestro centro</h1>
    <p>
      Centro de entrenamiento especializado en artes marciales, acondicionamiento físico y recuperación. Clases para todos los públicos, desde principiantes a competidores, desde niños a mayores, además te ayudamos con el acondicionamiento físico y la recuperación con nuestros masajes deportivos.
    </p>
    <button>¡¡PRUEBA GRATIS!!</button>
  </section>
  <section id="instalaciones">
    <h2>INSTALACIONES</h2>
    <div id="gallery">
      <img src="/gallery1.webp" alt="foto del gimnasio">
      <img src="/gallery2.webp" alt="foto del gimnasio">
      <img src="/gallery3.jpg" alt="foto del gimnasio">
      <img src="/gallery4.jpg" alt="foto del gimnasio">
      <img src="/gallery5.jpg" alt="foto de la zona de masaje deportivo">
      <img src="/gallery6.jpg" alt="foto de la zona de masaje deportivo">
    </div>
  </section>
  <section id="horarios">
    <h2>HORARIOS</h2>
    <table>
     <thead>
      <tr>
        <th></th>
        <th class="dias">LUNES</th>
        <th class="dias">MARTES</th>
        <th class="dias">MIÉRCOLES</th>
        <th class="dias">JUEVES</th>
        <th class="dias">VIERNES</th>
      </tr>
     </thead>
     <tbody>
      <tr>
        <td class="horas">9:30-10:30</td>
        <td class="adultos">ADULTOS</td>
        <td class="adultos">ADULTOS</td>
        <td class="adultos">ADULTOS</td>
        <td class="adultos">ADULTOS</td>
        <td class="adultos">ADULTOS</td>
      </tr>
      <tr>
        <td class="horas">10:30-12:00</td>
        <td class="adultos">ADULTOS</td>
        <td class="adultos">ADULTOS</td>
        <td class="adultos">ADULTOS</td>
        <td class="adultos">ADULTOS</td>
        <td class="adultos">ADULTOS</td>
      </tr>
      <tr>
        <td class="horas">12:00-13:30</td>
        <td class="adultos">ADULTOS</td>
        <td class="adultos">ADULTOS</td>
        <td class="adultos">ADULTOS</td>
        <td class="adultos">ADULTOS</td>
        <td class="adultos">ADULTOS</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="horas">17:00-18:00</td>
        <td class="infantil">INFANTIL</td>
        <td class="infantil">INFANTIL</td>
        <td class="infantil">INFANTIL</td>
        <td class="infantil">INFANTIL</td>
        <td class="infantil">INFANTIL</td>
      </tr>
      <tr>
        <td class="horas">18:00-19:30</td>
        <td class="juvenil">JUVENIL</td>
        <td class="juvenil">JUVENIL</td>
        <td class="juvenil">JUVENIL</td>
        <td class="juvenil">JUVENIL</td>
        <td class="juvenil">JUVENIL</td>
      </tr>
      <tr>
        <td class="horas">19:30-21:00</td>
        <td class="adultos">ADULTOS</td>
        <td class="adultos">ADULTOS</td>
        <td class="adultos">ADULTOS</td>
        <td class="adultos">ADULTOS</td>
        <td class="adultos">ADULTOS</td>
      </tr>
      <tr>
        <td class="horas">21:00-22:30</td>
        <td class="adultos">ADULTOS</td>
        <td class="adultos">ADULTOS</td>
        <td class="adultos">ADULTOS</td>
        <td class="adultos">ADULTOS</td>
        <td class="adultos">ADULTOS</td>
      </tr>
     </tbody>
     <tfoot>
      <tr>
        <td colspan="6">
          <ul>
             <li>Sábados de 10:00 a 12:00</li>
             <li>Cerrado Domingos y festivos</li>
          </ul
        </td>
      </tr>
     </tfoot>
    </table>
  </section>
  <section id="contacto">
    <h2>CONTACTO</h2>
    <h3>UBICACIÓN:</h3>
    <a href="https://www.google.es/maps/place/Rafa%E2%80%99s+Gym+Wrestling/@40.2392134,-3.759954,17z/" target="_blank" rel="noopener noreferrer">Calle Londres 7, 28983 PARLA, MADRID</a>
    <h3>TELÉFONO:</h3>
    <a href="">+34 722 40 29 95</a>
    <h3>WHATSAPP:</h3>
    <a href="https://wa.me/34722402995?text=Hola%20quiero%20más%20información" target="_blank" rel="noopener noreferrer">+34 722 40 29 95</a>
    <h3>INSTAGRAM:</h3>
    <a href="https://www.instagram.com/rafasgymwrestling/" target="_blank" rel="noopener noreferrer">@rafasgymwrestling</a>
  </section>
</main>

`

export default Main;