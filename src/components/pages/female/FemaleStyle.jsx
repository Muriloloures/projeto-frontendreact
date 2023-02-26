import styled from "styled-components";

export const FemaleContainer = styled(({children, className}) => {
  return (
    <section className={className}>{children}</section>
  )
})(() => `
  display: flex;
  flex-direction: column;
  align-items: center;

  .filters {
    margin-bottom: 4.5rem;
  }
  
  label {
    font-weight: 700;
    margin-right: .5rem;
  }
  
  input {
    border-radius: 4px;
    margin-right: 1rem;
  }

  h1 {
    margin: 8.7rem 0 3.7rem 0;
    text-transform: uppercase;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`)