'use client';

import { useState } from 'react';
import { Play, Pause, Settings, Activity, Users, Heart, MessageCircle, TrendingUp } from 'lucide-react';

interface AutomationTask {
  id: string;
  name: string;
  status: 'active' | 'paused' | 'stopped';
  actions: number;
  lastRun: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<AutomationTask[]>([
    { id: '1', name: 'Auto Like Posts', status: 'active', actions: 1247, lastRun: '2 mins ago' },
    { id: '2', name: 'Follow Users', status: 'active', actions: 523, lastRun: '5 mins ago' },
    { id: '3', name: 'Comment on Posts', status: 'paused', actions: 89, lastRun: '1 hour ago' },
    { id: '4', name: 'DM Campaign', status: 'stopped', actions: 0, lastRun: 'Never' },
  ]);

  const [stats] = useState({
    totalActions: 15234,
    followersGained: 892,
    engagementRate: 4.7,
    activeAutomations: 2
  });

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const newStatus = task.status === 'active' ? 'paused' : 'active';
        return { ...task, status: newStatus };
      }
      return task;
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Instagram Automation</h1>
          <p className="text-purple-200">Automate your Instagram engagement and growth</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Activity className="text-purple-300" size={24} />
              <span className="text-2xl font-bold text-white">{stats.totalActions}</span>
            </div>
            <p className="text-purple-200 text-sm">Total Actions</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Users className="text-blue-300" size={24} />
              <span className="text-2xl font-bold text-white">+{stats.followersGained}</span>
            </div>
            <p className="text-purple-200 text-sm">Followers Gained</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="text-green-300" size={24} />
              <span className="text-2xl font-bold text-white">{stats.engagementRate}%</span>
            </div>
            <p className="text-purple-200 text-sm">Engagement Rate</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <Heart className="text-pink-300" size={24} />
              <span className="text-2xl font-bold text-white">{stats.activeAutomations}</span>
            </div>
            <p className="text-purple-200 text-sm">Active Automations</p>
          </div>
        </div>

        {/* Automation Tasks */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Automation Tasks</h2>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
              + New Task
            </button>
          </div>

          <div className="space-y-4">
            {tasks.map(task => (
              <div key={task.id} className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/30 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`p-2 rounded-full transition-colors ${
                        task.status === 'active'
                          ? 'bg-green-500 hover:bg-green-600'
                          : 'bg-gray-500 hover:bg-gray-600'
                      }`}
                    >
                      {task.status === 'active' ? (
                        <Pause className="text-white" size={20} />
                      ) : (
                        <Play className="text-white" size={20} />
                      )}
                    </button>

                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg">{task.name}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-purple-200 text-sm">{task.actions} actions</span>
                        <span className="text-purple-300 text-sm">Last run: {task.lastRun}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      task.status === 'active'
                        ? 'bg-green-500/20 text-green-300'
                        : task.status === 'paused'
                        ? 'bg-yellow-500/20 text-yellow-300'
                        : 'bg-gray-500/20 text-gray-300'
                    }`}>
                      {task.status.toUpperCase()}
                    </span>
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <Settings className="text-purple-200" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <MessageCircle size={24} />
            Recent Activity
          </h2>
          <div className="space-y-3">
            {[
              { action: 'Liked photo by @user123', time: '1 min ago', icon: '❤️' },
              { action: 'Followed @creative_artist', time: '3 mins ago', icon: '👤' },
              { action: 'Commented on @influencer post', time: '7 mins ago', icon: '💬' },
              { action: 'Liked photo by @photographer', time: '12 mins ago', icon: '❤️' },
              { action: 'Followed @designer_pro', time: '15 mins ago', icon: '👤' },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center gap-3 text-purple-100 py-2 border-b border-white/10 last:border-0">
                <span className="text-xl">{activity.icon}</span>
                <span className="flex-1">{activity.action}</span>
                <span className="text-sm text-purple-300">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-purple-200 text-sm">
          <p>⚠️ Use responsibly and comply with Instagram&apos;s Terms of Service</p>
        </footer>
      </div>
    </div>
  );
}
