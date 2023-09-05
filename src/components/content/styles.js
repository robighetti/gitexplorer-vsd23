import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 210px);
`

export const ActionContent = styled.div`
  display: flex;
  align-items: center;

  height: 50px;
`

export const InputSearch = styled.input`
  width: 350px;
  height: 30px;
  border-radius: 4px;

  outline: none;

  padding: 8px;
  color: #333;
  border: 0;

  background: rgba(0, 0, 0, 0.05);

  margin-right: 16px;
`

export const ButtonSearch = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 4px;

  border: 0;
  background: rgba(0, 255, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #00ff00;
    font-size: 16px;
  }

  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
`

export const MainContent = styled.section`
  height: calc(100% - 60px);

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    margin: 0 4px;
  }
`

export const BioContent = styled.div`
  flex: 1;
  height: 100%;

  background: rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;

  padding: 8px;

  border-radius: 4px;

  strong {
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
  }

  span {
    font-size: 14px;
  }
`

export const Image = styled.img`
  width: 80px;
  height: 80px;

  border-radius: 50%;
  border: 1px solid #333;

  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  margin: 0 auto;

  margin-top: 8px;
  margin-bottom: 8px;
`

export const Repo = styled.div`
  display: flex;
  align-items: flex-start;

  height: 30px;

  & + div {
    margin-bottom: 16px;
  }

  a {
    margin-left: 16px;
    text-decoration: none;
    color: #333;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-right: 32px;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.1);
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }

    strong {
      font-size: 16px;
      font-weight: 500;
    }

    span {
      margin-left: 16px;
      font-size: 12px;
    }
  }
`
