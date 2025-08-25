const ImputFormulario = () => {
  return (
    <section className="container mt-3 w-auto">
      <div className="row">
        <div className="col-12 col-lg-6 mb-3">
          <div className="card shadow responcive">
            <div className="">
              <div className="card-header mb-4">
                <h1 className="fs-4 text-center mb-3">
                  Administrador pacientes de veterinaria
                </h1>
                <h2 className="fs-6 mb-4 text-center text-muted">
                  Llenar el formulario para crear una cita
                </h2>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Nombre del dueño:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="nombre de dueño"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Nombre de la mascota:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="nombre de mascota"
                    />
                  </div>

                  <div className="row mb-3">
                    <div className="col-6">
                      <label className="form-label">Fecha:</label>
                      <input type="date" className="form-control" />
                    </div>
                    <div className="col-6">
                      <label className="form-label">Hora:</label>
                      <input type="time" className="form-control" />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Síntomas:</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="describir los síntomas de la mascota."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Agregar nueva cita
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6 mb-3">
          <div className="shadow p-3">
            <h4 className="fs-4 text-center mb-3">Administrador de citas </h4>
            <div>
              <p className="text-center mt-3 text-muted">
                No hay citas, comienza creando una
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImputFormulario;
