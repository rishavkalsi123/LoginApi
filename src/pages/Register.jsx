import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../components/Header";
import { RegisterApi } from "../services/Auth";
import { Toast, ToastContainer } from "react-bootstrap";

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const Register = () => {
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  const handleFormSubmit = async (values) => {
    try {
      await RegisterApi(values.email, values.password);
      setShowA(false);
    } catch (err) {
      setShowA(true);
      setTimeout(() => {
        setShowA(false);
      }, 5000);
      // }
    }
  };
  return (
    <>
      <Header />
      <div className="loginPage">
        <div className="login_inner">
          <h1>Register user</h1>
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
                <Row className="mb-3">
                  {/* <Form.Group className="mb-3" controlId="validationFormik01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      isInvalid={!!errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                      Enter first name
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="validationFormik02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      isInvalid={!!errors.lastName}
                    />

                    <Form.Control.Feedback type="invalid">
                      Enter last name
                    </Form.Control.Feedback>
                  </Form.Group> */}
                  <Form.Group
                    className="mb-3"
                    controlId="validationFormikUsername"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={props.values.email}
                      onChange={props.handleChange}
                      isInvalid={!!props.errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {props.errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="validationFormik03">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="password"
                      name="password"
                      value={props.values.password}
                      onChange={props.handleChange}
                      isInvalid={!!props.errors.password}
                    />

                    <Form.Control.Feedback type="invalid">
                      {props.errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                  {/*  <Form.Group className="mb-3" controlId="validationFormik04">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="State"
                      name="state"
                      value={values.state}
                      onChange={handleChange}
                      isInvalid={!!errors.state}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.state}
                    </Form.Control.Feedback>
                  </Form.Group> 
                  <Form.Group className="mb-3" controlId="validationFormik05">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Zip"
                      name="zip"
                      value={values.zip}
                      onChange={handleChange}
                      isInvalid={!!errors.zip}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.zip}
                    </Form.Control.Feedback>
                  </Form.Group> */}
                </Row>
                <Button type="submit">Submit form</Button>
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

export default Register;
