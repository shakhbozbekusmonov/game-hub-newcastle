import { Badge } from '@chakra-ui/react'

const CriticScore = ({ score }) => {
	const color = score > 75 ? 'green' : score > 60 ? 'yellow' : ''
	return <Badge colorScheme={color} paddingX={2} borderRadius={4}>{score}</Badge>
}

export default CriticScore
