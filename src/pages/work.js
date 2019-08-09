import React, {Component} from "react";
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from "../components/layout";
import SEO from "../components/seo";

import {IoMdSnow} from 'react-icons/io';
import {IoIosApps} from 'react-icons/io'
import dogIllustration from "../content/images/dog-illustration.svg";

function AboutPage(props){
  return (
    <Layout>
      <SEO
        title="Work"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      {// <section>
      //   <div className="md:w-2/3 md:mr-8">
      //     <h1>Helloo</h1>
      //     <p className="border-l-4 border-gray-900 font-serif leading-loose pl-4 text-justify">
      //       The point is... to live one's life in the full complexity of what
      //       one is, which is something much darker, more contradictory, more of
      //       a maelstrom of impulses and passions, of cruelty, ecstacy, and
      //       madness, than is apparent to the civilized being who glides on the
      //       surface and fits smoothly into the world.
      //     </p>

      //     <p className="font-bold mt-4 text-right text-xs uppercase block">
      //       – Thomas Nagel
      //     </p>
      //   </div>

      //   <figure className="w-2/3 md:w-1/3">
      //     {//<img src={dogIllustration} alt="A dog relaxing" />
      //     // 
      //   }
      //   </figure>
      // </section>
      }
                  <div id = "wrapper" className="flex flex-col">
      <div id="shecodesHackathon" className="flex w-full my-8 md:my-24 p-4 bg-indigo-400 " style = {{
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.2)"
      }}>
        <div className = " icon opacity-50 text-white text-9xl hidden md:block">
          <IoMdSnow/>
        </div>
        <div className="flex flex-col">
          <p className="text-6xl ">SHECODES HACKATHON</p>
          <p className="text-lg ">Event website for one of the biggest women-only hackathons of the year.</p>
          <p className="text-lg ">Responsibilities: Content creator | Front-end developer</p>
          <div className="">
          <button className="float-left p-2 text-xl border-2 border-indigo-700 text-indigo-700"><a href="http://hackathon.shecodesvn.tech">See website</a> </button>
          </div>
        </div>
      </div>
      <div id="shecodesHackathon" className="flex w-full my-8 md:my-24 p-4 bg-indigo-400 " style = {{
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.2)"
      }}>
        <div className = " icon opacity-50 text-white text-9xl hidden md:block">
          <IoIosApps/>
        </div>
        <div className="flex flex-col">
          <p className="text-6xl ">MINDX STORE</p>
          <p className="text-lg ">An online store filled with emotion. You'll drop a tear when you see it.</p>
          <p className="text-lg ">Responsibilities: Designer | Front-end developer</p>
          <div className="">
          <button className="float-left p-2 text-xl border-2 border-indigo-700 text-indigo-700"><a href="http://hackathon.shecodesvn.tech">See website</a> </button>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default AboutPage;
