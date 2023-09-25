import {
    Box,
    Heading,
    Input,
    FormControl,
    FormLabel,
    Select,
    Textarea,
    FormHelperText,
    ButtonGroup,
    Button,
    Text,
    VStack,
    FormErrorMessage
} from '@chakra-ui/react'

function First({ formik, next, prev }) {

    return (
        <Box>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                Select Date and time
            </Heading>
            <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
            />
            <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
            />
            <Button type="button" onClick={next} isD={!formik.isValid || !formik.dirty}>
                Next
            </Button>

        </Box >
    )
}

export default First