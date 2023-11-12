import "./App.css";
import { AppProvider } from "./providers/app";
import { AppRoutes } from "./routes/route";

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
