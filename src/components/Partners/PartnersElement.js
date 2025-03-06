import styled from "styled-components";

export const PartnerContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 10px;

  h2 {
    text-align: center;
    margin-bottom: 5px;
  }
`;

export const PartnerImages = styled.div`
  width: 100%;

  img {
    filter: grayscale(100%);
    width: 150px;
    height: auto;
    object-fit: contain;

    &:hover {
      transition: all 0.3s ease-in-out;
      filter: grayscale(0%);
      transform: scale(1.05);
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;
