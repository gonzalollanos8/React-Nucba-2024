import {FooterStyle, FooterColumn} from "./FooterStyles"

function Footer() {
  return (

    <FooterStyle>
    <FooterColumn>
    <h3>Social media</h3>
      <ul>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>X</li>
      </ul>
    </FooterColumn>

    <FooterColumn>
    <h3>Links</h3>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
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