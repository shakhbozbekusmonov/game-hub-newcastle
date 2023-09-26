import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'

const FilterPlatform = ({ setGameQuery, gameQuery }) => {
	const { data, error } = usePlatforms()

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{gameQuery.platform?.name || 'Platforms'}
			</MenuButton>
			<MenuList>
				{data.map(platform => (
					<MenuItem
						onClick={() => setGameQuery(platform)}
						key={platform.id}>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	)
}

export default FilterPlatform
