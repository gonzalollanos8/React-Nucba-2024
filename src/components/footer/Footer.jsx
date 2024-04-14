import {FooterStyle, FooterColumn, SocialMedia} from "./FooterStyles"
import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";



function Footer() {
  return (

    <FooterStyle>
    <FooterColumn>
    <h3>Social media</h3>
      <SocialMedia>
          <BsInstagram/>
          <BsFacebook/>
          <BsTwitterX/>
      </SocialMedia>
    </FooterColumn>

    <FooterColumn>
    <h3>Links</h3>
      <ul>
        <li className="links">Home</li>
        <li className="links">About</li>
        <li className="links">Products</li>
      </ul>
    </FooterColumn>

    <FooterColumn>
    <h3>Contact</h3>
      <ul>
        <li>Phone: X-XXXX-XXXX</li>
        <li>Email: example@email.com</li>
      </ul>
    </FooterColumn>

    </FooterStyle>
  )
}

export default Footer