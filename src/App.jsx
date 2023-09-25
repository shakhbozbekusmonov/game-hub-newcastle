import { Grid, GridItem, Show } from '@chakra-ui/react'
import { GameGrid, Header } from './components'

const App = () => {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}>
			<GridItem area='nav'>
				<Header />
			</GridItem>
			<Show above='lg'>
				<GridItem area='aside'>Aside</GridItem>
			</Show>
			<GridItem area='main'>
				<GameGrid />
			</GridItem>
		</Grid>
	)
}

export default App
