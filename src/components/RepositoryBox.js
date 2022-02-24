import { HeartFilled } from "@ant-design/icons";
import styled from "styled-components";
import useToggle from "../hooks/useToggle";

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
    cursor: pointer;
  }
  .liked {
    color: #fd9999;
  }
  .nliked {
    color: #c0c0c0;
    :hover {
      color: #dcdcdc;
      transition: 0.3s;
    }
  }
`;

const RepositoryBox = ({
  width,
  url,
  avatar = "https://avatars.githubusercontent.com/u/15073430?v=4",
  title = "Title",
  description = "Description",
  updated = "Updated",
  onClick,
}) => {
  const [liked, toggleLike] = useToggle(false);

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <Box width={width}>
        <div className="box-avatar">
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

        <div className="box-heart" onClick={onClick}>
          {liked ? (
            <HeartFilled key="heart" className="liked" />
          ) : (
            <HeartFilled key="heart" className="nliked" onClick={toggleLike} />
          )}
        </div>
      </Box>
    </a>
  );
};

export default RepositoryBox;
