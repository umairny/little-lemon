import React, { useEffect, useRef } from 'react'
import { Box, HStack } from '@chakra-ui/react'
import { Link } from "react-router-dom";

function Header() {

    const headerRef = useRef(null)

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`
        const elm = document.getElementById(id);
        if (elm) {
            elm.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    }

    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const headerElement = headerRef.current;
            if (!headerElement) {
                return;
            }
            if (prevScrollPos > currentScrollPos) {
                headerElement.style.transform = "translateY(0)";
            } else {
                headerElement.style.transform = "translateY(-200px)";
            }
            prevScrollPos = currentScrollPos;
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <Box
            top='0'
            left='0'
            right='0'
            transition='transform 0.3s'
            position='fixed'
            transitionProperty='transform'
            transitionDuration='0.3s'
            transitionTimingFunction='ease-in-out'
            bg='brand.sec2'
            ref={headerRef}
        >
            <Box maxW='860px' m='Auto'>
                <HStack px='16' py='4' justifyContent='space-between' alignItems='center'>
                    <nav>
                        <HStack>
                            <a href="#header" onClick={handleClick("header")}>
                                <img className='logo' src="./Logo.svg" alt="Logo" />
                            </a>
                        </HStack>
                    </nav>
                    <nav>
                        <HStack spacing={8}>
                            <a href="#home" onClick={handleClick("home")}>Home</a>
                            <a href="#about" onClick={handleClick("about")}>About</a>
                            <Link to="#Order online">Order online</Link>
                            <Link to="#Reservations">Reservations</Link>
                            <Link to="#Login">Login</Link>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    )
}

export default Header