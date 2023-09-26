import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import getCroppedImage from '../service/image-url'
import CriticScore from './CriticScore'
import PlatformIconList from './PlatformIconList'

const GameCard = ({ game }) => {
	return (
		<Card height='100%'>
			<Image
				src={getCroppedImage(game.background_image)}
				alt={game.name}
			/>
			<CardBody>
				<HStack justifyContent='space-between' marginBottom={3}>
					<PlatformIconList
						platforms={game.parent_platforms.map(p => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize='2xl'>{game.name}</Heading>
			</CardBody>
		</Card>
	)
}

export default GameCard
