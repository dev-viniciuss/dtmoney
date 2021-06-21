import styled from "styled-components"

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tbody tr {
      background: var(--shape);
    }

    td {
      padding: 1rem 2rem;
      border: 0; 
      color: var(--text-body);

      &:first-child{
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }

    }

  }

`
export const ContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1rem;
  padding: 2rem 1.5rem;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    span {
      font-size: 1.65rem;
      color: var(--text-title);
    }

    p {
      font-size: 1.2rem;
      color: var(--text-body);
    }
  }
`

export const CardContainer = styled.div`
  background: var(--shape);
  padding: 1.7rem 1.5rem;
  border-radius: 0.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 0.8rem;
  
  span {
    font-size: 1.2rem;
    color: var(--text-title);
  }

  strong {
    font-size: 1.35rem;

    &.deposit {
      color: var(--green);
    }

    &.withdraw {
      color: var(--red);
    }
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 1rem;

    p {
      font-size: 1.1rem;
      color: var(--text-body);
    }
  }
`