import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes";
import { TeamsContextProvider } from "@state/teamsContext";
import { GamesContextProvider } from "@state/gamesContext";

export default function App() {
  return (
    <TeamsContextProvider>
      <GamesContextProvider>
        <RouterProvider router={router} />
      </GamesContextProvider>
    </TeamsContextProvider>
  );
}
