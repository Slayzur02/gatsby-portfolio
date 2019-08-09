import React from "react";
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout";
import SEO from "../components/seo";

function Work(props) {
  console.log(props)
  return (
    <Layout>
      <SEO
        title="Work"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
<Img fluid = {props.data.file.childImageSharp.fluid}/>
    </Layout>
  );
}

export const query = graphql`
query{
  file(relativePath: {eq: "images/Tran_Duc_Anh.jpg"}) {
    childImageSharp {
      fluid (maxWidth: 2000, maxHeight: 2560){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
export default Work;