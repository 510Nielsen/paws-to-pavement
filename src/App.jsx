import VibePicker from "./components/VibePicker";
import Map from "./components/Map";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="w-full py-6 bg-sage text-white shadow-lg">
        <h1 className="text-5xl font-graffiti text-center drop-shadow-md">
          Paws to Pavement
        </h1>
      </header>

      <main className="w-full max-w-5xl p-6">
        <VibePicker />
        <Map />
      </main>

      <footer className="text-sm text-gray-400 mt-auto pb-4">
        Created by Tyler Nielsen
      </footer>
    </div>
  );
}
