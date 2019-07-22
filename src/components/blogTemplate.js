import React, { PropTypes } from 'react';
import {graphql} from 'gatsby'

import Layout from "../components/layout";

export const query = graphql`
query($slug: String!){
	markdownRemark(fields: {slug: {eq: $slug}}) {
		frontmatter {
			date
			title
		}
		html
	}
}
`
// Make notes on how to get to here. THere are way too many stupid mistakes in gatsby
const BlogPost = ( props ) => {
    return (
        <Layout>
		<p>{props.data.markdownRemark.frontmatter.title}</p>
		<div dangerouslySetInnerHTML = {{__html: props.data.markdownRemark.html}}></div>
        </Layout>
    );
};

export default BlogPost;
