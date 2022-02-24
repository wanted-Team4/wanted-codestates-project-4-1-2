import styled from "styled-components";

const Box = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 3px 4px 1px rgb(32 33 36 / 20%);
  width: ${(props) => props.width || "70%"};
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 20px;

  div {
    margin: 0 12px;
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
  .box-heart {
    margin-left: auto;
  }
  .heart {
    cursor: pointer;
  }
  svg {
    :focus {
      fill: red;
    }
  }
`;

const RepositoryBox = ({
  width,
  avatar = "https://avatars.githubusercontent.com/u/15073430?v=4",
  title = "Title",
  description = "Description",
  updated = "Updated",
  onClick,
}) => {
  return (
    <Box width={width}>
      <div>
        <img
          style={{ borderRadius: 100 }}
          width={50}
          src={avatar}
          alt="avatar"
        />
      </div>

      <div>
        <div className="box-title">{title}</div>
        <div className="box-sub">{description}</div>
        <div className="box-sub">{updated}</div>
      </div>

      <div className="box-heart">
        <svg
          className="heart"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#dcdcdc"
          onClick={onClick}
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </Box>
  );
};

export default RepositoryBox;
