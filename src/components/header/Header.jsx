import { format } from 'date-fns'

import logo from '../../assets/logo.png'

import { HeaderContainer, Content } from './styles'

const Header = () => {
  const dateFormated = format(new Date(), 'dd/MM/yyyy')
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <Content>
        <h1>Bem vindo(a) ao GitExplorer</h1>
        <span>{dateFormated}</span>
      </Content>
    </HeaderContainer>
  )
}

export { Header }
