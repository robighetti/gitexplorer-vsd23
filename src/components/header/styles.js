import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 16px auto;

  img {
    width: 150px;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-right: 24px;

  h1 {
    font-size: 32px;
    font-weight: 600;
  }

  span {
    font-size: 16px;
    font-weight: 500;
  }
`
