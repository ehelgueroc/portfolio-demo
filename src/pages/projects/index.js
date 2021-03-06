import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from "../../components/Layout"
import { portfolio, projects } from "../../styles/projects.module.css"
import Img from 'gatsby-image'

export default function Projects({ data }) {
    
    const projectsData = data.projects.nodes
    const contact = data.contact.siteMetadata.contact

    return (
        <Layout>
        <div className={portfolio}>
            <h2>Portfolio</h2>
            <h3>Projects & Websites I've created</h3>
            <div className={projects}>
                { projectsData.map(project =>  (
                    <Link to={"/projects/"+project.frontmatter.slug} key={project.id}>
                        <div>
                            <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                            <h3>{project.frontmatter.title}</h3>
                            <p>{project.frontmatter.stack}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <p>Like what you see? Email me at { contact } for a quote!</p>
        </div>
        </Layout>
    )
}

export const query = graphql`
query MyQuery {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
      nodes {
        frontmatter {
          stack
          title
          slug
          date
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }  
`