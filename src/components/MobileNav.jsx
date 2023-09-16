import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

function MobileNav() {
    return (
        <Menu>
            {({ isOpen }) => (
                <>
                    <MenuButton isActive={isOpen} as={IconButton} aria-label='Options' variant='outline'>
                        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>About</MenuItem>
                        <MenuItem>Reservations</MenuItem>
                        <MenuItem>Order online</MenuItem>
                        <MenuItem>Login</MenuItem>
                    </MenuList>
                </>
            )}
        </Menu>
    )
}

export default MobileNav
