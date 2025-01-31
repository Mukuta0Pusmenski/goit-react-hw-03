import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  number: Yup.string().required('Number is required'),
});

const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addContact(values.name, values.number);
        resetForm();
      }}
    >
      {() => (
        <Form className="ContactForm">
          <div>
            <Field name="name" type="text" placeholder="Name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <Field name="number" type="tel" placeholder="Number" />
            <ErrorMessage name="number" component="div" className="error" />
          </div>
          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
