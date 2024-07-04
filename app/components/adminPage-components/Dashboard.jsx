'use client'
import React, { useState } from 'react';
import { FileText, Users, Mic, Mail, TrendingUp, TrendingDown, Calendar, ChevronDown, BarChart2, PieChart, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Dummy data for demonstration
const stats = [
  { name: 'Papers Submitted', value: 86, icon: FileText, trend: 'up', percent: '12%', color: 'indigo' },
  { name: 'Registrations', value: 75, icon: Users, trend: 'down', percent: '5%', color: 'blue' },
  { name: 'Approved Presentations', value: 45, icon: Mic, trend: 'up', percent: '8%', color: 'green' },
  { name: 'Unread Messages', value: 93, icon: Mail, trend: 'up', percent: '20%', color: 'purple' },
];

const recentActivities = [
  { id: 1, user: 'John Doe', action: 'submitted a paper', time: '2 hours ago', avatar: '/api/placeholder/32/32' },
  { id: 2, user: 'Jane Smith', action: 'registered for the conference', time: '4 hours ago', avatar: '/api/placeholder/32/32' },
  { id: 3, user: 'Mike Johnson', action: 'updated their presentation', time: '1 day ago', avatar: '/api/placeholder/32/32' },
];

const upcomingDeadlines = [
  { id: 1, event: 'Early Bird Registration', date: 'June 30, 2024', daysLeft: 15 },
  { id: 2, event: 'Paper Submission Deadline', date: 'July 15, 2024', daysLeft: 30 },
  { id: 3, event: 'Reviewer Assignment', date: 'July 30, 2024', daysLeft: 45 },
];

const submissionData = [
  { name: 'Jan', Papers: 4000, Registrations: 2400 },
  { name: 'Feb', Papers: 3000, Registrations: 1398 },
  { name: 'Mar', Papers: 2000, Registrations: 9800 },
  { name: 'Apr', Papers: 2780, Registrations: 3908 },
  { name: 'May', Papers: 1890, Registrations: 4800 },
  { name: 'Jun', Papers: 2390, Registrations: 3800 },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-900">Dashboard</h1>
        <div className="flex space-x-2">
          <button 
            onClick={() => setActiveTab('overview')} 
            className={`px-4 py-2 rounded-md ${activeTab === 'overview' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('analytics')} 
            className={`px-4 py-2 rounded-md ${activeTab === 'analytics' ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'}`}
          >
            Analytics
          </button>
        </div>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((item) => (
          <div key={item.name} className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105">
            <div className={`rounded-full bg-${item.color}-100 p-3 mb-4 inline-block`}>
              <item.icon className={`h-6 w-6 text-${item.color}-600`} />
            </div>
            <p className="text-sm font-medium text-gray-500">{item.name}</p>
            <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
            <p className={`text-sm font-medium ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'} flex items-center mt-2`}>
              {item.trend === 'up' ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
              {item.percent}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-indigo-900 mb-4 flex items-center">
            <Activity className="h-5 w-5 mr-2" /> Recent Activities
          </h2>
          <ul className="space-y-4">
            {recentActivities.map((activity) => (
              <li key={activity.id} className="flex items-center bg-gray-50 p-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-100">
                <img src={activity.avatar} alt={activity.user} className="h-10 w-10 rounded-full mr-4" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.user} {activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Upcoming Deadlines */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-indigo-900 mb-4 flex items-center">
            <Calendar className="h-5 w-5 mr-2" /> Upcoming Deadlines
          </h2>
          <ul className="space-y-4">
            {upcomingDeadlines.map((deadline) => (
              <li key={deadline.id} className="bg-gray-50 p-3 rounded-md transition duration-300 ease-in-out hover:bg-gray-100">
                <p className="text-sm font-medium text-gray-900">{deadline.event}</p>
                <p className="text-xs text-gray-500">{deadline.date}</p>
                <div className="mt-2 h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-indigo-600 rounded-full" 
                    style={{ width: `${100 - (deadline.daysLeft / 45) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-right mt-1 text-indigo-600">{deadline.daysLeft} days left</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-indigo-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
              Review New Submissions
            </button>
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300">
              Send Bulk Notifications
            </button>
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">
              Generate Reports
            </button>
          </div>
        </div>
      </div>

      {/* Submission Trends Chart */}
      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-indigo-900 mb-4 flex items-center">
          <BarChart2 className="h-5 w-5 mr-2" /> Submission Trends
        </h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={submissionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Papers" fill="#4f46e5" />
              <Bar dataKey="Registrations" fill="#06b6d4" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;