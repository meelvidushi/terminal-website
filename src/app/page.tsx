"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();

    if (trimmed === "cd resume") {
      router.push("/resume");
    } else if (trimmed === "cd projects") {
      router.push("/projects");
    } else {
      alert("Command not found");
    }

    setInput("");
  };

  return (
    <div className="bg-black text-green-500 font-mono min-h-screen p-8">
      <div className="mb-4">
        <p>vidushimeel@MAC-VIDUSHIMEEL:~$ ls</p>
        <div className="flex gap-4 flex-wrap mt-2">
          <button
            onClick={() => router.push("/resume")}
            className="underline hover:text-green-300"
          >
            resume
          </button>
          <button
            onClick={() => router.push("/projects")}
            className="underline hover:text-green-300"
          >
            projects
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <label className="block">
          <span className="text-green-500">➜</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
            className="bg-black text-green-500 font-mono outline-none ml-2 w-80"
            placeholder="cd resume"
          />
        </label>
      </form>
    </div>
  );
}
