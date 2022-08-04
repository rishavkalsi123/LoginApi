import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Form, Toast, ToastContainer } from "react-bootstrap";
import { LoginApi } from "../services/Auth";
import Header from "../components/Header";
const Login = () => {
  const [showA, setShowA] = useState(false);
  // const [validation, setValidation] = useState({
  //   emailValidation: false,
  //   passwordValidation: false,
  // });
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });
  const toggleShowA = () => setShowA(!showA);
  const handleOnchange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = async (values) => {
    try {
      await LoginApi(values.email, values.password);
      setShowA(false);
    } catch (err) {
      setShowA(true);
      setTimeout(() => {
        setShowA(false);
      }, 5000);
      // }
    }
  };
  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });
  return (
    <>
      <Header />
      <div className="loginPage">
        <div className="login_inner">
          <h1>Login</h1>
          <Formik
            validationSchema={schema}
            onSubmit={handleFormSubmit}
            initialValues={{
              email: "",
              password: "",
            }}
          >
            {(props) => (
              <Form noValidate onSubmit={props.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={props.values.email}
                    name="email"
                    // onChange={handleOnchange}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    isInvalid={props.errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    Enter valid email
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={props.values.password}
                    // onChange={handleOnchange}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    isInvalid={props.errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    Enter password
                  </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
          <ToastContainer className="p-3" position="top-end">
            <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Error</strong>
              </Toast.Header>
              <Toast.Body>Please enter validate Username</Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      </div>
    </>
  );
};
export default Login;
