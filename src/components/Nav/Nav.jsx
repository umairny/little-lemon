import { Box, Flex, HStack, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <Box w='100%' bg='white'>
            <Flex h='100px' maxW='860px' as="nav" alignItems="center" m='Auto'>
                <img src="./Logo.svg" alt="Log" width="185px" />
                <Spacer />
                <HStack spacing='20px'>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link to="#Reservations">Reservations</Link>
                    <Link to="#Order online">Order online</Link>
                    <Link to="#Login">Login</Link>
                </HStack>
            </Flex>
        </Box>
    )
}

export default Nav
