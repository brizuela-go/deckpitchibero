"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export default function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
        <LinkPreview
          url="https://survey.stackoverflow.co/2024/technology/"
          className="font-bold"
        >
          The Stack Overflow Survey
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview
          url="https://www.juanbrizuela.com.mx/"
          className="font-bold"
        >
          a Personal Portfolio
        </LinkPreview>{" "}
        for reference. These are the best resources for developers.
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        Visit my 2 agencies{" "}
        <LinkPreview
          url="https://ladlabs.webflow.io/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          LadLabs
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview
          url="https://www.happysoftware.mx"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Happy Software S.A. de C.V.
        </LinkPreview>{" "}
      </p>
    </div>
  );
}
