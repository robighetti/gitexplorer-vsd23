import GlobalStyles from './styles/global'
import { Header } from './components/header/Header'
import { Content } from './components/content/Content'
import { Footer } from './components/footer/Footer'

import { Container } from './styles'

const App = () => {
  // Aqui vem o seu codigo javascript = ao node

  return (
    <Container>
      <GlobalStyles />

      <Header />

      <Content />

      <Footer />
    </Container>
  )
}

export { App }
