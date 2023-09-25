import { Image, Flex, HStack, Spacer, Box, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

function Nav() {
    return (
        <Box w='100%' align='center' >
            <Flex maxW="860px" px="6" py="5" justify="space-between">
                <Link to="/">
                    <Image src="./Logo.svg" alt="Log" width="185px" />
                </Link>
                <Spacer />
                <HStack as='nav' spacing='5' display={{ base: "none", md: "flex" }} color='brand.prim2'>
                    <ChakraLink as={Link} _hover={{ color: 'brand.prim1' }} to="/">Home</ChakraLink>
                    <ChakraLink as={Link} _hover={{ color: "brand.prim1" }}>About</ChakraLink>
                    <ChakraLink as={Link} _hover={{ color: 'brand.prim1' }} to="/booking">Reservations</ChakraLink>
                    <ChakraLink as={Link} _hover={{ color: 'brand.prim1' }} to="/order">Order online</ChakraLink>
                    <ChakraLink as={Link} _hover={{ color: 'brand.prim1' }} to="/login">Login</ChakraLink>
                </HStack>
                <HStack display={{ base: "flex", md: "none" }} >
                    <MobileNav />
                </HStack>
            </Flex>
        </Box>
    )
}

export default Nav
