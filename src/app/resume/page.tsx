"use client";

import { useState } from "react";

const resumeFiles = [
  {
    name: "education",
    content: String.raw`🎓 Worcester Polytechnic Institute
   B.S. Computer Science, B.S. Mathematics (2023–2025, Incomplete)`,
  },
  {
    name: "work_history",
    content: String.raw`🏢 OpenGov – Software Engineer II (Oct 2024 – Present)
   ↪ Youngest hire, top-ranked engineer among 80+ PLC engineers
   ↪ Built full-stack features with microservices
   ↪ Improved test coverage by 30% (Jest/e2e)

🏢 Juno UX – Lead Software Engineer (Aug 2023 – Oct 2024)
   ↪ Founded consulting agency, scaled to 3 FT employees
   ↪ Delivered React/Node platforms for 10+ startups

🚀 Spree – Founder (Sep 2023 – May 2023)
   ↪ $2.5M valuation, $250k funding from Antler VC
   ↪ Led model handoff / minor acquisition`,
  },
  {
    name: "internships",
    content: String.raw`💡 Formlabs – Web Dev Intern (Mar 2024 – Jul 2024)
💬 Blues Wireless – SWE Intern (May – Aug 2023)
📄 Snorkel AI – Docs Engineer (Feb 2022 – 2023)
💾 Intel AI Builders – Tech Author Intern (Aug 2020 – Aug 2021)`,
  },
  {
    name: "research",
    content: String.raw`🧪 Harvard University – Affiliate Appointment (May 2025 – Present)
   ↪ ML for classification, SWE practices, Python for ML`,
  },
  {
    name: "skills",
    content: String.raw`💡 Fluent In:
   React, Node.js, Express, Redux, MongoDB, Postgres, Kafka, GraphQL
   TypeScript, Python, JavaScript (ES6+), Java, C/C++, Swift
   Docker, GitHub Actions, EC2, PyTorch, YOLO, TensorFlow, Pandas, NumPy`,
  },
  {
    name: "contact",
    content: String.raw`📧 vmeel@wpi.edu | 🌐 vidushimeel.com | 🔗 in/vidushimeel`,
  },
];

export default function ResumePage() {
  const [command, setCommand] = useState("");
  const [showLs, setShowLs] = useState(false);
  const [openFiles, setOpenFiles] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = command.trim().toLowerCase();

    if (trimmed === "exit") {
      alert("Exiting resume viewer. Goodbye!");
    } else if (trimmed === "ls .") {
      setShowLs(true);
    } else {
      alert(`Unknown command: ${trimmed}`);
    }

    setCommand("");
  };

  const toggleFile = (filename: string) => {
    setOpenFiles((prev) =>
      prev.includes(filename)
        ? prev.filter((f) => f !== filename)
        : [...prev, filename]
    );
  };

  return (
    <div className="bg-black text-green-500 font-mono min-h-screen p-6 space-y-4">
      {/* ASCII Art Header */}
      <pre className="whitespace-pre text-green-400 text-sm">
        {String.raw`
 ____  ____  ___  __  __  __  __  ____ 
(  _ \( ___)/ __)(  )(  )(  \/  )( ___)
 )   / )__) \__ \ )(__)(  )    (  )__) 
(_)\_)(____)(___/(______)(_/\/\_)(____)
`}
      </pre>

      {/* Interactive Command Prompt */}
      <form onSubmit={handleSubmit}>
        <label className="flex items-center gap-2">
          <span className="text-cyan-300">vidushimeel@MAC-VIDUSHIMEEL</span>:
          <span className="text-green-300">~/resume</span>$
          <input
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            placeholder="type ls . or exit"
            className="bg-black text-green-500 font-mono outline-none w-72 placeholder-green-700"
            autoFocus
          />
        </label>
      </form>

      {/* ls . output */}
      {showLs && (
        <div className="pl-4">
          <p className="text-yellow-400">resume contents:</p>
          <ul className="list-disc list-inside text-green-400">
            {resumeFiles.map((file) => (
              <li key={file.name}>
                <button
                  onClick={() => toggleFile(file.name)}
                  className="underline hover:text-cyan-300 hover:cursor-pointer"
                >
                  {file.name}
                </button>
                {openFiles.includes(file.name) && (
                  <pre className="text-sm text-green-500 mt-2 whitespace-pre-wrap ml-4">
                    {file.content}
                  </pre>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Clickable Exit */}
      <p className="pt-4">
        <button
          onClick={() => alert("Exiting resume viewer. Goodbye!")}
          className="text-yellow-400 underline hover:text-red-500 hover:cursor-pointer"
        >
          exit
        </button>
      </p>
    </div>
  );
}
