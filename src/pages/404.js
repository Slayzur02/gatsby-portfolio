import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import abductionIllustration from "../images/abduction-illustration.svg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
            <form name = "contact" method = "POST" data-netlify="true" className="mx-auto md:w-1/2">
          <p className="leading-loose mb-8">
            Here is an example of a form built using Tailwind.{" "}
            More form examples are available <a

              href="https://tailwindcss.com/docs/examples/forms"
              className="font-bold no-underline text-gray-700"
            >here</a>.

          </p>
          <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="first-name"
          >
            Name
          </label>

          <input
            className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
            id="first-name"
            type="text"
            name="name"
            placeholder="Bill"
          />
          <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="last-name"
          >
            Email
          </label>
          <input
            className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
            id="last-name"
            type="email"
            placeholder="me@gmail.com"
            name="email"
          />
          <label
            className="block font-bold mb-2 text-xs uppercase"
            htmlFor="message"
          >
            Message
          </label>

          <textarea
            className="appearance-none bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
            id="message"
            placeholder="Say something..."
            rows="8"
            name="message"
          />

          <button
            type = "submit"
            className=" border-gray-800 hover:border-gray-700 bg-gray-700 hover:bg-gray-600 font-bold px-4 py-2 rounded text-sm text-white">
            Submit
          </button>
        </form> 

      <div>
        <img
          src={abductionIllustration}
          className="block mx-auto w-1/2"
          alt="Ghost getting abducted by aliens"
        />
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Looks like this page is a ghost that got abducted by aliens...
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
