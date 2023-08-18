import { useState } from 'react'

import { FiSearch } from 'react-icons/fi'

import { githubApi } from '../../services/githubApi'

import {
  Container,
  ActionContent,
  BioContent,
  MainContent,
  ButtonSearch,
  InputSearch,
  Image,
  Repo,
} from './styles'

const Content = () => {
  const [search, setSearch] = useState('')
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])

  const handleInputSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleSearchOnGithub = async () => {
    if (!search) {
      setUser({})
      setSearch('')
      return
    }

    try {
      const { data } = await githubApi.get(`/users/${search}`)

      setUser({
        name: data.name,
        email: data.email,
        company: data.company,
        bio: data.bio,
        image: data.avatar_url,
      })

      const result = await githubApi.get(`/users/${search}/repos`)

      const formatedRepos = result.data.map((item) => {
        return {
          url_repo: item.html_url,
          name: item.name,
          stack: item.language,
          created_at: item.created_at,
        }
      })

      setRepos(formatedRepos)

      console.log(formatedRepos)
    } catch (err) {
      console.error(err.message)

      setUser({})
    }
  }

  return (
    <Container>
      <ActionContent>
        <InputSearch value={search} onChange={handleInputSearch} />

        <ButtonSearch onClick={handleSearchOnGithub}>
          <FiSearch />
        </ButtonSearch>
      </ActionContent>

      <MainContent>
        <BioContent>
          <strong>Dados do usuário</strong>

          {user.image && <Image src={user.image} alt={user.name} />}
          <span>{user.name}</span>
          <span>{user.email}</span>
          <span>{user.company}</span>
          <span>{user.bio}</span>
        </BioContent>

        <div />

        <BioContent>
          <strong>Repositórios do usuário</strong>

          {repos.map((repo, index) => (
            <Repo key={index}>
              <strong>{repo.name}</strong>
              <span>{repo.stack}</span>
              <a href={repo.url_repo} target="_blank" rel="noreferrer">
                {repo.name}
              </a>
            </Repo>
          ))}
        </BioContent>
      </MainContent>
    </Container>
  )
}

export { Content }
