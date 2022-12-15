import * as React from "react"
//import {LocalizedLink as Link, useLocalization} from "gatsby-theme-i18n"

import gatsbyLogo from "../images/gatsby-icon.png"
import { Link } from "gatsby"
import { LocalizedLink, useI18nL10nContext } from "gatsby-plugin-i18n-l10n"
import LanguageSelector from "./LanguageSelector"
import { DesktopNavigation, MobileNavigation } from "./Navigation"
import MDXSetup from "./MDXSetup"
import { useIntl } from "react-intl"

interface LayoutProps {
  location: any,
  title: string,
  children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
  const locale = useI18nL10nContext().prefix

  return (
    <div className="min-w-[320px] bg-gray-50">
      <StainHeader title={props.title} />
      <main><MDXSetup>{props.children}</MDXSetup></main>
      <StainFooter />
    </div>
  )
}

const StainHeader = (props: { title: string }) => {
  const intl = useIntl()

  return (
    <header className="pointer-events-none z-50 w-full fixed top-2 ">
      <div className="flex flex-col mx-4 py-4 px-12 bg-sky-800 bg-opacity-60 rounded-2xl shadow-md shadow-gray-800 backdrop-blur-sm">
        <div className="relative flex items-center gap-4">
          <LocalizedLink className="pointer-events-auto" to="/">
            <div className="hidden sm:flex text-2xl font-bold flex-grow text-white">
              {intl.formatMessage({ id: "companyName" })}
            </div>
            <div className="flex sm:hidden text-2xl font-bold flex-grow text-white">
              {intl.formatMessage({ id: "companyNameShort" })}
            </div>
          </LocalizedLink>
          <div className="flex flex-1 justify-end">
            <DesktopNavigation className="pointer-events-auto hidden md:flex text-xl gap-4" />
            <MobileNavigation className="pointer-events-auto md:hidden flex text-xl" />
          </div>
          <div className="flex justify-end pointer-events-auto lg:ml-4 xl:ml-8">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  )
}

const StainFooter = () => {
  const intl = useIntl()

  return (
    <footer className="w-full">
      <div className="p-8">
        <div>
          <h2 className="text-lg font-bold text-center">{intl.formatMessage({ id: "companyName" })}</h2>
        </div>
        <div className="flex">
          <div className="flex-1 p-2 mr-2 text-md text-right">
            <br />
            <a href="tel:004542409399">(+45) 42 40 93 99</a>
            <br />
            <a href="mailto:mail@stain.dk">mail@stain.dk</a>
            <br />
          </div>
          <div className="flex-1 p-2 ml-2 text-md">
            <br />
            Vedbendvej 22, 1.
            <br />
            {intl.formatMessage({ id: "postal" })}
          </div>
        </div>
        <div className="text-center">
          <br/>
          <b>{intl.formatMessage({ id: "cvr" })}</b> 41500867
        </div>
      </div>
      <hr className="mb-2" />
      <div className="flex justify-center mb-2">
        <div className="flex gap-1 text-xs flex-col md:flex-row text-center">
          <p>© {intl.formatMessage({ id: "companyName" })} {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}

export default Layout
