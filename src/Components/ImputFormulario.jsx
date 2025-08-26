import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import { useState } from "react";
import CardContenedor from "./CardContenedor";
import { Button } from "react-bootstrap";

const ImputFormulario = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const citasLocalStorage = JSON.parse(localStorage.getItem("citas")) || [];
  const [citas, setCitas] = useState(citasLocalStorage);

  const guardarEnLocalStorage = (citasActualizadas) => {
    localStorage.setItem("citas", JSON.stringify(citasActualizadas));
  };

  const onSubValida = (data) => {
    const nuevaCita = {
      ...data,
      id: Date.now(), // ID único
    };

    const nuevasCitas = [...citas, nuevaCita];
    setCitas(nuevasCitas);
    guardarEnLocalStorage(nuevasCitas);

    Swal.fire(
      "Datos enviados",
      "Los datos fueron enviados correctamente.",
      "success"
    );
    console.log(data);
    reset();
  };

  const borrarCita = (id) => {
    const citasFiltradas = citas.filter((cita) => cita.id !== id);
    setCitas(citasFiltradas);
    guardarEnLocalStorage(citasFiltradas);
  };

  return (
    <section className="container mt-3 w-auto my-5">
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
                <form
                  onSubmit={handleSubmit(onSubValida, (errors) => {
                    Swal.fire("Error", "Completa todos los datos.", "error");
                  })}
                >
                  <div className="mb-3">
                    <label className="form-label">Nombre del dueño:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre completo"
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
                      placeholder="Nombre de la mascota"
                      {...register("nombreMascota", {
                        required: "El nombre de la mascota es obligatorio",
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
                          required: "La fecha es obligatorio",
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
                          required: "La hora es obligatorio",
                        })}
                      />
                      <Form.Text className="text-danger">
                        {errors.hora?.message}
                      </Form.Text>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Teléfono:</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="11-2345-6789"
                      {...register("telefono", {
                        required: "El teléfono es obligatorio",
                        pattern: {
                          value: /^[+]?[\d\s\-\(\)]{8,}$/,
                          message: "Formato: 11-2345-6789",
                        },
                      })}
                    />
                    <Form.Text className="text-danger">
                      {errors.telefono?.message}
                    </Form.Text>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Síntomas:</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Describir los síntomas de la mascota."
                      {...register("sintomas", {
                        required: "Los sintomas son obligatorio",
                        minLength: {
                          value: 5,
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
                    <Button
                      type="submit"
                      Varian="primary"
                      className="w-100 shadow "
                    >
                      Agregar
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6 mb-3">
          <div className="card shadow p-3 responcive">
            <CardContenedor citas={citas} borrarCita={borrarCita} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImputFormulario;
