import { Navbar } from "@/widgets/Navbar";
import AppRouter from "./providers/router/ui/AppRouter";

const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};

export default App;
