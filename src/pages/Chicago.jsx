import { Box, Heading, Text, Stack, Image } from "@chakra-ui/react"
import Mario from '../assets/Mario and Adrian A.jpg'
import Adrian from '../assets/Mario and Adrian b.jpg'

function Chicago() {
    return (
        <Box h='580px' color='brand.sec1'>
            <Stack maxW='860px' h='100%' direction={['column', 'row']} m='auto' pos='relative'>

                <Box w='300px' m='auto' pos='absolute' left='0' top='20'>
                    <Heading as='h1' size='2xl' color='brand.prim2'>Little Lemon</Heading>
                    <Heading as='h2' size='xl'>Chicago</Heading>
                    <Text textAlign='justify' mt='6'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </Text>

                    <Text textAlign='justify'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    </Text>
                </Box>

                <Box m='auto'>
                    <Box w='265px' h='335px' pos='absolute' top='10' right='0' zIndex={9}>
                        <Image src={Mario} alt="Mario" boxSize='sm' objectFit='cover' />
                    </Box>
                    <Box w='265px' h='335px' pos='absolute' top='40' right='200' zIndex={8}>
                        <Image src={Adrian} alt="Adrian" boxSize='sm' objectFit='cover' m={4} />
                    </Box>
                </Box>
            </Stack >

        </Box >
    )
}

export default Chicago