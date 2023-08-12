import Image from "next/image";
import RandomAgentGenerator from "./Components/Agent-generator/page";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="App">
        <h1 className="text-[50px] font-bold">Valorant Agent Generator</h1>
        <p className="mt-2 mb-4 p-0.5">
          Click the button to randomly select an agent for your current game
        </p>
        <RandomAgentGenerator />
      </div>
    </main>
  );
}
