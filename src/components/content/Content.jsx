import { Container, ActionContent, BioContent, MainContent } from './styles'

const Content = () => {
  return (
    <Container>
      <ActionContent>
        <input />
        <button>pesquisar</button>
      </ActionContent>

      <MainContent>
        <BioContent>
          <span>Nome</span>
          <span>Email</span>
          <span>Empresa</span>
          <span>Bio</span>
        </BioContent>

        <BioContent>
          <span>Repo 1</span>
          <span>Repo 2</span>
          <span>Repo 3</span>
          <span>Repo 4</span>
        </BioContent>
      </MainContent>
    </Container>
  )
}

export { Content }
