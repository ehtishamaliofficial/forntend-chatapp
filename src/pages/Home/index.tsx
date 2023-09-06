import { useFormik } from "formik";
import Button from "../../components/Button";
import styles from "./home.module.css";
import { Credentials } from "../../interface/Credentials";
import * as yup from "yup";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
export default function Home() {
  const formik = useFormik<Credentials>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },

    validationSchema: yup.object({
      email: yup
        .string()
        .email("Enter a valid email")
        .required("Enter an email"),
      password: yup.string().required("Enter a password"),
    }),
  });

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Login to Chat Room</h1>
        <div className={styles.formContainer}>
          <Input
            label="Email"
            type="email"
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
        </div>
        <Button type="submit">Login</Button>
        <p>
          Don't have an account?<Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}
