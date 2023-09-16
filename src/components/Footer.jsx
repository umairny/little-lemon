import { Box, Stack, VStack, Image, Text } from "@chakra-ui/react"


function Footer() {
    return (
        <Box w='100%' bg='brand.sec2' color='brand.sec1' p={3}>
            <footer>
                <Stack direction={['column', 'row']} maxW='860px' m='auto' pt='5' pb='5' justifyContent='space-between'>

                    <VStack>
                        <Image src="logo.png" alt="Logo" />
                    </VStack>
                    <VStack alignItems='flex-start'>
                        <Text fontSize='lg' fontWeight='bold'>Doormat Navigation</Text>
                        <Box>
                            <Text>Home</Text>
                            <Text>About</Text>
                            <Text>Reservations</Text>
                            <Text>Order online</Text>
                            <Text>Login</Text>
                        </Box>
                    </VStack>
                    <VStack alignItems='flex-start'>
                        <Text fontSize='lg' fontWeight='bold'>Contact</Text>
                        <Box>
                            <Text>main area chicago</Text>
                            <Text>1-125-452-6524</Text>
                            <Text>little-lemon@email.com</Text>
                        </Box>
                    </VStack>
                    <VStack alignItems='flex-start'>
                        <Text fontSize='lg' fontWeight='bold'>Social Media</Text>
                        <Box>
                            <Text>Facebook</Text>
                            <Text>Instagram</Text>
                            <Text>Youtube</Text>
                            <Text>tweeter</Text>
                        </Box>
                    </VStack>
                </Stack>
            </footer>


        </Box>
    )
}

export default Footer