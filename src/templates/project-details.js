import Img from 'gatsby-image'
import React from 'react'
import Layout from '../components/Layout'
import { details , featured } from '../styles/project-details.module.css'

export default function ProjectDetails() {
    return (
        <Layout>
            <div className={details}>
                <h2>title</h2>
                <h3>stack</h3>
                <div className={featured}>
                    {/* <Img fluid={} /> */}
                </div>
                {/* <div dangerouslySetInnerHTML={} /> */}
            </div>
        </Layout>
    )
}
