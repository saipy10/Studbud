import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import { Toaster } from "react-hot-toast";
import { useAuth } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Subjects from "./pages/Subjects";
import Analytics from "./pages/Analytics";
import AiAssistant from "./pages/AiAssistant";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/LoadingSpinner";
// import SocialWidget from "./components/SocialWidget";
// import GoogleTranslate from "./components/Translate";
import StressManagement from "./pages/StressManagement";
import BreatheNow from "./pages/BreatheNow";
import BalloonGame from "./pages/BalloonGames";
import QuickExercise from "./pages/QuickExercise";
import CalmingSounds from "./pages/CalmingSound";
import EnergyTips from "./pages/EnergyTips";
import StudyTips from "./pages/StudyTips";
function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

function App() {
  const { user } = useAuth();

  return (
    <Router>
      
      <div className="min-h-screen bg-gray-50 flex">
      
        {user && <Navbar />}
        <main
          className={`flex-1 ${
            user ? "px-4 py-8 md:px-8 lg:px-12 md:ml-64" : ""
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route
                path="/login"
                element={user ? <Navigate to="/" /> : <Login />}
              />
              <Route
                path="/signup"
                element={user ? <Navigate to="/" /> : <Signup />}
              />
              <Route path="/stress-management" element={<StressManagement />} />
              <Route path="/balloon-game" element={<BalloonGame />} />
              <Route path="/quick-exercise" element={<QuickExercise />} />
              <Route path="/breathe-now" element={<BreatheNow />} />

              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/tasks"
                element={
                  <PrivateRoute>
                    <Tasks />
                  </PrivateRoute>
                }
              />
              <Route
                path="/subjects"
                element={
                  <PrivateRoute>
                    <Subjects />
                  </PrivateRoute>
                }
              />
              <Route
                path="/analytics"
                element={
                  <PrivateRoute>
                    <Analytics />
                  </PrivateRoute>
                }
              />
              <Route
                path="/ai-assistant"
                element={
                  <PrivateRoute>
                    <AiAssistant />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route path="/stress-management" element={<StressManagement />} />
              <Route path="/balloon-game" element={<BalloonGame />} />
              <Route path="/quick-exercise" element={<QuickExercise />} />
              <Route path="/breathe-now" element={<BreatheNow />} />
              <Route path="/music" element={<CalmingSounds />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/energy-tips" element={<EnergyTips />} />
              <Route path="/study-tips" element={<StudyTips />} />

            </Routes>
          </div>
        </main>
      </div>
      {/* <SocialWidget />
      <Toaster
        position="bottom-right"
        containerStyle={{
          bottom: 40,
          right: 40,
        }}
      /> */}
    </Router>
  );
}

export default App;
