import { Card, CardBody, HStack, Image, Text } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons'


function Testimony({ rating, image, name, descriptions }) {
    return (
        <Card w='200px'>
            <CardBody>
                <HStack mb='3' justifyContent='space-between'>
                    <Text>Rating </Text>
                    <Text>
                        {rating} / <StarIcon />

                    </Text>
                </HStack>
                <HStack>
                    <Image w='75px' h='75px' borderRadius='100' src={image} alt={name} />
                    <Text ml='2' fontSize='lg' fontWeight='bold'>{name}</Text>
                </HStack>
                <Text mt='3'>{descriptions}</Text>
            </CardBody>
        </Card>
    )
}

export default Testimony