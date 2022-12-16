import * as React from "react"
import { graphql, PageProps, Link as oldLink, HeadFC } from "gatsby"
//import {LocalizedLink as Link} from "gatsby-theme-i18n"

import { useIntl } from "react-intl"

import Layout from "../components/layout"
import Seo from "../components/seo"

import coverImage from "../images/graphql-image.jpg"
import service0 from "../images/designing-app.jpg"
import service1 from "../images/unityCode.jpg"
import service2 from "../images/development-meeting.jpg"
import service3 from "../images/agreement.jpg"

import java from "../images/expertiseLogos/java.png"
import kotlin from "../images/expertiseLogos/kotlin.png"
import cplusplus from "../images/expertiseLogos/c++.png"
import csharp from "../images/expertiseLogos/csharp.png"
import python from "../images/expertiseLogos/python.png"
import javascript from "../images/expertiseLogos/javascript.png"
import typescript from "../images/expertiseLogos/typescript.png"
import php from "../images/expertiseLogos/php.png"

import reactjsImg from "../images/expertiseLogos/reactjs.png"
import wordpress from "../images/expertiseLogos/wordpress.png"
import dotnet from "../images/expertiseLogos/dotnet.png"
import gatsbyImg from "../images/expertiseLogos/gatsby.png"

import android from "../images/expertiseLogos/android.png"
import ios from "../images/expertiseLogos/ios.png"
import browserImg from "../images/expertiseLogos/browser.png"
import desktopImg from "../images/expertiseLogos/desktop.png"

import EN from "../../i18n/en.json"
import DA from "../../i18n/dk.json"



import StainCover from "../components/stain-cover"
import { LocalizedLink } from "gatsby-plugin-i18n-l10n"

const BlogIndex: React.FC<PageProps> = ({location}) => {
  const intl = useIntl()

  if (true) {
    return (
      <Layout location={location}>
        <StainCover title={intl.formatMessage({ id: "welcome" })} subtitle={intl.formatMessage({ id: "welcomeSub" })} coverImage={coverImage} />
        <div className="flex flex-col items-center">
          <div className="text-center mt-12 max-w-7xl mx-2">
            <h3 className="text-3xl font-bold uppercase my-2">{intl.formatMessage({ id: "serviceHeading" })}</h3>
            <p className="text-md mb-2">{intl.formatMessage({ id: "serviceSubHeading" })}</p>
            <div className="flex flex-col md:flex-row m-8 justify-center gap-8 lg:gap-8 mb-16">
              <StainServiceCard title={intl.formatMessage({ id: "serviceSystemAndApp" })} description={intl.formatMessage({ id: "serviceSystemAndAppDesc" })} img={service0} destination="/services/system-and-app-development" />
              <StainServiceCard title={intl.formatMessage({ id: "serviceDedicatedEngineer" })} description={intl.formatMessage({ id: "serviceDedicatedEngineerDesc" })} img={service3} destination="/services/general-consultancy" />
              <StainServiceCard title={intl.formatMessage({ id: "serviceSystemMaintenance" })} description={intl.formatMessage({ id: "serviceSystemMaintenanceDesc" })} img={service1} destination="/services/system-maintenance" />
              <StainServiceCard title={intl.formatMessage({ id: "serviceGeneralConsultancy" })} description={intl.formatMessage({ id: "serviceGeneralConsultancyDesc" })} img={service2} destination="/services/general-consultancy" />
            </div>
          </div>
          <div className="text-center max-w-7xl mx-2">
            <h3 className="text-3xl font-bold uppercase my-2">{intl.formatMessage({ id: "expertiseHeading" })}</h3>
            <p className="text-md mb-2">{intl.formatMessage({ id: "expertiseSubHeading" })}</p>
            <div className="flex flex-col m-8 justify-center gap-2 lg:gap-4 mb-16">
              <div className="flex flex-1 flex-col justify-center items-stretch gap-1 w-full">
                <StainExpertiseBoxHeader text={intl.formatMessage({ id: "expertiseProgramming" })}/>
                <div className="flex flex-1 flex-row flex-wrap justify-between md:flex-nowrap gap-1">
                  <StainExpertiseBox text="Java" img={java}/>
                  <StainExpertiseBox text="Kotlin" img={kotlin}/>
                  <StainExpertiseBox text="C/C++" img={cplusplus}/>
                  <StainExpertiseBox text="C#" img={csharp}/>
                  <StainExpertiseBox text="Python" img={python}/>
                  <StainExpertiseBox text="JavaScript" img={javascript}/>
                  <StainExpertiseBox text="TypeScript" img={typescript}/>
                  <StainExpertiseBox text="PHP" img={php}/>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-center items-stretch gap-1 w-full">
                <StainExpertiseBoxHeader text={intl.formatMessage({ id: "expertiseFramework" })}/>
                <div className="flex flex-1 flex-row flex-wrap justify-between md:flex-nowrap gap-1">
                  <StainExpertiseBox text="React.JS" img={reactjsImg}/>
                  <StainExpertiseBox text=".Net Core" img={dotnet}/>
                  <StainExpertiseBox text="WordPress" img={wordpress}/>
                  <StainExpertiseBox text="Gatsby" img={gatsbyImg}/>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-stretch gap-1 w-full">
                <StainExpertiseBoxHeader text={intl.formatMessage({ id: "expertiseDevice" })}/>
                <div className="flex flex-1 flex-row flex-wrap justify-between md:flex-nowrap gap-1">
                  <StainExpertiseBox text="Webpages" img={browserImg}/>
                  <StainExpertiseBox text="Desktop" img={desktopImg}/>
                  <StainExpertiseBox text="Android" img={android}/>
                  <StainExpertiseBox text="iOS" img={ios}/>
                </div>
              </div>
            </div>
          </div>
          <StainAboutUs />
        </div>
      </Layout>
    )
  }
}

interface StainExpertiseBoxProps {
  text: string,
  img?: any,
}

const StainExpertiseBox: React.FC<StainExpertiseBoxProps> = (props) => {
  if (props.img) {
    return (
      <div className="flex-0 bg-slate-200 items-center justify-center w-[49%] md:w-full p-1">
        <img className="object-contain aspect-video w-full h-14" src={props.img} alt={props.text}/>
        {props.text}
      </div>
    )
  }
  return (
    <div className="flex-0 bg-slate-200 p-4 w-32 h-14">
      {props.text}
    </div>
  )
}

const StainExpertiseBoxHeader: React.FC<StainExpertiseBoxProps> = (props) => {
  return(
    <div className="flex-1 font-bold bg-slate-200 p-4 flex-grow w-full flex justify-center items-center">
      {props.text}
    </div>
  )
}

export default BlogIndex

interface StainServiceCardProps {
  title: string,
  description: string,
  img: any,
  destination: any
}

const StainServiceCard: React.FC<StainServiceCardProps> = ({ title, description, img, destination }) => {  
  return (
    <div className="flex flex-col flex-1 rounded-xl overflow-hidden drop-shadow-xl">
      <div className="flex-1">
        <img src={img} className="w-full object-cover h-full aspect-[4/3]" alt="" />
      </div>
      <div className="flex flex-2 flex-grow justify-center bg-gradient-to-b from-pink-100 to-blue-100">
        <div className="flex flex-col justify-center mt-4 mx-6 mb-8 ">
          <div className="flex-3">
            <h5 className="text-xl font-bold mb-2">{title}</h5>
            </div>
            <div className="flex-1">
            <p className="text-md">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const StainAboutUs = () => {
  const intl = useIntl()

  return (
    <div className="w-full bg-gradient-to-b from-blue-100 to-pink-100 flex flex-col md:flex-row py-4 px-4 sm:px-8 md:px-32 2xl:px-96">
      <div className="flex flex-col flex-1 text-center px-8 pt-8 text-black justify-center items-center">
        <h2 className="text-3xl font-bold text-ellipsis pb-4 self-center">{intl.formatMessage({ id: "storyHeading" })}</h2>
        {intl.formatMessage({ id: "storyText1" })}
        <br/><br/>
        {intl.formatMessage({ id: "storyText2" })}
        <br/><br/>
        {intl.formatMessage({ id: "storyText3" })}
        <br/><br/>
      </div>
    </div>
  )
}

export const Head: HeadFC = (props) => {
  const locale = (props.pageContext as { locale: string }).locale
  const title = { "en-US": EN["indexTitle"], "da-DK": DA["indexTitle"] }

  return (
    <Seo locale={locale} title={title} />
  )
}

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

/*
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
*/
