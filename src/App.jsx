import { Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'
import { GameGrid, Header } from './components'
import GenreList from './components/GenreList'

const App = () => {
	const [gameQuery, setGameQuery] = useState({ genre: '', platform: '' })

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
						gameQuery={gameQuery}
						setGameQuery={genre =>
							setGameQuery({ ...gameQuery, genre })
						}
					/>
				</GridItem>
			</Show>
			<GridItem area='main'>
				<GameGrid
					gameQuery={gameQuery}
					setGameQuery={platform =>
						setGameQuery({ ...gameQuery, platform })
					}
				/>
			</GridItem>
		</Grid>
	)
}

export default App
