import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/homePage";
import Loading from "./pages/loadingPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* 1. Root path always redirects to loading */}
        <Route path="/" element={<Navigate to="/load" replace />} />

        {/* 2. Loading page (auto-redirects after 5 seconds) */}
        <Route path="/load" element={<Loading />} />

        {/* 3. Home page with refresh protection */}
        <Route
          path="/home"
          element={
            <HomePageWrapper>
              <HomePage />
            </HomePageWrapper>
          }
        />

        {/* 4. Catch-all redirect */}
        <Route path="*" element={<Navigate to="/load" replace />} />
      </Routes>
    </Router>
  );
}

// Wrapper component to handle refresh on home page
function HomePageWrapper({ children }) {
  const location = useLocation();

  React.useEffect(() => {
    // Check if we came directly to home page (refresh or direct URL)
    if (!location.state?.fromLoading) {
      window.location.href = "/load"; // Full reload to trigger loading
    }
  }, [location]);

  return children;
}

export default App;
