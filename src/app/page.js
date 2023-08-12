import Image from "next/image";
import RandomAgentGenerator from "./Components/Agent-generator/page";
import Link from "next/link";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="App">
        <h1 className="text-[50px] font-bold">Valorant Agent Generator</h1>
        <p className="mt-2 mb-4 p-0.5">
          Click the button to randomly choose an agent for your upcoming game.
        </p>
        <RandomAgentGenerator />
        <footer className="footer fixed bottom-0 left-0 w-full flex justify-center items-center p-4">
          <p className="text-center">&copy; 2023 <a href="https://github.com/nadin3amanda" target="_blank">
          nadine amanda.
          </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
