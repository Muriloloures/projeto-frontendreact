import styled from 'styled-components'

export const CartContainer = styled(({ className, children }) => {
  return <section className={className}>{children}</section>
})(
  ({theme}) => `
transform: translateY(9rem);
margin: auto;
width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .imgAndPrice {
    display: flex;
    align-items: center;
    margin-top: 3.8rem;
  }

  .color {
    color: ${theme.colors.black};
    font-size: .6rem;
  }

  .nameAndPrice {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: .8rem;
    letter-spacing: .08rem;
  }

  .quantityAndTotal {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    width: 28%;

    .boxTotal {
      margin-top: .4rem;
    }

    input {
      width: 2.3rem;
      height: 100%;
      border-inline: none;
      outline: none;
      text-align: center;
      font-size: .9rem;
      font-weight: 700;
    }

    .firstButton {
      border-right: none;
    }

    .secondButton {
      border-left: none;
    }

    button {
      height: 100%;
      font-size: .9rem;
      font-weight: 700;
    }

    .inputAndButtons {
      height: 2rem;

      .removeButton {
        margin-top: .7rem;
        border: none;
        outline: none;
        text-transform: uppercase;
        font-size: .75rem;
        border-bottom: 2px solid black;
        cursor: pointer;
      }
    }

    .price {
      font-size: .9rem;
      font-weight: 700;
    }
  }

  img{
    height: 7rem;
  }

`
)
