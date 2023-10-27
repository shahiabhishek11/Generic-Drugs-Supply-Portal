import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
`;




const Announcement = () => {
  return <Container>Welcome to the Generic Medicine Store, where we cares for your health</Container>;
};

export default Announcement;