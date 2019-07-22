import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function Submission() {
  return (
  	<SEO
        title="Success"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
    <Layout>
      <div>
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Some of my aliens just fetched your submissions... Great!
        </h2>
      </div>
    </Layout>
  );
}

export default Submission;