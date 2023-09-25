//import { useState } from 'react'
import {
    Heading,
    Box,
    Input,
    Button,
    FormControl,
    FormErrorMessage,
    Select,
    Textarea,
    Text,
    Stack,
    FormLabel
} from '@chakra-ui/react'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

import { useFormik } from 'formik'


export default function BookingForm({ step, setStep }) {
    //console.log(step, setStep)

    //    const [step, setStep] = useState(0)

    //Phone validation
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationStep1 = Yup.object().shape({
        date: Yup.date().required("Required").min(new Date(), "Date must be later than today"),
        time: Yup.string().required("Required"),
        guests: Yup.number().required("Required").min(2, "More than 1 guests").max(30, "Less than or equal to 30 guests")
    });
    const validationStep2 = Yup.object().shape({
        name: Yup.string().required("Required").min(3, "Greater than 3 letters").max(16, "Less than 16 letters"),
        email: Yup.string().required("Required").email("Enter a valid email"),
        phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Required"),
    });

    const formik = useFormik({
        initialValues: {
            date: "",
            time: "",
            guests: "",
            occasion: "",
            name: "",
            email: "",
            phone: "",
            details: ""
        },

        validationSchema:
            step === 0 ? validationStep1 : step === 1 ? validationStep2 : null,

        onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
                setStep(step + 1)
                //alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        }
    })

    const nextStep = () => {
        formik.resetForm({ values: { ...formik.values } }); // Reset validation state only
        setStep(step + 1)
    }
    const prevStep = () => setStep(step - 1)

    return (
        <Box maxW='860px' m='auto' color='brand.sec1'>
            <form onSubmit={formik.handleSubmit}>
                {step === 0 && (
                    <Stack spacing={4}>
                        <Heading as='h3' size='md' mt='3'>Select date and time</Heading>
                        <FormControl isInvalid={formik.errors.date && formik.touched.date} isRequired>
                            <FormLabel htmlFor='date'>Select date</FormLabel>
                            <Input
                                id='date'
                                type="date"
                                name="date"
                                size='md'
                                variant='outline'
                                placeholder="Select Date"
                                {...formik.getFieldProps("date")}
                            />
                            <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.errors.time && formik.touched.time} isRequired>
                            <FormLabel htmlFor='time'>Select Time</FormLabel>
                            <Select
                                it='time'
                                type="text"
                                name="time"
                                size='md'
                                variant='filled'
                                placeholder="Select Time"
                                {...formik.getFieldProps("time")}
                            >
                                <option>17:00</option>
                                <option>17:30</option>
                                <option>18:00</option>
                                <option>18:30</option>
                                <option>19:00</option>
                                <option>19:30</option>
                            </Select>
                            <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.errors.guests && formik.touched.guests} isRequired>
                            <FormLabel htmlFor='guests'>Total Persons</FormLabel>
                            <Input
                                id='guests'
                                type="number"
                                name="guests"
                                size='md'
                                variant='outline'
                                placeholder="Total guest"
                                {...formik.getFieldProps("guests")}
                            />
                            <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='occasion'>Occasion</FormLabel>
                            <Select
                                id='occasion'
                                type="text"
                                name="occasion"
                                size='md'
                                variant='filled'
                                placeholder="Select Occasion"
                                {...formik.getFieldProps("occasion")}
                            >
                                <option>Birthday</option>
                                <option>Engagement</option>
                                <option>Anniversary</option>
                                <option>Other</option>
                            </Select>
                        </FormControl>
                    </Stack>
                )}
                {step === 1 && (
                    <Stack spacing={4}>
                        <Heading as='h3' size='md' mt='3'>Contact info</Heading>
                        <FormControl isInvalid={formik.errors.name && formik.touched.name} isRequired>
                            <FormLabel htmlFor='name'>Name</FormLabel>
                            <Input
                                id='name'
                                type="text"
                                name="name"
                                size='md'
                                variant='outline'
                                placeholder="Enter full name here"
                                {...formik.getFieldProps("name")}
                            />
                            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={formik.errors.email && formik.touched.email} isRequired>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <Input
                                id='email'
                                type="email"
                                name="email"
                                size='md'
                                variant='outline'
                                placeholder="Enter your email here"
                                {...formik.getFieldProps("email")}
                            />
                            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={formik.errors.phone && formik.touched.phone} isRequired>
                            <FormLabel htmlFor='phone'>Phone</FormLabel>
                            <Input
                                id='phone'
                                type="number"
                                name="phone"
                                size='md'
                                variant='outline'
                                placeholder="Enter phone number here"
                                {...formik.getFieldProps("phone")}
                            />
                            <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                        </FormControl>

                        <FormControl>
                            <FormLabel htmlFor='details'>Details</FormLabel>
                            <Textarea
                                id='details'
                                type="text"
                                name="details"
                                size='md'
                                variant='outline'
                                placeholder="Enter some extra details if needed"
                                {...formik.getFieldProps("details")}
                            />
                        </FormControl>
                    </Stack>

                )}
                {step === 2 && (
                    <Stack spacing={4} color='brand.sec1' alignItems='center' m='5'>
                        <Heading as='h2' size='lg' color='brand.prim2'>Please review your info</Heading>
                        <Stack
                            direction={['column', 'row']}
                            spacing='2'
                            fontSize='lg'
                            justifyContent='space-between'
                            w='100%'
                            bg='brand.sec2'
                            p='2'
                        >
                            <Text fontWeight='bold'>Date </Text>
                            <Text>{formik.values.date}</Text>
                        </Stack>
                        <Stack
                            direction={['column', 'row']}
                            spacing='2'
                            fontSize='lg'
                            justifyContent='space-between'
                            w='100%'
                            bg='brand.sec2'
                            p='2'
                        >
                            <Text fontWeight='bold'>Time </Text>
                            <Text>{formik.values.time}</Text>
                        </Stack>
                        <Stack
                            direction={['column', 'row']}
                            spacing='2'
                            fontSize='lg'
                            justifyContent='space-between'
                            w='100%'
                            bg='brand.sec2'
                            p='2'
                        >
                            <Text fontWeight='bold'>Total guests </Text>
                            <Text>{formik.values.guests}</Text>
                        </Stack>
                        <Stack
                            direction={['column', 'row']}
                            spacing='2'
                            fontSize='lg'
                            justifyContent='space-between'
                            w='100%'
                            bg='brand.sec2'
                            p='2'
                        >
                            <Text fontWeight='bold'>Occasion</Text>
                            <Text>{formik.values.occasion}</Text>
                        </Stack>
                        <Stack
                            direction={['column', 'row']}
                            spacing='2'
                            fontSize='lg'
                            justifyContent='space-between'
                            w='100%'
                            bg='brand.sec2'
                            p='2'
                        >
                            <Text fontWeight='bold'>Name</Text>
                            <Text>{formik.values.name}</Text>
                        </Stack>
                        <Stack
                            direction={['column', 'row']}
                            spacing='2'
                            fontSize='lg'
                            justifyContent='space-between'
                            w='100%'
                            bg='brand.sec2'
                            p='2'
                        >
                            <Text fontWeight='bold'>Email</Text>
                            <Text>{formik.values.email}</Text>
                        </Stack>
                        <Stack
                            direction={['column', 'row']}
                            spacing='2'
                            fontSize='lg'
                            justifyContent='space-between'
                            w='100%'
                            bg='brand.sec2'
                            p='2'
                        >
                            <Text fontWeight='bold'>Phone</Text>
                            <Text>{formik.values.phone}</Text>
                        </Stack>
                        <Stack
                            direction={['column', 'row']}
                            spacing='2'
                            fontSize='lg'
                            justifyContent='space-between'
                            w='100%'
                            bg='brand.sec2'
                            p='2'
                        >
                            <Text fontWeight='bold'>Details</Text>
                            <Text>{formik.values.details}</Text>
                        </Stack>
                    </Stack>
                )}
                {step === 3 && (
                    <Stack alignItems='center' color='brand.prim2' mt='10' p='5' fontSize='lg' fontWeight='bold' textAlign='center'>
                        <Heading size='lg'>Thank you {formik.values.name}</Heading>
                        <Heading size='lg'>for reserving the table</Heading>
                        <Text fontSize='2xl'>for {formik.values.guests} persons</Text>
                        <Text fontSize='2xl'>on {formik.values.date} at {formik.values.time}</Text>
                        <Text>We will contact with you soon via</Text>
                        <Text> Email: {formik.values.email}</Text>
                        <Text> and Phone: {formik.values.phone}</Text>
                        <Link to='/'>
                            <Button bg='brand.prim1' size='lg' mt='5'>
                                Go to Home page
                            </Button>
                        </Link>
                    </Stack>
                )}
                <Stack direction={['column', 'row']} spacing={6} m='5' justifyContent='center' color='brand.prim2'>
                    {step > 0 & step < 3 && (
                        <Button bg='brand.prim1' onClick={prevStep}>Prev</Button>
                    )}
                    {step < 2 && (
                        <Button
                            bg='brand.prim1'
                            type="button"
                            onClick={nextStep}
                            isDisabled={!formik.isValid || !formik.dirty}
                        >
                            Next
                        </Button>
                    )}
                    {step === 2 && (
                        <Button
                            type="submit"
                            bg='brand.prim1'
                        >
                            Reserve the table
                        </Button>
                    )}
                </Stack>
            </form>
        </Box>
    )
}
