import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'eb04f43d274d4df39c9af2eb92acfd7f',
	},
})
