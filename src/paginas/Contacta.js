import "../estilos/contacta.css";

const Contacta = () => {
  return (
    <div className="contenido">
      <h1 className="contacta">Contáctanos</h1>

      <section>
        <iframe title="encuentranos" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2115.2947782571996!2d2.1919390050043446!3d41.42883655090552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x977df016436367c7!2sCamp%20Municipal%20Narc%C3%ADs%20Sala!5e0!3m2!1ses!2ses!4v1619419306264!5m2!1ses!2ses" className="mapa" loading="lazy"></iframe>
        <span className="datosContacto">
          <a href="+34933112954" className="dts telefono">Teléfono: +34933112954</a>
          <a href="secretaria@uesantandreu.cat" className="dts correo">Correo: secretaria@uesantandreu.cat</a>
          <div className="dts direccion">Dirección: C/ de Santa Coloma, 39, 08030 Barcelona</div>
          <div className="dts horario">Horario: lunes a viernes de 9:30 a 12:30 i 17 a 20 hores</div>
        </span>
      </section>
    </div>
  );

}
export default Contacta;
