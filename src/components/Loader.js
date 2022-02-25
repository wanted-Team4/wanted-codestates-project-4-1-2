import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 100px;
`;

const LoadingAni = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    ::after {
        content: "";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: spin 1.2s linear infinite;
    }
  `;
  

const Loader = () => {
    return (
        <Container>
            <LoadingAni />
        </Container>
    )
};

export default Loader;