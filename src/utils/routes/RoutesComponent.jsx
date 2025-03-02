import OverviewPage from "../../pages/OverviewPage";
import ProductsPage from "../../pages/ProductsPage";
import UsersPage from "../../pages/UsersPage";
import SalesPage from "../../pages/SalesPage";
import OrdersPage from "../../pages/OrdersPage";
import AnalyticsPage from "../../pages/AnalyticsPage";
import SettingsPage from "../../pages/SettingsPage";

const routes = [
  { path: "/", element: <OverviewPage /> },
  { path: "/products", element: <ProductsPage /> },
  { path: "/users", element: <UsersPage /> },
  { path: "/sales", element: <SalesPage /> },
  { path: "/orders", element: <OrdersPage /> },
  { path: "/analytics", element: <AnalyticsPage /> },
  { path: "/settings", element: <SettingsPage /> },
];

export default routes;