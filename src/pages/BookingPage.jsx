import BookingForm from '../components/BookingForm/BookingForm'
import {
    Stack,
    Box,
    Heading,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    VStack,
} from '@chakra-ui/react'

const steps = [
    { title: 'First', description: 'Date & Time' },
    { title: 'Second', description: 'Contact Info' },
    { title: 'Third', description: 'Review' },
]


function BookingPage() {
    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length,
    })
    console.log(activeStep)
    return (
        <Box w='100%' p='3'>
            <Stack maxW='860px' m='auto' textAlign='center'>
                <Heading as='h2' size='xl' color='brand.prim2' p='3'>Table reservation</Heading>
                <Stepper index={activeStep} colorScheme='yellow'>
                    {steps.map((step, index) => (
                        <Step key={index}>
                            <VStack>
                                <StepIndicator>
                                    <StepStatus
                                        complete={<StepIcon />}
                                        incomplete={<StepNumber />}
                                        active={<StepNumber />}
                                    />
                                </StepIndicator>
                                <Box>
                                    <StepTitle>{step.title}</StepTitle>
                                    <StepDescription>{step.description}</StepDescription>
                                </Box>
                            </VStack>
                            <StepSeparator />
                        </Step>
                    ))}
                </Stepper>
            </Stack>
            <BookingForm step={activeStep} setStep={setActiveStep} />
        </Box>
    )
}

export default BookingPage;