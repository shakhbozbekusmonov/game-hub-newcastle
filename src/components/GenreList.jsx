import { Button, HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres.js'
import getCroppedImage from '../service/image-url.js'

const GenreList = ({ onSelectedGenre, selectedGenre }) => {
	const { data, error, isLoading } = useGenres()
	return (
		<>
			{error && <Text>{error}</Text>}
			<List>
				{data.map(genre => (
					<ListItem key={genre.id} marginBottom={3}>
						<HStack>
							<Image
								boxSize='32px'
								borderRadius={8}
								src={getCroppedImage(genre.image_background)}
							/>
							<Button
								fontWeight={
									genre.id === selectedGenre?.id
										? 'bold'
										: 'normal'
								}
								fontSize='lg'
								variant='link'
								whiteSpace='normal'
								textAlign='left'
								onClick={() => onSelectedGenre(genre)}>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	)
}

export default GenreList
