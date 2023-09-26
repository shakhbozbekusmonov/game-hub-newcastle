import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import SwitchColorMode from './SwitchColorMode'

const Header = () => {
	return (
		<HStack justifyContent='space-between' paddingX={5}>
			<Image src={logo} width={50} alt='GameHub logo image' />

			<SwitchColorMode />
		</HStack>
	)
}

export default Header
