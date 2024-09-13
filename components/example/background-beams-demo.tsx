"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { useChat } from "ai/react";

export default function BackgroundBeamsDemo() {
  const { messages, input, handleSubmit, handleInputChange, isLoading } =
    useChat();

  return (
    <div className=" h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Got any questions?
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Feel free to ask me anything.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={handleInputChange}
            disabled={isLoading}
            type="text"
            placeholder="Ask me anything..."
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-4"
          />
        </form>
      </div>

      <div className=" mt-16 h-64 overflow-scroll z-10 border border-border p-4 rounded-md w-full max-w-2xl">
        <div className="h-full overflow-y-auto space-y-4 p-4">
          {messages.map((message) => (
            <div
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
              key={message.id}
            >
              {/* chat bubble */}
              <div
                className={`max-w-xs md:max-w-md p-2 rounded-lg text-neutral-200 ${
                  message.role === "user"
                    ? "bg-blue-600"
                    : "bg-neutral-950 text-neutral-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <p>{message.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
}
