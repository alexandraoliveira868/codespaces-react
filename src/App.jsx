import "./styles/theme.css";
import "./styles/global.css";
// import { MyTextList } from "./components/MyTextList";
// import { MyGrid } from "./components/MyGrid";
import { Avaliacao } from "./components/Avaliacao";
import { Activity, Github} from "lucide-react";

export default function App() {

  return (
    // React Fragment
    <>
      <Avaliacao />
      < Activity />
      <Github />
    </>
  );
}