import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres.js'
import getCroppedImage from '../service/image-url.js'

const GenreList = () => {
	const { data, error, isLoading } = useGenres()
	return (
		<>
			{error && <Text>{error}</Text>}
			<List>
				{data.map(genre => (
					<ListItem key={genre.id}>
						<HStack>
							<Image
								boxSize='32px'
								borderRadius={8}
								src={getCroppedImage(genre.image_background)}
							/>
							<Text>{genre.name}</Text>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	)
}

export default GenreList
