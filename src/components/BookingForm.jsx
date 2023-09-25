import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Box,
    Button,
    Input,
    FormControl,
    FormLabel,
    Heading,
    Stack,
} from '@chakra-ui/react';

const BookingForm = () => {
    const [step, setStep] = useState(1);

    const validationSchemaStep1 = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
    });

    const validationSchemaStep2 = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.string().required('Phone number is required'),
    });

    const validationSchemaStep3 = Yup.object().shape({
        address: Yup.string().required('Address is required'),
        city: Yup.string().required('City is required'),
        zipCode: Yup.string().required('Zip Code is required'),
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            zipCode: '',
        },
        validationSchema:
            step === 1
                ? validationSchemaStep1
                : step === 2
                    ? validationSchemaStep2
                    : validationSchemaStep3,
        onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        },
    });

    const nextStep = () => {
        formik.resetForm({ values: { ...formik.values } }); // Reset validation state only
        setStep(step + 1)
    };
    const prevStep = () => setStep(step - 1);

    return (
        <Box p={4}>
            <form onSubmit={formik.handleSubmit}>
                <Stack spacing={4}>
                    <Heading size="lg">Multi-Step Form</Heading>
                    {step === 1 && (
                        <>
                            <FormControl>
                                <FormLabel>First Name</FormLabel>
                                <Input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.firstName}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Last Name</FormLabel>
                                <Input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.lastName}
                                />
                            </FormControl>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Phone</FormLabel>
                                <Input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                />
                            </FormControl>
                        </>
                    )}
                    {step === 3 && (
                        <>
                            <FormControl>
                                <FormLabel>Address</FormLabel>
                                <Input
                                    type="text"
                                    name="address"
                                    placeholder="Address"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.address}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>City</FormLabel>
                                <Input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.city}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Zip Code</FormLabel>
                                <Input
                                    type="text"
                                    name="zipCode"
                                    placeholder="Zip Code"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.zipCode}
                                />
                            </FormControl>
                        </>
                    )}
                    <Stack direction="row" spacing={4}>
                        {step > 1 && (
                            <button onClick={prevStep}>Previous</button>
                        )}
                        {step < 3 && (
                            <button
                                type="button"
                                onClick={nextStep}
                                disabled={!formik.isValid || !formik.dirty}
                            >
                                Next
                            </button>
                        )}
                        {step === 3 && (
                            <button
                                type="submit"
                                disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}
                            >
                                Submit
                            </button>
                        )}
                    </Stack>
                </Stack>
            </form>
        </Box>
    );
};

export default BookingForm;