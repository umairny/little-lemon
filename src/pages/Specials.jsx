import { Center, Stack, Heading, Button } from "@chakra-ui/react"
import Cards from "../components/Cards"

const cardData = [
    {
        getImageSrc: () => require("../assets/greekSalad.jpg"),
        title: 'Greek Salad',
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        price: '12.99'
    },
    {
        getImageSrc: () => require("../assets/bruchetta.jpg"),
        title: 'Bruchetta',
        description: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        price: '5.99'
    },
    {
        getImageSrc: () => require("../assets/lemonDessert.jpg"),
        title: 'Lemon Dessert',
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        price: '5.00'
    },
]

function Specials() {
    return (
        <Stack minH='625px' w='100%'>
            <Center>
                <Stack direction={['column', 'row']} alignItems='center' justifyContent='space-between' maxW='860px'>
                    <Heading as='h1' size='3xl' p={2}>This Week Special!</Heading>
                    <Button bg='brand.prim1' ml={8}>Online Menu</Button>
                </Stack>
            </Center>
            <Stack m='auto' maxW='860px' direction={['column', 'row']} spacing={10} >
                {cardData.map((data) =>
                    <Cards
                        key={data.title}
                        title={data.title}
                        description={data.description}
                        imageSrc={data.getImageSrc()}
                        price={data.price}
                    />
                )}

            </Stack>
        </Stack >
    )
}

export default Specials