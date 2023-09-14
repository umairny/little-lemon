import food from '../../assets/food.jpg'
import { Stack, Image, Button, Box, Heading, Text } from '@chakra-ui/react'

function CallToAction() {
    return (
        <Box w='100%' h='465px' bg='brand.prim2' paddingBottom='150px' backgroundClip="Content-box" color='brand.sec2'>
            <Stack direction={['column', 'row']} justifyContent='space-between' maxW='860px' m="Auto" pt='25px'>
                <Box w='300px'>
                    <Heading as='h1' size='2xl' color='brand.prim1'>
                        Little Lemon
                    </Heading>
                    <Heading as='h3' size='xl'>
                        Chicago
                    </Heading>
                    <Text fontSize='lg'>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </Text>
                    <Button bg='brand.prim1' color='brand.sec1' mt='5'>
                        Reserve a Table
                    </Button>
                </Box>
                <Box>
                    <Image
                        w='375px'
                        h='420px'
                        borderRadius='20'
                        src={food}
                        alt='food'
                    />
                </Box>
            </Stack>
        </Box >
    )
}

export default CallToAction