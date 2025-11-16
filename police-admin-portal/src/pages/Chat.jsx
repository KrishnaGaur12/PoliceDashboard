import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function Chat() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <MessageSquare className="w-8 h-8 text-blue-600" />
        Communication Center
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[700px]">
        <div className="card overflow-y-auto">
          <h2 className="font-bold mb-4">Active Conversations</h2>
          <div className="space-y-2">
            {['John Doe - SOS-001', 'Sarah Johnson - SOS-002', 'Michael Chen - TRIP-003'].map((chat, idx) => (
              <div key={idx} className="p-3 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                <p className="font-medium text-sm">{chat}</p>
                <p className="text-xs text-gray-500">Last message 5m ago</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 card flex flex-col">
          <h2 className="font-bold mb-4">Chat with John Doe (SOS-001)</h2>
          <div className="flex-1 bg-gray-50 rounded p-4 mb-4 overflow-y-auto">
            <div className="space-y-3">
              <div className="bg-blue-600 text-white p-3 rounded-lg max-w-xs ml-auto">
                <p className="text-sm">Are you safe? What is your current location?</p>
                <p className="text-xs opacity-75 mt-1">10:23 AM</p>
              </div>
              <div className="bg-white p-3 rounded-lg max-w-xs">
                <p className="text-sm">Yes, I'm near the main road. There were suspicious people but I'm okay now.</p>
                <p className="text-xs text-gray-500 mt-1">10:25 AM</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <input type="text" placeholder="Type a message..." className="input flex-1" />
            <button className="btn-primary">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
