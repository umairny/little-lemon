import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'


function MobileNav() {
    return (
        <Menu>
            {({ isOpen }) => (
                <>
                    <MenuButton isActive={isOpen} as={IconButton} aria-label='Options' variant='outline'>
                        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    </MenuButton>
                    <MenuList>
                        <Link to="/"><MenuItem>Home</MenuItem></Link>
                        <Link to="/"><MenuItem>About</MenuItem></Link>
                        <Link to="/booking"><MenuItem>Reservations</MenuItem></Link>
                        <Link to="/order"><MenuItem>Order online</MenuItem></Link>
                        <Link to="/login"><MenuItem>Login</MenuItem></Link>
                    </MenuList>
                </>
            )}
        </Menu>
    )
}

export default MobileNav
