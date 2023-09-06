import { useFormik } from "formik";
import Button from "../../components/Button";
import { User } from "../../features/slices/authSlice";
import styles from "./register.module.css";
import * as yup from "yup";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

interface RegisterForm extends User {
  password: string;
  confirmPassword: string;
}
export default function Register() {
  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      name: yup.string().required("Enter a name"),
      username: yup.string().required("Enter a username"),
      email: yup
        .string()
        .email("Enter a valid email")
        .required("Enter an email"),
      password: yup.string().required("Enter a password"),
      confirmPassword: yup
        .string()
        .required("Enter a password")
        .oneOf([yup.ref("password")], "Passwords must match"),
    }),
  });
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <h1>Register Your Account</h1>

        <div className={styles.formContainer}>
          <Input
            type="text"
            label="Name"
            {...formik.getFieldProps("name")}
            error={!!(formik.touched.name && formik.errors.name)}
            errorMessage={formik.errors.name}
          />

          <Input
            type="text"
            label="Username"
            {...formik.getFieldProps("username")}
            error={!!(formik.touched.username && formik.errors.username)}
            errorMessage={formik.errors.username}
          />

          <Input
            type="email"
            label="Email"
            {...formik.getFieldProps("email")}
            error={!!(formik.touched.email && formik.errors.email)}
            errorMessage={formik.errors.email}
          />

          <Input
            label="Password"
            type="password"
            {...formik.getFieldProps("password")}
            error={!!(formik.touched.password && formik.errors.password)}
            errorMessage={formik.errors.password}
          />

          <Input
            label="Confirm Password"
            type="password"
            {...formik.getFieldProps("confirmPassword")}
            error={
              !!(
                formik.touched.confirmPassword && formik.errors.confirmPassword
              )
            }
            errorMessage={formik.errors.confirmPassword}
          />
        </div>

        <Button type="submit">Register</Button>

        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
}
