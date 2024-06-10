import './App.css';
import { WeatherDaily } from "./components/WeatherDaily";
import { HourlyForcast } from "./components/HourlyForcast";
import { UvIndex } from "./components/UvIndex";
import { WeeklyForcast } from "./components/WeeklyForcast";
import { Wind } from "./components/Wind";

function App() {
  return (
    <main>
      <WeatherDaily />
      <HourlyForcast />
      <UvIndex />
      <WeeklyForcast />
      <Wind />
    </main>
  );
}

export default App
