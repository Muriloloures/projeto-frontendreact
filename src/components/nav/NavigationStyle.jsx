import styled from 'styled-components'

export const ContainerNav = styled(({ children, className }) => {
  return (
    <nav>
      <header className={className}>{children}</header>
    </nav>
  )
})(
  ({ theme }) => `
    height: 9vh;
    background-color: ${theme.colors.black};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 3rem;
    position: fixed;
    z-index: 9999;

    .search {
      margin-left: 3rem;
      margin-right: ;
    }

    div:nth-child(1){
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    div:nth-child(2) {
      width: 13%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    
`
)

export const Links = styled(({ className, children }) => {
  return <li className={className}>{children}</li>
})(
  ({ theme }) => `
  color: ${theme.colors.white};
  font-size: .9rem;
  text-transform: uppercase;
  font-weight: 700;

`
)

export const Cart = styled(({ className, children }) => {
  return <li className={className}>{children}</li>
})(
  ({ theme }) => `
color: ${theme.colors.white};
font-size: 1.6rem;
text-transform: uppercase;
font-weight: 700;
display: flex;
gap: .3rem;

.length {
  font-size: 1.1rem;
  margin-top: .125rem;
}

`
)
