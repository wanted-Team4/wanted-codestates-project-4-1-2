import { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: #fff;
  color: #333;
  font-size: 1rem;

  &:hover {
    background: #cdc6ee;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #457cc7;
    color: #fff;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);
  const [number, setNumber] = useState(1);
  const add = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {Array(numPages)
          .fill()
          .slice(0, 5)
          .map((x, i) => (
            <Button
              key={i + 1}
              aria-current={page === i + 1 ? "page" : null}
              onClick={() => setPage(i + 1)}
            >
              {i + number}
            </Button>
          ))}
        <p>...</p>
        <Button
          disabled={page === numPages}
          aria-disabled={numPages + 1 === numPages}
          onClick={() => add(number + 1)}
        >
          &gt;
        </Button>
      </Nav>
    </>
  );
};

export default Pagination;
