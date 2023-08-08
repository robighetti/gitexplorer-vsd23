import './styles.css'

import logo from './assets/logo.png'

const App = () => {
  // Aqui vem o seu codigo javascript = ao node

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="" />

        <div className="header-content">
          <h1>Bem vindo(a) ao GitExplorer</h1>
          <span>08/08/2023</span>
        </div>
      </header>
    </div>
  )
}

export { App }
