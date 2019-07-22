import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function Submission() {
  return (
    <Layout>
      <div>
        <img
          src={abductionIllustration}
          className="block mx-auto w-1/2"
        />
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Some of my aliens just fetched your submissions... Great!
        </h2>
      </div>
    </Layout>
  );
}

export default Submission;