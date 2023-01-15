import styled from 'styled-components'

export const FeatProductContainer = styled(({ className, children }) => {
  return <div className={className}>{children}</div>
})(
  ({ theme }) => `

  img {
    width: 100%;
    height: 54rem;
  }

  

  .information {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 1.5rem 0 2.7rem 0;
    text-transform: uppercase;
    font-weight: 700;

    p:nth-child(1) {
      margin-bottom: .7rem;
    }

  }
`
)
