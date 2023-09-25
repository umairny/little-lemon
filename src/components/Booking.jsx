import { useState } from 'react'
import { Box, Button } from '@chakra-ui/react'
import First from './First'
import Second from './Second'
import Third from './Third'

function Booking() {
    const [step, setStep] = useState(0)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const formSteps = () => {
        switch (step) {
            case 0:
                return <First formData={formData} setFormData={setFormData} />
            case 1:
                return <Second formData={formData} setFormData={setFormData} />
            case 2:
                return <Third formData={formData} setFormData={setFormData} />
            default:
                return <First formData={formData} setFormData={setFormData} />;
        }
    }

    function handleSubmit() {
        if (step === 0) {
            //validate and go to next step
            if (formData.name === "" || formData.name.length <= 1) {
                return alert("Please enter you name")
            } else {
                setStep(step + 1)
                console.log(formData)
            }
        }
        else if (step === 1) {
            //validate and go to next step
            if (formData.email === "" || !formData.email.includes("@")) {
                return alert("Please enter a valid email")
            } else {
                setStep(step + 1)
                console.log(formData)
            }
        }
        else if (step === 2) {
            // set step to 0 and clear fields
            setStep(0)
            console.log(formData)
            setFormData({
                name: "",
                email: "",
            })
        } else setStep(step + 1)
    }

    return (
        <Box>
            {formSteps()}
            {
                step > 0 && <Button onClick={() => setStep(step - 1)}>Back</Button>
            }
            <Button onClick={handleSubmit}>
                {step === 0 || step === 1 ? "Next" : "Submit"}
            </Button>
        </Box>
    )
}

export default Booking