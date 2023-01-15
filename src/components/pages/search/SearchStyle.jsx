import styled from 'styled-components'

export const SearchContainer = styled(({ className, children }) => {
  return <section className={className}>{children}</section>
})(
  ({ theme }) => `
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  

  .containerNotFound {
    height: 70vh;
    transform: translateY(7.2rem);

    .title {
      margin-left: 42%;
      margin-top: 2rem;
      text-transform: uppercase;
    }

    .notFoundTitle {
      margin-left: 42%;
      margin-top: 9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

  }

  .container {
    
    transform: translateY(7.2rem);

    .title {
      margin-left: 42%;
      margin-top: 2rem;
      text-transform: uppercase;
    }
    
  }

  .input {
    transform: translateY(5.2rem);
    
    input {
      width: 100%;
      height: 4.8rem;
      font-weight: 500;
      font-size: 1.4rem;
      padding-left: 1rem;
      border: none;
      outline: none;
      background-color: ${theme.colors.gray2};
    }

    
  }
  .productsOrNotFound {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 4.2rem 0 7.4rem 0;
  }
`
)
