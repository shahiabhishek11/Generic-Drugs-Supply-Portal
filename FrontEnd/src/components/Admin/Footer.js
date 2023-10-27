import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "./responsive";
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
    
      <Container>
        <Left>
          <Logo>Generic Medicine</Logo>
          <Desc>
          The most important benefit of generic medicines is not costsavings, but increased health gain. Developing a 
website which will help customer to buy alternative generic medicines at cheaper rate. 
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
          <ListItem>Home</ListItem>
            <ListItem>Navigation</ListItem>
            <ListItem>Manage Product</ListItem>
            <ListItem>Manage Company</ListItem>
            <ListItem>Manage Unit</ListItem>
            <ListItem>Update Product</ListItem>
            <ListItem>Delete Product</ListItem>
          
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> Office No: 2, First Floor, "Gokhale Sanchit", Survey No: 846 Servants of India Society, BMCC Road, Off FC Rd, Deccan Gymkhana, Pune, Maharashtra 411004
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> 090214 79888
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> cdac-acts@knowit.com
          </ContactItem>
          
        </Right>
      </Container>




      
    );
  };
  
  export default Footer;
