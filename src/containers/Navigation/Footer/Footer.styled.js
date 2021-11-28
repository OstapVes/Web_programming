import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: rgba(244, 164, 96, 0.71);
  text-align: center;
  font-size: 0.8rem;
  justify-content: center;
  align-items: center;
  padding: 1%;
  > * {
    margin: 1px 0;
  }
`;

export const InfoSection = styled.div`
  color: black;
  width: 90%;
  
`;

export const LinkSection = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-evenly;
  color: black;
  align-items: center;
`;

export const VerticalLine = styled.hr`
  width: 80%;
  border-bottom: none;
  border-top: 1px solid rgba(236, 106, 0, 0.56);
`;

export const RightsSection = styled.div`
  color: rgba(236, 106, 0, 0.56);
`;
