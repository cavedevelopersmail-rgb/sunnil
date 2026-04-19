import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Header from "./user/components/Header";
import Footer from "./user/components/Footer";
import LandingPage from "./user/components/LandingPage";
import About from "./user/components/About";
import Services from "./user/components/Services";
import Mep from "./user/components/service/Mep";
import Industries from "./user/components/Industries";
import Projects from "./user/components/Projects";
import Credentials from "./user/components/Credentials";
import Contact from "./user/components/Contact";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Phes from "./user/components/service/Phes";
import Fpls from "./user/components/service/Fpls";
import HvacRefrigeration from "./user/components/service/HvacRefrigeration";
import LowVoltageSystems from "./user/components/service/LowVoltageSystems";
import ElectricalSystems from "./user/components/service/ElectricalSystems";
import MiscellaneousSystems from "./user/components/service/MiscellaneousSystems";
import ScrollToTop from "./components/ScrollToTop";
import Leaders from "./components/admin/pages/Leaders";
import Privacy from "./user/components/Privacy";
import Terms from "./user/components/Terms";
import AllProject from "./user/components/AllProject";
import BlogPage from "./user/components/BlogPage";
import AllBlogs from "./user/components/AllBlogs";
// add vercel deploy now

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#00353E]"></div>
      </div>
    );
  }

  return user ? children : <Navigate to="/admin/login" replace />;
};

const LandingPageLayout = () => {
  return (
    <div>
      <Header />
      <div className=" mt-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Routes>
            {/* User routes with layout */}
            <Route element={<LandingPageLayout />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/blog/:id" element={<BlogPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/allBlogs" element={<AllBlogs />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/leaders" element={<Leaders />} />
              <Route path="/services/Phes" element={<Phes />} />
              <Route path="/services/Fpls" element={<Fpls />} />
              <Route
                path="/services/HvacRefrigeration"
                element={<HvacRefrigeration />}
              />
              <Route
                path="/services/LowVoltageSystems"
                element={<LowVoltageSystems />}
              />
              <Route
                path="/services/ElectricalSystems"
                element={<ElectricalSystems />}
              />
              <Route
                path="/services/MiscellaneousSystems"
                element={<MiscellaneousSystems />}
              />
              <Route path="/industries" element={<Industries />} />
              <Route path="/projects" element={<AllProject />} />
              <Route path="/credentials" element={<Credentials />} />
              <Route path="/contact" element={<Contact />} />
            </Route>

            {/* Admin routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
