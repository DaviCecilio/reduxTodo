import styled from 'styled-components'

export default styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  .contactHeader {
    height: 40px;
    background-color: #313131;

    .containerContact {
      max-width: 2000px;
      padding: 5px 5vw;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      .wrapperAuthor {
        display: flex;
        align-items: center;

        p {
          margin-left: 20px;
        }
      }

      .wrapperContact {
        ul li {
          display: inline;
          margin-left: 1vw;
          transition: transform 0.2s;
          :hover {
            cursor: pointer;
            img {
              transform: scale(1.05);
              opacity: 0.8;
            }
          }
        }
      }
    }
  }

  .iconContact {
    width: 28px;
  }

  @media only screen and (max-width: 545px) {
    .iconContact {
      width: 24px;
    }
  }
`
