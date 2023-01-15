import styled from 'styled-components'

export const KidsContainer = styled(({ className, children }) => {
  return <section className={className}>{children}</section>
})(
  ({ theme }) => `
display: flex;
flex-direction: column;
align-items: center;

h1 {
  margin: 8.7rem 0 3.7rem 0;
  text-transform: uppercase;
}

div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
`
)
