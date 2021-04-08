import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Layout from '../components/Layout'
import { details , featured } from '../styles/project-details.module.css'

export default function ProjectDetails({ data }) {
    console.log(data);
    const { html } = data.markdownRemark
    const { title, stack, featureImg } = data.markdownRemark.frontmatter
    console.log(featureImg);
    return (
        <Layout>
            <div className={details}>
                <h2>{ title }</h2>
                <h3>{ stack }</h3>
                <div className={featured}>
                    <Img fluid={featureImg.childImageSharp.fluid} />
                </div>
                <div dangerouslySetInnerHTML={{__html: html}} />
            </div>
        </Layout>
    )
}

export const query = graphql`
query ProjectsPage($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featureImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }  
`