import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import removebackground from "../content/images/moreawesomeme.png";

function IndexPage() {
  let theleftbracket = '{'
  let therightbracket = '}'
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <div className = "flex flex-col">
        
        <section className="">
        
        <div className="flex m-0 p-0">
        <div className="mt-16 p-0 typewriter">
          <h1 className=" text-6xl text-indigo-600 inline-block -mt-6 p-3 mb-0" >
            Tran Duc Anh
          </h1>
        </div>
        </div>
        <p className="m-0 my-10 mb-16 text-2xl">
          Hi, I'm Anch, a 19-year-old undergrad with a major in Computer Science. I 
          enjoy solving hard, challenging problems and ideas, simplifying them, and bringing solutions into real life applications. Check out <a href="/work" className = "text-indigo-600 hover:text-gray-800">my work experience</a>  here.
        </p> 
        <p className="ml-2 text-xl">
        </p>
        </section>

        <div className="w-auto h-full flex flex-col" >
          <div className="w-full h-6 bg-gray-400 flex align-middle rounded-t-lg" style = {{
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)"
          }}>
            <div className="w-4 h-4 m-1 bg-red-500 rounded-full"></div>
            <div className="w-4 h-4 m-1 bg-yellow-500 rounded-full"></div>
            <div className="w-4 h-4 m-1 bg-green-500 rounded-full"></div>
          </div>
          <div className="p-6 Inconsolata text-white rounded-b-lg" style = {{
            backgroundColor: '#293369',
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.2)"
          }}>
            <p className="">> import "Anch" from './Hanoi';</p>
            <p className="mb-1">> Anch.contactInfo</p>
            <p className="mt-1">[<a href="mailto: ducanh.tranpro@gmail.com" className = "text-teal-300">"ducanh.tranpro@gmail.com"</a> , <a href="https://www.linkedin.com/in/anh-tran-8a8b32202/" className = "text-teal-300">"Linkedin"</a>, <a href="https://github.com/Slayzur02" className = "text-teal-300">"Github"</a>]</p>
            <p className="mb-1">> Anch.resume</p>
            <p className="mt-1"><a href="/anch.pdf" className = "text-teal-300">"Tran_Duc_Anh.pdf"</a> </p>
            <p className="mb-1">> Anch.skills</p>
            <p className="mt-1 mb-0"> {theleftbracket} </p>
            <p className = "m-1"> &nbsp;&nbsp;&nbsp; Proficienct Languages {theleftbracket}</p>
            <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  Javascript</p>
            <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  Typescript</p>
              <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  Go</p>
              <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Python</p>
            <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  Java</p>
            <p className = "m-1"> &nbsp;&nbsp;&nbsp; {therightbracket}</p>

            <p className = "m-1"> &nbsp;&nbsp;&nbsp; Familiar{theleftbracket}</p>
            <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  C</p>
            <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  C#</p>
            <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  PostgreSQL</p>
            <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  MongoDB</p>
            <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  Redis</p>
            <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  GraphQL</p>
            <p className = "m-1"> &nbsp;&nbsp;&nbsp; {therightbracket}</p>
            
            <p className = "m-1"> &nbsp;&nbsp;&nbsp; Frameworks & Libraries{theleftbracket}</p>
            <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  React</p>
            <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  Redux</p>
            <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  Node.js</p>
            <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  Express</p>
            <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  Django</p>
            <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  JavaFX</p>
            <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  JUnit</p>
            <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  TailwindCSS</p>
            <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  Unity</p>
            <p className = "m-1"> &nbsp;&nbsp;&nbsp; {therightbracket}</p>

            <p className = "m-1"> &nbsp;&nbsp;&nbsp; Dev-ops {theleftbracket}</p>
            <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  Github</p>
            <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  Docker</p>
            <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  AWS</p>
            <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  Agile/Scrum</p>
            <p className = "m-1">  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  OOP/OOAD</p>
            <p className = "m-1"> &nbsp;&nbsp;&nbsp; {therightbracket}</p>    
            <p className = "m-1">{therightbracket}</p>


          </div>
          
        </div>
      </div>
      

    </Layout>
  );
}

export default IndexPage;
