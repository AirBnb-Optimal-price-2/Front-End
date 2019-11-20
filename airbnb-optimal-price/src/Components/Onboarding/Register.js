import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'




const validate = Yup.object().shape({
    username: Yup.string()
        .min(5, 'Must be between 5 and 15')
        .max(15, 'Must be between 5 and 15')
        .required('This is a required field'),
    
    password: Yup.string()
        .min(5, 'Must be between 5 and 15')
        .max(15, 'Must be between 5 and 15')
        .required('This is a required field')
})

export default function MyForm(props) {
    console.log(props)
    return <Formik

        onSubmit={(values, tools) => {
            tools.resetForm()
            axios.post('https://reqres.in/api/users', values)
                .then(res => {
                    
                    props.addUser([...props.users, res.data])
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }

        }
        validationSchema={validate}

        initialValues={{
            username: '',
            password: ''
        }}
        render={props => {
            return (
                <div>
                    <Form>
                        <br />
                        <Field name='username' type='text' placeholder='Username: ' />
                        <ErrorMessage name='username' component='div' /><br />
                        
                        <Field name='password' type='password' placeholder='Password: ' />
                        <ErrorMessage name='password' component='div' /><br />
                        <input type='submit' />
                    </Form>

                </div>
            )
        }}

    />
}