import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import FilterPlatform from './FilterPlatform'
import GameCard from './GameCard'
import GameCardContainer from './GameCardContainer'
import GameCardSkeleton from './GameCardSkeleton'

const GameGrid = ({ gameQuery, setGameQuery }) => {
	const { data, error, isLoading } = useGames(gameQuery)
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

	return (
		<>
			{error && <Text color='red.500'>{error}</Text>}
			<FilterPlatform setGameQuery={setGameQuery} gameQuery={gameQuery} />
			<SimpleGrid
				columns={{
					sm: 1,
					md: 2,
					lg: 3,
					xl: 4,
				}}
				padding='10px'
				spacing={3}>
				{isLoading &&
					skeletons.map(skeleton => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{data.length > 0 &&
					data.map(game => (
						<GameCardContainer key={game.id}>
							<GameCard game={game} />
						</GameCardContainer>
					))}
			</SimpleGrid>
		</>
	)
}

export default GameGrid
