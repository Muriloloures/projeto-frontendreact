import styled from "styled-components";

export const ContainerKids = styled(({ children, className }) => {
  return <div className={className}>{children}</div>
})(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22.5%;
  margin-inline: 1rem;

  img {
    width: 100%;
  }

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

  .information {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 1.5rem 0 2.7rem 0;
    text-transform: uppercase;
    font-weight: 700;

    a {
      color: ${theme.colors.black};
    }

    p:nth-child(1) {
      margin-bottom: .7rem;
    }
  }
`
)