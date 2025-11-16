import React, { useState } from 'react';
import { Card, Badge } from '../components/UI';
import { Send, Phone, Video, MoreVertical } from 'lucide-react';
import { mockSOSAlerts } from '../data/sos';
import { mockChatMessages } from '../data/vehicles';

const Chat = () => {
  const [selectedSOS, setSelectedSOS] = useState(mockSOSAlerts[0]);
  const [messages, setMessages] = useState(mockChatMessages.filter(m => m.sosId === mockSOSAlerts[0].id));
  const [newMessage, setNewMessage] = useState('');

  const activeChats = mockSOSAlerts.filter(sos => sos.status === 'Active' || sos.status === 'Assigned');

  const handleSelectChat = (sos) => {
    setSelectedSOS(sos);
    setMessages(mockChatMessages.filter(m => m.sosId === sos.id));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const msg = {
        id: `MSG-${Date.now()}`,
        sosId: selectedSOS.id,
        touristId: selectedSOS.touristId,
        sender: 'Police',
        message: newMessage,
        timestamp: new Date(),
      };
      setMessages([...messages, msg]);
      setNewMessage('');
    }
  };

  return (
    <div className="h-[calc(100vh-7rem)]">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Chat & Communication</h1>
      </div>

      <div className="grid grid-cols-12 gap-6 h-full">
        {/* Left Panel - Chat List */}
        <div className="col-span-4">
          <Card className="h-full p-0">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Active Conversations</h2>
            </div>
            <div className="overflow-y-auto" style={{ height: 'calc(100% - 4rem)' }}>
              {activeChats.map((sos) => (
                <div
                  key={sos.id}
                  onClick={() => handleSelectChat(sos)}
                  className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedSOS?.id === sos.id ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <span className="font-semibold text-gray-900">{sos.touristName}</span>
                    <Badge variant={sos.riskLevel.toLowerCase()} className="text-xs">{sos.type}</Badge>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{sos.location}</p>
                  <p className="text-xs text-gray-500 mt-1">{sos.timeSince}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Panel - Chat Window */}
        <div className="col-span-8">
          {selectedSOS ? (
            <Card className="h-full p-0 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{selectedSOS.touristName}</h2>
                  <p className="text-sm text-gray-600">{selectedSOS.phone}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Phone className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Video className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ height: 'calc(100% - 10rem)' }}>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'Police' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        msg.sender === 'Police'
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-200 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{msg.message}</p>
                      <p className={`text-xs mt-1 ${msg.sender === 'Police' ? 'text-primary-100' : 'text-gray-500'}`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button
                    type="submit"
                    className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-lg transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </Card>
          ) : (
            <Card className="h-full flex items-center justify-center">
              <p className="text-gray-500">Select a conversation to start chatting</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
