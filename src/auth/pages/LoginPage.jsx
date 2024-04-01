import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import {
  startGoogleSingIn,
  startLoginWithEmailAndPassword,
} from "../../store/auth/thunks";
import { Formik } from "formik";

export const LoginPage = () => {
  const dispatch = useDispatch();

  const onGoogleSingIn = () => {
    dispatch(startGoogleSingIn());
  };

  return (
    <AuthLayout title="Login">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          dispatch(startLoginWithEmailAndPassword(values));
          resetForm();
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Correo"
                  type="email"
                  placeholder="correo@google.com"
                  fullWidth
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <TextField
                    label="Contraseña"
                    type="password"
                    placeholder="contraseña"
                    fullWidth
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                <Grid item xs={12} sm={6}>
                  <Button type="submit" variant="contained" fullWidth>
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={onGoogleSingIn}
                  >
                    <Google />
                    <Typography sx={{ ml: 1 }}>Google</Typography>
                  </Button>
                </Grid>
              </Grid>
              <Grid container direction="row" justifyContent="end">
                <Link color="inherit" to="/auth/register">
                  Crear una cuenta
                </Link>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </AuthLayout>
  );
};
