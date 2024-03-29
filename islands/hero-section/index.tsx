import config from "@/lib/config";
import { Title, Button, Input } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const HeroSection = () => (
  <section className="flex flex-col gap-4 items-center">
    <h1 className="font-extrabold text-4xl text-center lg:text-6xl tracking-tight flex flex-col gap-3 items-center lg:items-start max-w-5xl leading-none  text-neutral-600 lg:max-w-7xl">
      Long headline to turn <br className="hidden lg:block" />
      your visitors into users
    </h1>

    <p className="text-center max-w-md mt-4 text-base text-gray-500 md:max-w-xl lg:mt-0">
      Leverage agile frameworks to provide a robust synopsis for high level
      overviews.
    </p>

    <form
      action=""
      method="post"
      id="revue-form"
      name="revue-form"
      target="_blank"
      className="p-2 mt-8 transition duration-500 ease-in-out transform border-0 bg-gray-50 md:mx-auto rounded-xl sm:max-w-3xl lg:flex"
    >
      <div className="flex space-y w-full flex-1 gap-2">
        <Input className="flex-1" placeholder="Your name" />
        <Input
          placeholder="Your email"
          className="flex-1"
          type="email"
          leftSection={<IconAt size={16} />}
        />
        <Button
          color="main"
          type="submit"
          value="Subscribe"
          name="member[subscribe]"
          id="member_submit"
          className="block w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
        >
          Notify me
        </Button>
      </div>
    </form>
    <div className="sm:max-w-lg sm:flex md:mx-auto">
      <p className="mt-3 text-xs text-gray-500">
        By subscribing, you agree with {config.site.title}
        <a target="_blank" href="https://www.getrevue.co/terms">
          Terms of Service
        </a>
        and
        <a target="_blank" href="https://www.getrevue.co/privacy">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  </section>
);

export { HeroSection };
