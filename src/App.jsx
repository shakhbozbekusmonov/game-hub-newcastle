import { Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'
import { GameGrid, Header } from './components'
import GenreList from './components/GenreList'

const App = () => {
	const [selectedGenre, setSelectedGenre] = useState('')

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '200px 1fr',
			}}>
			<GridItem area='nav'>
				<Header />
			</GridItem>
			<Show above='lg'>
				<GridItem area='aside' paddingX={6}>
					<GenreList
						selectedGenre={selectedGenre}
						onSelectedGenre={genre => setSelectedGenre(genre)}
					/>
				</GridItem>
			</Show>
			<GridItem area='main'>
				<GameGrid selectedGenre={selectedGenre} />
			</GridItem>
		</Grid>
	)
}

export default App
