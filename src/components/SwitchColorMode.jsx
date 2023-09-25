import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const SwitchColorMode = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<HStack>
			<Switch
				isChecked={colorMode === 'dark'}
				onChange={toggleColorMode}
			/>

			<Text>Color Mode</Text>
		</HStack>
	)
}

export default SwitchColorMode
