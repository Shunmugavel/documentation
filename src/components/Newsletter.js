import React from "react";
import {Button} from "../components";

export const Newsletter = () => {
  return (
    <section className="max-w-7xl py-12 shadow-lg rounded-lg p-10 my-12 bg-[color:var(--ifm-card-background-color)]">
      <h2 className="text-3xl font-extrabold tracking-wide sm:text-4xl">
        <span className="block">Sign up for the Temporal newsletter</span>
      </h2>
      <p className="block my-3">
        Sign up to receive updates about Temporal and get notified whenever we
        post new content or updates!
        <br />
      </p>
      <form
        action="https://temporal.us17.list-manage.com/subscribe/post?u=2334a0f23e55fd1840613755d&amp;id=bbbbd4709f"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate="novalidate"
        className="mt-8 sm:flex"
      >
        <label htmlFor="mce-EMAIL" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="EMAIL"
          id="mce-EMAIL"
          required
          autoComplete="email"
          className="px-5 py-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full sm:max-w-xs"
          placeholder="Enter your email"
        />
        <span className="cta_text" style={{display: "none"}}>
          You are on the waitlist!
        </span>
        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <Button className="w-full" type="submit" name="waitlist">
            Subscribe
          </Button>
        </div>
      </form>
    </section>
  );
};
