import React from "react";

import {Link, graphql, useStaticQuery} from 'gatsby'
import Layout from "../components/layout";
import SEO from "../components/seo";

function Blog(){
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark (sort: {order: DESC, fields: frontmatter___date}){
				edges {
					node {
						frontmatter{
							date
							title
						}
						fields {
							slug
						}
					}
				}
			}
		}
`)	
	return (
		<Layout>
		<SEO
		      title="Blog"
		      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`,`blog`,`Math`, `CSS`]}
		/>
		<div>
			<ul>
				{data.allMarkdownRemark.edges.map(edge =>{
					return (
						<li className = "bg-gray-300 px-5 my-5 border-2 border-gray-500 rounded border-solid">
							<Link 
							to = {`/blog/${edge.node.fields.slug}`}
							>
								<h2 className="px-0 mx-0">{edge.node.frontmatter.title}</h2>
								<p className ="italic">{edge.node.frontmatter.date}</p>
							</Link>

						</li>
					)	
				})}
			</ul>
		</div>
		</Layout>
	)
}

export default Blog;