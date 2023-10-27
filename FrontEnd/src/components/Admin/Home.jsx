import React from "react";
import Navbar from "./Navbar";

import styled from "styled-components";
import TableDataAdmin from "./TableDataAdmin";
import Footer from "../Home/Footer";

const Container = styled.div`
  {/*width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://business.trustedshops.com/hubfs/1-TS_B2B/content/UK/20190131-Selling_Medicine_Online_EU/blogTitle-selling_medicine.png")
      center;
  background-size: cover;
  display: flex;
  align-items: top;
  justify-content: top;*/}
`;
const Home = () => {

  
    return (
      <div>
  <Container>
  <Navbar />
  <TableDataAdmin/>

<Footer/>
  </Container>


          
      </div>
      
      

    );
  };
  
  export default Home;
