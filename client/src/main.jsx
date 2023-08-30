import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import { CurrentUserProvider } from "./context";

import App from "./App";
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import BrandRegister from "./pages/brand-pages/BrandRegister";
import CreatorRegister from "./pages/creator-pages/CreatorRegister";

import GenericProtectedRoute from "./components/GenericProtectedRoute";
import CreatorProtectedRoute from "./components/creator-components/CreatorProtectedRoute";
import BrandProtectedRoute from "./components/brand-components/BrandProtectedRoute";
import Chats from './pages/Chats'
import CreatorSearch from './pages/brand-pages/CreatorSearch'
import MyCampaigns from './pages/brand-pages/MyCampaigns'
import CampaignSearch from './pages/creator-pages/CampaignSearch'
import ActiveCampaigns from './pages/creator-pages/ActiveCampaigns'
import Collab from './pages/Collab'

// maybe change?
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route index element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="creator-registration" element={<CreatorRegister />} />
      <Route path="brand-registration" element={<BrandRegister />} />
      <Route
        path="dashboard"
        element={
          <GenericProtectedRoute>
            <Dashboard />
          </GenericProtectedRoute>
        }
      />
      <Route path="dashboard/chats" element={<GenericProtectedRoute><Chats /></GenericProtectedRoute>} />
      <Route path="dashboard/creator-search" element={<BrandProtectedRoute><CreatorSearch /></BrandProtectedRoute>} />
      <Route path="dashboard/my-campaigns" element={<BrandProtectedRoute><MyCampaigns /></BrandProtectedRoute>} />
      <Route path="dashboard/campaign-search" element={<CreatorProtectedRoute><CampaignSearch /></CreatorProtectedRoute>} />
      <Route path="dashboard/active-campaigns" element={<CreatorProtectedRoute><ActiveCampaigns /></CreatorProtectedRoute>} />
      <Route path="dashboard/collab" element={<GenericProtectedRoute><Collab /></GenericProtectedRoute>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider>
      <CurrentUserProvider>
        <RouterProvider router={router} />
      </CurrentUserProvider>
    </CookiesProvider>
  </React.StrictMode>
);
