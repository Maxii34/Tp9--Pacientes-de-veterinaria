import CardCitas from "./CardCitas";

const CardContenedor = ({ citas }) => {
  return (
    <section className="mt-3">
      <div className="card-scroll">
        <h4 className="fs-4 text-center mb-3">Administrador de citas</h4>

        {citas.length === 0 ? (
          <p className="text-center text-muted">
            No hay <b>citas</b> pendientes, <b>comienza creando una.</b>
          </p>
        ) : (
          citas.map((cita, index) => (
            <CardCitas
              key={index}
              nombreDueño={cita.nombreDueño}
              nombreMascota={cita.nombreMascota}
              fecha={cita.fecha}
              hora={cita.hora}
              sintomas={cita.sintomas}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default CardContenedor;
