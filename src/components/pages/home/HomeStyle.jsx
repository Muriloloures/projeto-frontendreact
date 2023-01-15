import styled from 'styled-components'

export const HomeContainer = styled(({ children, className }) => {
  return <main className={className}>{children}</main>
})(
  ({ theme }) => `

  img {
    width: 100%;
    margin-top: 2rem;
  }

  h1 {
    color: ${theme.colors.white};
    position: absolute;
    top: 34%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    font-size: 3rem;
  }
`
)

export const Section = styled(({ className, children }) => {
  return <section className={className}>{children}</section>
})(
  ({ theme }) => `
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .featuredTitle {
    margin: 7rem 0 7rem 0;
    font-size: 1.3rem;
    text-transform: uppercase;
  }

  .featuredProduct {
    display: flex;
    gap: 2rem;
  }

  .featuredbutton {
    margin: 3.5rem 0 6rem 0;
    button {
      padding: 1rem 2.5rem;
      font-weight: 700;
      color: ${theme.colors.white};
      cursor: pointer;
      background-image: linear-gradient(120deg, ${theme.colors.black} 50%, ${theme.colors.white} 50%);
    font-weight: 700;
    background-size: 220%;
    transition: all .5s linear;
    cursor: pointer;
    }

    button:hover {
      background-position: 100%;
      color: ${theme.colors.black};
      
    }
  }
`
)

export const ProductsExibition = styled(({ className, children }) => {
  return <section className={className}>{children}</section>
})(
  ({ theme }) => `
  
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  div {
    width: 33.33%;
    height: 70vh;
    position: relative;
    background-image: linear-gradient(to top,rgba(4,4,4,.65),rgba(54,54,54,.2));

    button {
      position: absolute;
      top: 71%;
      left: 30%;
      transform: translate(-50%, -50%);
      padding: 1rem 2.5rem;
    font-weight: 700;
    color: ${theme.colors.black};
    cursor: pointer;
    border: none;
    outline: none;
    text-transform: uppercase;
    background-image: linear-gradient(120deg, ${theme.colors.white} 50%, ${theme.colors.black} 50%);
    font-weight: 700;
    background-size: 220%;
    transition: all .5s linear;
    cursor: pointer;
    }

    button:hover {
      background-position: 100%;
      color: ${theme.colors.white};
      
    }

    .genre {
      font-size: 1.5rem;
      display: block;
      margin-bottom: .2rem;
      text-transform: uppercase;
    }
  }

  img {
    width: 100%;
    height: 63vh;
  }

  img:hover {
    transform: scale(1.2);
    transition: 5s;
  }
`
)
