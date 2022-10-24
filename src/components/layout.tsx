import * as React from "react"
//import {LocalizedLink as Link, useLocalization} from "gatsby-theme-i18n"

import gatsbyLogo from "../images/gatsby-icon.png"
import { Link } from "gatsby"
import { LocalizedLink, useI18nL10nContext } from "gatsby-plugin-i18n-l10n"
import LanguageSelector from "./LanguageSelector"
import { DesktopNavigation, MobileNavigation } from "./Navigation"
import MDXSetup from "./MDXSetup"

interface LayoutProps {
  location: any,
  title: string,
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  const locale = useI18nL10nContext().prefix

  return (
    <div className="min-w-[320px]">
      <StainHeader title={props.title} />
      <main><MDXSetup>{props.children}</MDXSetup></main>
      <StainFooter />
    </div>
  )
}

const StainHeader = (props: { title: string }) => {
  return (
    <header className="pointer-events-none relative z-50 flex flex-col mb-6 mx-4">
      <div className="top-0 z-10 pt-6">
        <div className="relative flex items-center gap-4">
          <LocalizedLink className="pointer-events-auto" to="/">
            <div className="hidden sm:flex text-4xl font-bold flex-grow">
              STAIN Technologies
            </div>
            <div className="flex sm:hidden text-4xl font-bold flex-grow">
              STAIN
            </div>
          </LocalizedLink>
          <div className="flex flex-1 justify-end">
            <DesktopNavigation className="pointer-events-auto hidden md:flex text-xl gap-4" />
            <MobileNavigation className="pointer-events-auto md:hidden flex text-xl" />
          </div>
          <div className="flex justify-end pointer-events-auto">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  )
}

const StainFooter = () => {
  return (
    <footer className="w-full">
      <div className="flex p-8">
        <div className="flex-1 p-2 mr-2 text-md">
          <h2 className="text-lg font-bold">Stain Technologies</h2>
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
        <div className="hidden md:flex-1" />
        <div className="flex-1 text-right p-2 ml-2 text-md">
          <h2 className="text-lg font-bold">Shortcuts</h2>
          <br />
          <Link to="/services">
            Our Services
          </Link>
          <br />
          <Link to="/about">
            About Us
          </Link>
          <br />
          <Link to="/contact">
            Get In Contact
          </Link>
        </div>
      </div>
      <hr className="mb-2" />
      <div className="flex justify-center mb-2">
        <div className="flex gap-1 text-xs flex-col md:flex-row text-center">
          <p>© Stain Technologies {new Date().getFullYear()}</p>
          <p className="hidden md:block">-</p>
          <div className="flex gap-1 text-xs">
            <p>Static site powered by</p>
            <a href="https://www.gatsbyjs.com">
              <img src={gatsbyLogo} alt="Gatsby" className="h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Layout
