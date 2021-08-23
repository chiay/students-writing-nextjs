import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
	Button,
	HStack,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	useMediaQuery,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function NavbarDropDown() {
	const { currentUser, logout } = useAuth();
	const [isMobile] = useMediaQuery('(max-width:480px)');

	return (
		<HStack>
			{!currentUser && <Link to="/signup">Sign Up</Link>}
			{!currentUser ? (
				<Button as="a" to="/login">
					Login
				</Button>
			) : (
				<Menu>
					<MenuButton
						as={Button}
						mx="1rem"
						rightIcon={<ChevronDownIcon />}
					>
						{currentUser.data.alias
							? currentUser.data.alias
							: currentUser.data.email}
					</MenuButton>
					<MenuList>
						<MenuItem as={Link} to="/dashboard" color="red.700">
							DashBoard
						</MenuItem>
						{isMobile && (
							<>
								<MenuItem as={Link} to="/prompts" color="red.700">
									Start Writing
								</MenuItem>{' '}
								<MenuItem as={Link} to="/about" color="red.700">
									About
								</MenuItem>{' '}
							</>
						)}
						<MenuItem as={Link} to="/" onClick={logout} color="red.700">
							Log Out
						</MenuItem>
					</MenuList>
				</Menu>
			)}
		</HStack>
	);
}
