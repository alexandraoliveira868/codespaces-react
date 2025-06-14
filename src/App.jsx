import "./styles/theme.css";
import "./styles/global.css";
import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
// import { Activity, Github} from "lucide-react";

export default function App() {

  return (
    // React Fragment
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}