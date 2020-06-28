import styled from 'styled-components'

export const TodoStyles = styled.div`
  .iconList {
    font-size: 24px;
    cursor: pointer;
    transition: 0.2s all ease-in;
    &:hover {
      opacity: 0.8;
    }
  }

  .emptyToDo {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #939292;
    svg {
      font-size: 48px;
    }
    p {
      margin: 10px 0px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
`

export const FormTodo = styled.form`
  margin-top: 15px;

  width: 100%;
  max-width: 400px;

  display: flex;

  input {
    flex: 1;
    height: 40px;
    padding: 0 20px;

    background-color: #ededed;
    color: #444;

    border-radius: 4px;
    font-size: 20px;

    border: 0;
  }

  button {
    height: 40px;
    padding: 0 20px;
    margin-left: 10px;

    background-color: #2c974b;
    color: #d9d8d9;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;

    border: 0;
    border-radius: 4px;

    transition: 0.2s all ease-in;
    cursor: pointer;

    &:hover {
      background-color: #79bd8c;
    }
  }
`
