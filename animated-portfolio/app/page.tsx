import Navbar from "./components/NavBar/Navbar";
import Sections from "./components/Sections";

export default function Home() {
  return (
    <div className="relative overflow-clip" id="home">
      <Sections />
      <Navbar />
    </div>
  );
}
