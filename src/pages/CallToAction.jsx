import food from '../assets/food.jpg'
import { Stack, Image, Button, Box, Heading, Text } from '@chakra-ui/react'

function CallToAction() {
    return (
        <Box w='100%' minH='465px' color='brand.sec2'>
            <Box bg='brand.prim2' minH='350px' bgGradient='linear(brand.prim2 0%, brand.prim2 75%, white 75%)'>
                <Stack direction={['column', 'row']} justifyContent='space-between' maxW='860px' m="Auto" pt='25px'>
                    <Box maxW='360px' p='10px'>
                        <Heading as='h1' size='3xl' color='brand.prim1'>
                            Little Lemon
                        </Heading>
                        <Heading as='h2' size='xl'>
                            Chicago
                        </Heading>
                        <Text fontSize='lg' mt='10px' w='300px'>
                            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                        </Text>
                        <Button bg='brand.prim1' color='brand.sec1' mt='5'>
                            Reserve a Table
                        </Button>
                    </Box>
                    <Box p='5'>
                        <Image
                            w='375px'
                            h='420px'
                            borderRadius='20'
                            src={food}
                            alt='food'
                        />
                    </Box>
                </Stack>
            </Box>
        </Box >
    )
}

export default CallToAction