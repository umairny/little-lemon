import { Image, Flex, HStack, Spacer, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

function Nav() {
    return (
        <Box w='100%' align='center'>
            <Flex maxW="860px" px="6" py="5" justify="space-between">
                <Image src="./Logo.svg" alt="Log" width="185px" />
                <Spacer />
                <HStack as='nav' spacing='5' display={{ base: "none", md: "flex" }}>
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link to="#Reservations">Reservations</Link>
                    <Link to="#Order online">Order online</Link>
                    <Link to="#Login">Login</Link>
                </HStack>
                <HStack display={{ base: "flex", md: "none" }} >
                    <MobileNav />
                </HStack>


            </Flex>
        </Box>
    )
}

export default Nav
