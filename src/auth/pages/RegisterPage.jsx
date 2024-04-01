import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Link } from "react-router-dom";
import { startCreatingUserWithEmailAndPassword } from "../../store/auth/thunks";
import { Formik } from "formik";
import { useDispatch } from "react-redux";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  return (
    <AuthLayout title="Register">
      <Formik
        initialValues={{
          displayName: "",
          email: "",
          password: "",
        }}
        validate={(values) => {
          let errors = {};
          if (!values.displayName) {
            errors.displayName = "Por favor ingrese un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.displayName)) {
            errors.displayName =
              "El nombre solo puede  contener letras y espacios";
          }

          if (!values.email) {
            errors.email = "Por favor ingrese un correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.email
            )
          ) {
            errors.email =
              "El correo solo puede contener letras, numeros, puntos y guiones";
          }

          if (!values.password) {
            errors.password = "Por favor ingrese una contraseña";
          } else if (values.password.length <= 6) {
            errors.password = "El password debe tener más de 6 letras";
          }

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(startCreatingUserWithEmailAndPassword(values));
          resetForm();
        }}
      >
        {({
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Nombre completo"
                  type="text"
                  name="displayName"
                  placeholder="Tu Nombre"
                  value={values.displayName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                />
                {touched.displayName && errors.displayName && (
                  <Alert severity="error">{errors.displayName}</Alert>
                )}
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Correo"
                  type="email"
                  name="email"
                  placeholder="correo@google.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                />
                {touched.email && errors.email && (
                  <Alert severity="error">{errors.email}</Alert>
                )}
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Contraseña"
                  type="password"
                  placeholder="contraseña"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                />
                {touched.password && errors.password && (
                  <Alert severity="error">{errors.password}</Alert>
                )}
              </Grid>
              <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" fullWidth>
                    Crear Cuenta
                  </Button>
                </Grid>
              </Grid>
              <Grid container direction="row" justifyContent="end">
                <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
                <Link color="inherit" to="/auth/login">
                  Ingresar
                </Link>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </AuthLayout>
  );
};
