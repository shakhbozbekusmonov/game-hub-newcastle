import { HStack, Image } from '@chakra-ui/react'
import SwitchColorMode from './SwitchColorMode'

const Header = () => {
	return (
		<HStack justifyContent='space-between' paddingX={5}>
			<Image src='https://picsum.photos/50' />

			<SwitchColorMode />
		</HStack>
	)
}

export default Header
