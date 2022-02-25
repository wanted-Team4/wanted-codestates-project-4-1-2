import styled from "styled-components";

const Box = styled.div`
  @media screen and (max-width: 1400px) {
    .box-avatar {
      display: none;
    }
  }
  display: flex;
  align-items: center;
  box-shadow: 0 3px 4px 1px rgb(32 33 36 / 20%);
  width: ${(props) => props.width || "70%"};
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 20px;
  background: #fff;
  cursor: pointer;

  :hover {
    transition: 0.7s;
    transform: translate(2px, -3px);
  }

  div {
    margin: 0 12px;
  }

  button {
    border: 0px;
    background-color: #457cc7;
    border-radius: 3px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    color: #fff;
    width: 50px;
    height: 40px;
    font-weight: 700;
    cursor: pointer;
  }

  .box-title {
    font-weight: 900;
    font-size: large;
    color: #457cc7;
  }
  .box-sub {
    font-size: small;
    color: #1c304d;
    opacity: 0.6;
  }
  .box-button {
    margin-left: auto;
    cursor: pointer;
  }
`;

const RepositoryBox = ({
  width,
  url,
  avatar = "https://avatars.githubusercontent.com/u/15073430?v=4",
  title = "Title",
  description,
  updated,
  onClick,
  button,
}) => {
  return (
    <Box width={width}>
      <div className="box-avatar">
        <img
          style={{ borderRadius: 100 }}
          width={50}
          src={avatar}
          alt="avatar"
        />
      </div>
      <a href={url} target="_blank" rel="noreferrer">
        <div>
          <div className="box-title">{title}</div>
          {description !== undefined ? (
            <div className="box-sub">{description}</div>
          ) : null}
          {updated !== undefined ? (
            <div className="box-sub">{updated}</div>
          ) : null}
        </div>
      </a>

      {button !== undefined ? (
        <div className="box-button">
          <button onClick={onClick}>{button}</button>
        </div>
      ) : null}
    </Box>
  );
};

export default RepositoryBox;
