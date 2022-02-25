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

  const next = () => {
    if (page === number + 4 && page !== numPages) {
      if (page + 3 >= numPages) setNumber((prev) => prev + 1);
      else setNumber((prev) => prev + 3);
    }
    setPage(page + 1);
  };

  const prev = () => {
    if (page === number && page !== 1) {
      if (page - 3 <= 1) setNumber((prev) => prev - 1);
      else setNumber((prev) => prev - 3);
    }
    setPage(page - 1);
  };

  return (
    <>
      <Nav>
        <Button onClick={prev} disabled={page === 1}>
          &lt;
        </Button>
        {Array(Math.ceil(total / limit) < 5 ? Math.ceil(total / limit) : 5)
          .fill()
          .slice(0, 5)
          .map((x, i) => (
            <Button
              key={i + number}
              aria-current={page === i + number ? "page" : null}
              onClick={() => setPage(i + number)}
            >
              {i + number}
            </Button>
          ))}
        <p>...</p>
        <Button onClick={next} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
};

export default Pagination;
