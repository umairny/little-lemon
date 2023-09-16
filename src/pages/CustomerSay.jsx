import { Stack, VStack, Heading } from "@chakra-ui/react"
import Testimony from "../components/Testimony"

const Testimonials = [
    {
        rating: '5',
        getImageSrc: () => require("../assets/nicole.jpg"),
        name: 'Nicole',
        descriptions: 'Delicious food! Great staff and owners. Our whole family enjoying feasting here!!'
    },
    {
        rating: '5',
        getImageSrc: () => require("../assets/mary.jpg"),
        name: 'Mary',
        descriptions: 'Fresh made in house. Friendly staff, super delicious food.'
    },
    {
        rating: '5',
        getImageSrc: () => require("../assets/chris.jpg"),
        name: 'Chris',
        descriptions: 'Love it! I come here all the time for the best greek salad.'
    },
    {
        rating: '5',
        getImageSrc: () => require("../assets/john.jpg"),
        name: 'John',
        descriptions: 'I love this place! Great food,great people, great price!'
    }
]



function CustomerSay() {
    return (
        <Stack minH='590px' w='100%' bg='brand.sec2' mt='6' p={3}>
            <VStack maxW='860px' m='Auto' spacing='8'>
                <Heading color='brand.sec1'>Testimonials</Heading>
                <Stack direction={['column', 'row']} spacing={6} >
                    {Testimonials.map((data, i) =>
                        <Testimony
                            key={i}
                            rating={data.rating}
                            image={data.getImageSrc()}
                            name={data.name}
                            descriptions={data.descriptions}
                        />
                    )}
                </Stack>

            </VStack>
        </Stack >
    )
}

export default CustomerSay