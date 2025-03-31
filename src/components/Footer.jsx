import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #0d0d0d;
  color: #fff;
  padding: 2rem 1rem;
  border-top: 1px solid #2b2b2b;
`;

const BackToTopSection = styled.section`
  margin-bottom: 2rem;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

/* 
  Bottom row: left (attribution), center (links), right (social)
  Using flex to distribute these sections horizontally
*/
const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* Allows wrapping on smaller screens */
  gap: 1rem; /* Space between items on small screens */
`;

const Attribution = styled.div`
  /* Left section: "Created by Omar Castenrea" (or any text you like) */
  flex: 1; /* Helps it stretch and align properly on wide screens */
  text-align: left;
`;

const FooterNav = styled.nav`
  /* Center section: links (e.g., "Contact Us", "Support") */
  flex: 1;
  text-align: center;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: inline-flex; /* So they line up horizontally */
    gap: 2rem;
  }

  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialLinks = styled.section`
  /* Right section: social icons (FB, TW, IG) */
  flex: 1;
  text-align: right;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: inline-flex;
    gap: 1rem;
  }

  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <BackToTopSection>
        <a href="#">Back to top</a>
      </BackToTopSection>

      <FooterBottom>
        <Attribution>Created by Omar Castenrea</Attribution>

        <FooterNav aria-label="Footer navigation">
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </FooterNav>

        <SocialLinks>
          <ul>
            <li>
              <a href="#">FB</a>
            </li>
            <li>
              <a href="#">TW</a>
            </li>
            <li>
              <a href="#">IG</a>
            </li>
          </ul>
        </SocialLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
