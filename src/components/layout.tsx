import * as React from "react"
//import {LocalizedLink as Link, useLocalization} from "gatsby-theme-i18n"

import logo from "../images/stain_logo.png"
import gatsbyLogo from "../images/gatsby-icon.png"
import { Link } from "gatsby"

interface LayoutProps {
  location: any,
  title: string,
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  //const { locale } = useLocalization()
  let header

  //let originalLocation = location.pathname.replace("/" + locale, "")

  header = (
    <h1 className="main-heading">
      <Link to="/" /*language={locale}*/>
        <StainHeader location={location} title={props.title} />
      </Link>
    </h1>
  )

  return (
    <div className="global-wrapper">
      <header className="global-header">{header}</header>
      <main>{props.children}</main>
      <footer><StainFooter /></footer>
    </div>
  )
}

const StainHeader = (props: {location: any, title: string}) => {
  return (
    <div>
      <img src={logo} style={{ height: "1em", marginRight: 20 }} alt="Logo of Stain Technologies"></img>{props.title}
      <div style={{ float: "right" }}>
        <StainHeaderNavigateLink title="Home" to="/"></StainHeaderNavigateLink>
        <StainHeaderNavigateLink title="Services" to="/services"></StainHeaderNavigateLink>
        <StainHeaderNavigateLink title="About" to="/about"></StainHeaderNavigateLink>
        <StainHeaderNavigateLink title="Contact" to="/contact"></StainHeaderNavigateLink>
        <Link to={props.location} /*language="da"*/ style={{color: "black", marginRight: 5}}>🇩🇰</Link>
        <Link to={props.location} /*language="en"*/ style={{color: "black"}}>🇬🇧</Link>
      </div>
    </div>
  )
}

const StainHeaderNavigateLink = (props: { title: string, to: any }) => {
  return (
    <Link to={props.to} style={{ fontSize: "0.5em", marginLeft: 10, marginRight: 10, color: "black" }} /*language={undefined}*/>{props.title}</Link>
  )
}

const StainFooter = () => {
  return (
    <div>
      <div style={{ display: "flex", padding: "0px 2rem" }}>
        <div style={{ flex: 1, padding: "1rem", marginRight: 5 }}>
          <h2>Stain Technologies</h2>
          <br />
          Vedbendvej 22, 1.
          <br />
          5220 Odense SØ
          <br /> <br />
          <b>Phone:</b> <a href="tel:004542409399">(+45) 42 40 93 99</a>
          <br />
          <b>Mail:</b> <a href="mailto:mail@stain.dk">mail@stain.dk</a>
          <br /><br />
          <b>CVR:</b> 41500867
        </div>
        <div style={{ flex: 1, padding: "1rem", marginRight: 5, marginLeft: 5 }}>

        </div>
        <div style={{ flex: 1, padding: "1rem", marginRight: 5, marginLeft: 5, textAlign: "right" }}>
          <h2>Shortcuts</h2>
          <br />
          <Link to="/services" style={{ color: "black" }} /*language={undefined}*/>
            Our Services
          </Link>
          <br />
          <Link to="/about" style={{ color: "black" }} /*language={undefined}*/>
            About Us
          </Link>
          <br />
          <Link to="/contact" style={{ color: "black" }} /*language={undefined}*/>
            Get In Contact
          </Link>
        </div>
      </div>
      <hr />
      <div style={{ display: "flex", justifyContent: "center", }}>
        <p style={{ fontSize: "0.75em", verticalAlign: "middle" }}>
          © Stain Technologies {new Date().getFullYear()} - Static site powered by
          {` `}
          <a href="https://www.gatsbyjs.com"><img src={gatsbyLogo} style={{ height: "1em", marginLeft: 2, verticalAlign: "middle" }} alt="Gatsby"></img></a>
        </p>
      </div>
    </div>
  )
}

export default Layout
