import { HStack, Icon } from '@chakra-ui/react'
import { BsGlobe } from 'react-icons/bs'
import {
	FaAndroid,
	FaApple,
	FaLinux,
	FaPlaystation,
	FaWindows,
	FaXbox,
} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'

const PlatformIconList = ({ platforms }) => {

	const iconMap = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		linux: FaLinux,
		mac: FaApple,
		ios: MdPhoneIphone,
		android: FaAndroid,
		web: BsGlobe,
		nintendo: SiNintendo,
	}

	return (
		<HStack>
			{platforms.map(platform => (
				<Icon key={platform.slug} as={iconMap[platform.slug]} color='gray.500' />
			))}
		</HStack>
	)
}

export default PlatformIconList
