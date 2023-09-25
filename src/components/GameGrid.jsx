import { SimpleGrid } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'

const GameGrid = () => {
	const { games, error, isLoading } = useGames()
	console.log(games)
	return (
		<SimpleGrid
			columns={{
				sm: 1,
				md: 2,
				lg: 3,
				xl: 4,
			}}
            padding='10px'
			spacing={10}>
			{games.length > 0 &&
				games.map(game => <GameCard key={game.id} game={game} />)}
		</SimpleGrid>
	)
}

export default GameGrid
