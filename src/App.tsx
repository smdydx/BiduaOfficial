import React, { useState, useEffect } from "react";

import { Route, Switch, useLocation } from "wouter";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import NaplooPage from "@/pages/NaplooPage";
import BeautyCarePage from "@/pages/BeautyCarePage";
import CloudDrivePage from "@/pages/CloudDrivePage";
import OEMSolutionsPage from "@/pages/OEMSolutionsPage";
import ITConnectPage from "@/pages/ITConnectPage";
import InvestorPage from "@/pages/InvestorPage";
import BiduaVenturePage from "@/pages/BiduaVenturePage";
import HumanVerification from "@/pages/HumanVerification";
import ContactPage from "@/pages/ContactPage";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { AuthProvider } from "@/hooks/use-auth";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

import AdminDashboard from "@/admin panel/AdminDashboard";
import AdminLayout from "./components/layout/AdminLayout";
import NaplooLeads from "./admin panel/sidebar/leads/NaplooLeads";
import OEMLeads from "./admin panel/sidebar/leads/OEMLeads";
import BeautyLeads from "./admin panel/sidebar/leads/BeautyLeads";
import CloudDriveLeads from "./admin panel/sidebar/leads/CloudDriveLeads";
import ITConnectLeads from "./admin panel/sidebar/leads/ITConnectLeads";
import { AllLeads } from "./admin panel/sidebar/leads/AllLeads";
import { AllTicket } from "./admin panel/sidebar/tickets/AllTicket";
import IdTickets from "./admin panel/sidebar/tickets/[id]";
import AddProduct from "./admin panel/sidebar/products/AddProduct";
import ViewProduct from "./admin panel/sidebar/products/Viewproduct";
import AllOrders from "./admin panel/sidebar/order/allorder";
import PendingOrders from "./admin panel/sidebar/order/pendingorder";
import ShippedOrders from "./admin panel/sidebar/order/shippedorder";
import DeliveredOrders from "./admin panel/sidebar/order/delivered";
import CancelledOrders from "./admin panel/sidebar/order/cancelled";
import AllPartners from "./admin panel/sidebar/partners/allpartners";
import Customers from "./admin panel/sidebar/users/Customers";
import Investors from "./admin panel/sidebar/users/Investors";
import Distributors from './admin panel/sidebar/users/Distributors';
import AllAdmins from "./admin panel/sidebar/admin/AllAdmins";
import Profile from "./admin panel/sidebar/settings/Profile";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import LoginPage from "./admin panel/login/loginpage";
import PrivacyModal from "@/components/PrivacyModal";
function Router() {
  return (
    <Switch>
      {/* Public Routes */}
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/naploo" component={NaplooPage} />
      <Route path="/beauty-care" component={BeautyCarePage} />
      <Route path="/cloud-drive" component={CloudDrivePage} />
      <Route path="/oem-solutions" component={OEMSolutionsPage} />
      <Route path="/it-connect" component={ITConnectPage} />
      <Route path="/investor" component={InvestorPage} />
      <Route path="/bidua-ventures" component={BiduaVenturePage} />
      <Route path="/human-verification" component={HumanVerification} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/login" component={LoginPage} />

      {/* Admin Routes */}
      <ProtectedRoute path="/admin" component={AdminDashboard} />
      <ProtectedRoute path="/admin/admindashboard" component={AdminDashboard} />
      <ProtectedRoute path="/admin/alleads" component={() => (
        <AdminLayout><AllLeads /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/naplooleads" component={() => (
        <AdminLayout><NaplooLeads /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/oemleads" component={() => (
        <AdminLayout><OEMLeads /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/beautyleads" component={() => (
        <AdminLayout><BeautyLeads /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/clouddriveleads" component={() => (
        <AdminLayout><CloudDriveLeads /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/itconnectleads" component={() => (
        <AdminLayout><ITConnectLeads /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/alltickets" component={() => (
        <AdminLayout><AllTicket /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/tickets/id/:id" component={() => (
        <AdminLayout><IdTickets /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/addproducts" component={() => (
        <AdminLayout><AddProduct /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/viewproducts" component={() => (
        <AdminLayout><ViewProduct /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/allorders" component={() => (
        <AdminLayout><AllOrders /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/pendingorder" component={() => (
        <AdminLayout><PendingOrders /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/shippedorder" component={() => (
        <AdminLayout><ShippedOrders /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/deliveredorder" component={() => (
        <AdminLayout><DeliveredOrders /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/cancelledorder" component={() => (
        <AdminLayout><CancelledOrders /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/allpartners" component={() => (
        <AdminLayout><AllPartners /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/customers" component={() => (
        <AdminLayout><Customers /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/investors" component={() => (
        <AdminLayout><Investors /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/distributors" component={() => (
        <AdminLayout><Distributors /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/alladmins" component={() => (
        <AdminLayout><AllAdmins /></AdminLayout>
      )}/>
      <ProtectedRoute path="/admin/profile" component={() => (
        <AdminLayout><Profile /></AdminLayout>
      )}/>

      {/* 404 Page */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  const isAdminRoute = location.startsWith("/admin");
  const isLoginPage = location === "/login";

  // Privacy Modal state
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("privacyAccepted");
    if (!accepted && !isAdminRoute && !isLoginPage) setShowPrivacy(true);
  }, [location, isAdminRoute, isLoginPage]);

  const handleAccept = () => {
    localStorage.setItem("privacyAccepted", "true");
    setShowPrivacy(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          {/* Privacy Policy Modal */}
          <PrivacyModal open={showPrivacy} onAccept={handleAccept} />

          {/* Show Header only if NOT admin route AND NOT login page */}
          {!isAdminRoute && !isLoginPage && <Header />}

          <main className={isAdminRoute ? "flex" : "flex-grow"}>
            <div className="flex-1">
              <Suspense fallback={<LoadingSpinner />}>
                <Router />
              </Suspense>
            </div>
          </main>

          {/* Show Footer only if NOT admin route AND NOT login page */}
          {!isAdminRoute && !isLoginPage && <Footer />}
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;