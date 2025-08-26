const CardCitas = ({
  nombreMascota,
  nombreDueño,
  fecha,
  hora,
  sintomas,
  borrarCita,
}) => {
  return (
    <div className="card shadow mb-3">
      <div className="card-header bg-white">
        <h5 className="card-title text-primary">
          {" "}
          <b className="text-dark">Mascota:</b> {nombreMascota}
        </h5>
      </div>
      <div className="card-body">
        <p className=" m-0">
          <strong>Dueño:</strong> {nombreDueño}
        </p>

        <p className=" m-0">
          <strong>Fecha:</strong> {fecha} <br />
          <strong>Hora:</strong> {hora}
        </p>

        <p className="m-0">
          <strong>Síntomas:</strong> {sintomas}
        </p>
      </div>
      <div className="card-footer d-flex justify-content-end gap-2">
        <button
          className="btn btn-danger btn-sm shadow"
          onClick={() => borrarCita(nombreMascota)} 
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CardCitas;
