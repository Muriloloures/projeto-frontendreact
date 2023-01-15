import styled from 'styled-components'

export const CartContainer = styled(({ className, children }) => {
  return <section className={className}>{children} </section>
})(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  .titleCart {
    height: 3rem;
    transform: translateY(9rem);
    text-transform: uppercase;
  }

  .titleCartMargin {
    height: 3rem;
    transform: translateY(9rem);
    text-transform: uppercase;
    margin-bottom: 38rem;
  }


  .prodQuantyTotal {
    width: 50%;
    transform: translateY(12rem);
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    text-transform: uppercase;
    font-size: .9rem;
    position: relative;
  }

  .prodQuantyTotal::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.black};
    transform: translateY(1.4rem);
  }

  .quantity {
    margin-left: 48%;

  }
 
  .productsCart {
    width: 100%;
  }

  .total {
    width: 50%;
    transform: translateY(11rem);
    position: relative;
    margin-bottom: 23rem;
    
    .totalAndCkeckout {
      margin-top: 2%;
      margin-left: 85%;
      font-size: .7rem;
      text-transform: uppercase;

      button {
        margin-top: 1.2rem;
        color: ${theme.colors.white};
        padding: .6rem 1.7rem;
        font-size: .8rem;
        text-transform: uppercase;
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
  }

  .total::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.black};
    
  }

  .cart {
    transform: translateY(9rem);
    text-transform: uppercase;
  }

  .emptyCart {
    transform: translateY(10rem);
  }

  .buyWithUs {
    transform: translateY(-16rem);

    button {
      color: ${theme.colors.white};
      padding: .7rem 1.7rem;
      transform: translateY(-1.7rem);
      font-size: .8rem;
      text-transform: uppercase;
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

  .finished {
    transform: translateY(17rem);
  
    h1 {
      text-transform: uppercase;
    font-size: 1.25rem;
    }

    button {
      color: ${theme.colors.white};
      padding: .7rem 1.7rem;
      margin-left: 15.5rem;
      margin-top: 2rem;
      font-size: .8rem;
      text-transform: uppercase;
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
