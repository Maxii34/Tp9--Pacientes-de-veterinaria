import { useForm } from "react-hook-form";

const ImputFormulario = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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
                      {...register("nombreDueño", {
                        required: "El nombre es obligatorio",
                        minLength: {
                          value: 3,
                          message: "El mínimo de caracteres es de 3",
                        },
                        maxLength: {
                          value: 20,
                          message: "El máximo de caracteres es de 20",
                        },
                      })}
                    />
                    <Form.Text className="text-danger">
                      {errors.nombreDueño?.message}
                    </Form.Text>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Nombre de la mascota:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="nombre de mascota"
                      {...register("nombreMascota", {
                        required: "El nombre es obligatorio",
                        minLength: {
                          value: 3,
                          message: "El mínimo de caracteres es de 3",
                        },
                        maxLength: {
                          value: 20,
                          message: "El máximo de caracteres es de 20",
                        },
                      })}
                    />
                    <Form.Text className="text-danger">
                      {errors.nombreMascota?.message}
                    </Form.Text>
                  </div>

                  <div className="row mb-3">
                    <div className="col-6">
                      <label className="form-label">Fecha:</label>
                      <input
                        type="date"
                        className="form-control"
                        {...register("fecha", {
                          required: "El campo es obligatorio",
                        })}
                      />
                      <Form.Text className="text-danger">
                        {errors.fecha?.message}
                      </Form.Text>
                    </div>
                    <div className="col-6">
                      <label className="form-label">Hora:</label>
                      <input
                        type="time"
                        className="form-control"
                        {...register("hora", {
                          required: "El campo es obligatorio",
                        })}
                      />
                      <Form.Text className="text-danger">
                        {errors.hora?.message}
                      </Form.Text>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Síntomas:</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="describir los síntomas de la mascota."
                      {...register("sintomas", {
                        required: "El campo es obligatorio",
                        minLength: {
                          value: 10,
                          message: "El mínimo de caracteres es de 10",
                        },
                        maxLength: {
                          value: 200,
                          message: "El máximo de caracteres es de 200",
                        },
                      })}
                    ></textarea>
                    <Form.Text className="text-danger">
                      {errors.sintomas?.message}
                    </Form.Text>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Agregar
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
