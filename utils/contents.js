import axios from 'axios'

export const getCommunities = async () =>
  (await axios.get('/contents/communities.json')).data

export const getCommunity = async (id) => {
  const community = (await getCommunities()).find((c) => c.id === id)
  if (!community) {
    throw new Error(`community not found: ${id}`)
  }
  const about = (await axios.get(`/contents/community/${id}.md`)).data
  return { ...community, about }
}

export const getC3Introduction = async () => {
  const [meta, introduction] = await Promise.all([
    axios.get('/contents/c3Introduction.json'),
    axios.get('/contents/c3Introduction.md'),
  ])
  return { ...meta.data, introduction: introduction.data }
}
