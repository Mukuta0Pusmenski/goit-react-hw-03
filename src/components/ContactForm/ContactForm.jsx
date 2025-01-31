import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters'),
  number: Yup.string()
    .required('Number is required')
    .min(3, 'Minimum 3 characters')
    .max(50, 'Maximum 50 characters'),
});

const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const id = nanoid();
        addContact({ ...values, id });
        resetForm();
      }}
    >
      {() => (
        <Form className="ContactForm">
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" placeholder="Name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="number">Number</label>
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
