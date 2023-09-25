import { useState, useRef } from 'react'
import { useFormik } from 'formik'
import {
    FormControl,
    Input,
    FormLabel,
    Select,
    Button,
    FormErrorMessage,
    Box,
    VStack
} from '@chakra-ui/react'
import * as Yup from 'yup'


function BookingFo() {
    const [step, setStep] = useState(0);
    const [err, setErr] = useState("");
    const formikRef = useRef();

    //Phone number validation
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const formik = useFormik({
        initialValues: {
            date: "",
            time: "17:00",
            guests: "",
            occasion: "Occasion",
            fullName: "",
            email: "",
            phone: "",
            disc: "",
        },
        onSubmit: (values) => {
            console.log(values)
            //submit('https://umairn.com/contactme', values)
        },
        validationSchema: Yup.object({
            date: Yup.date().required("Required"),
            guests: Yup.number().min(2, "Minimum 2 guests").max(10, "Maximum 10 guests").required("Required"),
            fullName: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Required"),
            disc: Yup.string(),
        }),
    });

    const handlePrev = () => {
        if (step > 0) {
            setStep(step - 1)
        }
    }

    const handleNext = () => {
        if (step < steps.length - 1) {
            setStep(step + 1)
        }
    }

    const steps = [
        {
            title: "Date & Time",
            comp: (
                <>
                    <FormControl isInvalid={!!formik.errors.fullName && formik.touched.fullName}>
                        <FormLabel htmlFor='fullName'>Name</FormLabel>
                        <Input
                            id="fullName"
                            name='fullName'
                            type='text'
                            {...formik.getFieldProps("fullName")}
                        />
                        <FormErrorMessage>{formik.errors.fullName} - {err}</FormErrorMessage>
                    </FormControl>
                </>
            )
        },
        {
            title: "Contact Info",
            comp: (
                <>
                    <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <Input
                            id="email"
                            name='email'
                            type='email'
                            {...formik.getFieldProps("email")}
                        />
                        <FormErrorMessage>{formik.errors.email} - {err}</FormErrorMessage>
                    </FormControl>
                </>
            )
        }
    ]


    return (
        <Box w="100%">
            <VStack maxW="860px" m="auto">
                <form onSubmit={formik.handleSubmit} ref={formikRef}>
                    {steps.map((st, index) =>
                        <VStack key={index} style={{ display: index === step ? 'block' : 'none' }}>
                            {st.comp}
                        </VStack>
                    )}
                    <Button
                        type='button'
                        onClick={handlePrev}
                    >
                        Prev
                    </Button>
                    <Button
                        type='submit'
                        onClick={handleNext}
                    >
                        Next
                    </Button>
                </form>
            </VStack>
        </Box>
    )
}

export default BookingFo