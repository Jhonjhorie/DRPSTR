import React from "react";
import {
  UserGroupIcon,
  BuildingStorefrontIcon,
  PencilIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

const Dashboard = () => {
  return (
    <div className="w-full h-full flex flex-col p-2">
      <div className=" h-1/4 m-1 flex flex-row">
        <div className="bg-slate-900 w-1/4 m-4 rounded-3xl p-2 flex">
          <div className="flex items-center h-full mx-6">
            <div className="w-14 h-14 bg-violet-400 rounded-3xl flex items-center justify-center">
              <UsersIcon className="w-10 h-10 text-white" />
            </div>
            <div className="flex flex-col mx-4">
              <p className="text-violet-400 font-bold text-4xl">69</p>
              <p className="text-violet-400 font-bold">Customer</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 w-1/4 m-4 rounded-3xl p-2 flex">
          <div className="flex items-center h-full mx-6">
            <div className="w-14 h-14 bg-violet-400 rounded-3xl flex items-center justify-center">
              <BuildingStorefrontIcon className="w-10 h-10 text-white" />
            </div>
            <div className="flex flex-col mx-4">
              <p className="text-violet-400 font-bold text-4xl">674</p>
              <p className="text-violet-400 font-bold">Merchant</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 w-1/4 m-4 rounded-3xl p-2 flex">
          <div className="flex items-center h-full mx-6">
            <div className="w-14 h-14 bg-violet-400 rounded-3xl flex items-center justify-center">
              <PencilIcon className="w-10 h-10 text-white" />
            </div>
            <div className="flex flex-col mx-4">
              <p className="text-violet-400 font-bold text-4xl">3458324</p>
              <p className="text-violet-400 font-bold">Designer</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 w-1/4 m-4 rounded-3xl p-2 flex">
          <div className="flex items-center h-full mx-6">
            <div className="w-14 h-14 bg-violet-400 rounded-3xl flex items-center justify-center">
              <UserGroupIcon className="w-10 h-10 text-white" />
            </div>
            <div className="flex flex-col mx-4">
              <p className="text-violet-400 font-bold text-3xl">239847</p>
              <p className="text-violet-400 font-bold">Overall Users</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-3/6 m-1 flex flex-col">
        <div className="bg-slate-900 w-4/6 h-full m-4 rounded-3xl p-2">
          <div className="flex h-full flex-col">
            <div className=" h-1/5  w-full justify-between flex items-center">
              <p className="text-white text-2xl font-bold pl-2">
                Sales Statistics
              </p>
              <select
                className="text-violet-400 text-lg bg-transparent font-bold mr-5"
                name="Time Period"
                id="timePeriod"
              >
                \
                <option value="" disabled selected hidden>
                  Time Period
                </option>
                <option className="bg-transparent" value="daily">
                  Daily
                </option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="h-2/6 m-1 flex">
        <div className="bg-slate-900 w-5/6 m-4 rounded-3xl p-2 flex flex-col">
          <p className="text-white text-2xl font-bold pl-2 pt-2">
            Top Sold Items
          </p>
          <div className="h-full flex flex-row">
            <div className="bg-slate-300 w-1/6 m-2 h-full flex items-center align-middle justify-center">
              <p>asd</p>
            </div>
            <div className="bg-slate-300 w-1/6 m-2 h-full">
              <p>asd</p>
            </div>
            <div className="bg-slate-300 w-1/6 m-2 h-full">
              <p>asd</p>
            </div>
            <div className="bg-slate-300 w-1/6 m-2 h-full">
              <p>asd</p>
            </div>
            <div className="bg-slate-300 w-1/6 m-2 h-full">
              <p>asd</p>
            </div>
            <div className="bg-slate-300 w-1/6 m-2 h-full">
              <p>asd</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
