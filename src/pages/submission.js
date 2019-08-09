import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function Submission() {
  return (
    <Layout>
    <SEO
        title="Success"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <div className=" flex flex-col justify-center items-center align-middle">
      <div className = "flex flex-col align-middle items-center w-1/2 md:w-1/3 rounded-lg" style = {{
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.2)"
      }}>
        <h2 className="text-4xl font-bold text-center mt-8 p-3">
          Success!
        </h2>
        <div className="inline-block bg-indigo-600 px-4 py-2 rounded-lg text-2xl mb-8">Return</div>
      </div>
      </div>
    </Layout>
  );
}

export default Submission;