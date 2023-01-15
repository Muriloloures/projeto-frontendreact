import styled from "styled-components";

export const FooterContainer = styled(({className, children}) => {
  return (
    <footer className={className}>{children}</footer>
  )
})(({theme}) => `
  height: 31vh;
  background-color: ${theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem;
  
  
  .reserved {
    display: flex;
    gap: 1.1rem;
    margin-top: 4.8rem;
    margin-bottom: 1rem;
    font-size: .95rem;
    a {
      color: ${theme.colors.white};
    }
  }

  .createBy {
    color: ${theme.colors.white};
    font-size: .89rem;

    .gitAndLink {
      color: ${theme.colors.white};
      margin-left: .3rem;
    }
  }

  .spaceStore {
    margin-left: 5rem;
    align-self: start;
    font-size: .89rem;
    a {
      color: ${theme.colors.gray};
    }
  }
`)