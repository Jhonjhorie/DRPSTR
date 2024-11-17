import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  ClipboardDocumentListIcon,
  ClipboardDocumentIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";

export function DefaultSidebar() {
  const location = useLocation();
  const isDashboard = location.pathname === "/admin/dashboard";
  const isApp = location.pathname === "/admin/app";
  const isReviews = location.pathname === "/admin/reviews";
  const isReports = location.pathname === "/admin/reports";
  const isReturns = location.pathname === "/admin/returns";
  const isAccounts = location.pathname === "/admin/accounts";
  const isSettings = location.pathname === "/admin/settings";

  return (
    <Card className=".h-full w-full max-w-[15rem] text-white p-4 bg-transparent flex flex-col">
      <div className="mb-2 p-4 w-full flex justify-center items-center">
        <img
          className=".h-24 w-24"
          src="/assets/images/blackLogo.png"
          alt="Logo"
        />
      </div>
      <List className="flex-grow">
        <ListItem
          className={`text-xl font-bold h-10 my-2 ${
            isDashboard || isApp ? "bg-white text-black" : ""
          }`}
        >
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/admin/dashboard">Dashboard</Link>
        </ListItem>
        <ListItem
          className={`text-xl font-bold h-10 my-2 ${
            isReviews ? "bg-white text-black" : ""
          }`}
        >
          <ListItemPrefix>
            <ClipboardDocumentListIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/admin/reviews">Reviews</Link>
        </ListItem>
        <ListItem
          className={`text-xl font-bold h-10 my-2 ${
            isReports ? "bg-white text-black" : ""
          }`}
        >
          <ListItemPrefix>
            <ClipboardDocumentIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/admin/reports">Reports</Link>
        </ListItem>
        <ListItem
          className={`text-xl font-bold h-10 my-2 ${
            isReturns ? "bg-white text-black" : ""
          }`}
        >
          <ListItemPrefix>
            <ArrowUturnLeftIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/admin/returns">Returns</Link>
        </ListItem>
        <ListItem
          className={`text-xl font-bold h-10 my-2 ${
            isAccounts ? "bg-white text-black" : ""
          }`}
        >
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/admin/accounts">Accounts</Link>
        </ListItem>
        <ListItem
          className={`text-xl font-bold h-10 my-2 ${
            isSettings ? "bg-white text-black" : ""
          }`}
        >
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/admin/settings">Settings</Link>
        </ListItem>
      </List>
      <div className="w-full flex items-center mt-auto pb-4">
        <div className="pt-2">
          <img
            className="h-10 w-10 rounded-3xl border-2 border-white"
            src="/assets/images/boy.png"
            alt="Logo"
          />
        </div>
        <div className="p-1">
          <p className="text-lg font-bold">Moderator Admin</p>
          <p className="text-xs">moderatoradmin@gmail.com</p>
        </div>
      </div>
    </Card>
  );
}
