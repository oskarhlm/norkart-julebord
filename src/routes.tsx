import { createBrowserRouter } from "react-router-dom";
import { WordGame } from "./pages/WordGame";
import { Home } from "./pages/Home";
import { ScoreAssigner } from "./components/ScoreAssigner";
import { InstrumentsGame } from "./pages/InstrumentsGame";
import { TitleLayout } from "./pages/TitleLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/word-game",
    element: <WordGame />,
  },
  {
    path: "/instruments-game",
    element: <InstrumentsGame />,
  },
  {
    path: "/oversettelsesgalskap",
    element: <TitleLayout title="Oversettelsesgalskap 🤯" />,
  },
  {
    path: "/medley",
    element: <TitleLayout title="Medley 🥗" />,
  },
  {
    path: "/grab-the-mic",
    element: <TitleLayout title="Grab the mic 🎤" />,
  },
  {
    path: "/cover-låter",
    element: <TitleLayout title="Cover-låter 🤔" />,
  },
]);
