import "../estilos/contacta.css";

const Contacta = () => {
  return (
    <div className="contenido">
      <h1 className="contacta">Contáctanos</h1>

      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1497.0065031104161!2d2.0941057764042452!3d41.37380214341304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4991b037b80b5%3A0x4ba77956383c4631!2sCampo%20de%20F%C3%BAtbol%20Municipal%20El%20Molino!5e0!3m2!1ses!2ses!4v1619382944961!5m2!1ses!2ses" className="mapa" loading="lazy"></iframe>
        <span className="datos">
          <div className="">Teléfono: 608998548</div>
          <div className="">Correo: digital_club@gmail.com</div>
          <div className="">Dirección: Av./ de la piruleta nº9</div>
          <div className="">Horario de oficina: De Lunes a Viernes de 16:00 a 20:00</div>
        </span>
      </section>
    </div>
  );

}
export default Contacta;
