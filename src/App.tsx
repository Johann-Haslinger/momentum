import { BrowserRouter, Route, Routes } from "react-router";
import { useDisableScrollAndZoom, useThemeColorSwitcher } from "./common/hooks";
import { BudgetTracker, Journal, Notes, NotFound, Overview, TripPlanner } from "./pages";

const App = () => {
  useDisableScrollAndZoom();
  useThemeColorSwitcher();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/trip-planner" element={<TripPlanner />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/budget-tracker" element={<BudgetTracker />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
