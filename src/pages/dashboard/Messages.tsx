import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Send, Paperclip, MoreVertical, Phone, Video, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

const Messages = () => {
  const [activeConversation, setActiveConversation] = useState(1);
  const [messageInput, setMessageInput] = useState('');

  const conversations = [
    { id: 1, name: "Sarah Miller", lastMessage: "Hey! Are we still on for our mentorship session tomorrow?", time: "10:30 AM", unread: 2, online: true, image: "https://i.pravatar.cc/150?u=sarah" },
    { id: 2, name: "David Chen", lastMessage: "Thanks for the referral! I just applied.", time: "Yesterday", unread: 0, online: false, image: "https://i.pravatar.cc/150?u=david" },
    { id: 3, name: "Emily Zhang", lastMessage: "Let me know if you have any questions about the role.", time: "Mon", unread: 0, online: true, image: "https://i.pravatar.cc/150?u=emily" },
    { id: 4, name: "Michael Ross", lastMessage: "Great connecting with you!", time: "Sun", unread: 0, online: false, image: "https://i.pravatar.cc/150?u=michael" },
  ];

  const messages = [
    { id: 1, sender: "Sarah Miller", text: "Hi John! How's your job search going?", time: "10:00 AM", isMe: false },
    { id: 2, sender: "Me", text: "Hey Sarah! It's going well. I've applied to a few places.", time: "10:05 AM", isMe: true },
    { id: 3, sender: "Sarah Miller", text: "That's great to hear! Any updates from Airbnb?", time: "10:15 AM", isMe: false },
    { id: 4, sender: "Me", text: "Not yet, but I'm hopeful. I wanted to ask if you have any tips for the interview process?", time: "10:20 AM", isMe: true },
    { id: 5, sender: "Sarah Miller", text: "Absolutely! We focus a lot on cultural fit and problem-solving skills. I can share some resources with you.", time: "10:25 AM", isMe: false },
    { id: 6, sender: "Sarah Miller", text: "Hey! Are we still on for our mentorship session tomorrow?", time: "10:30 AM", isMe: false },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    // Add message logic here
    setMessageInput('');
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex gap-6">
      {/* Conversations Sidebar */}
      <Card className="w-full md:w-80 lg:w-96 flex flex-col border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input placeholder="Search messages..." className="pl-9 bg-slate-50 border-slate-200" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conv) => (
            <div 
              key={conv.id}
              onClick={() => setActiveConversation(conv.id)}
              className={cn(
                "p-4 flex gap-3 cursor-pointer hover:bg-slate-50 transition-colors border-b border-slate-50",
                activeConversation === conv.id ? "bg-blue-50 border-l-4 border-l-blue-600" : "border-l-4 border-l-transparent"
              )}
            >
              <div className="relative">
                <img src={conv.image} alt={conv.name} className="h-12 w-12 rounded-full object-cover" />
                {conv.online && (
                  <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className={cn("text-sm font-semibold truncate", activeConversation === conv.id ? "text-blue-900" : "text-slate-900")}>
                    {conv.name}
                  </h3>
                  <span className="text-xs text-slate-400 whitespace-nowrap ml-2">{conv.time}</span>
                </div>
                <p className={cn("text-sm truncate", conv.unread > 0 ? "font-semibold text-slate-900" : "text-slate-500")}>
                  {conv.lastMessage}
                </p>
              </div>
              {conv.unread > 0 && (
                <div className="flex flex-col justify-center">
                  <span className="h-5 w-5 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {conv.unread}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Chat Window */}
      <Card className="flex-1 flex flex-col border-slate-200 shadow-sm overflow-hidden hidden md:flex">
        {/* Chat Header */}
        <div className="h-16 border-b border-slate-100 flex items-center justify-between px-6 bg-white">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src={conversations[0].image} alt="Sarah" className="h-10 w-10 rounded-full object-cover" />
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Sarah Miller</h3>
              <p className="text-xs text-slate-500">Product Designer at Airbnb • Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-blue-600">
              <Phone className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-blue-600">
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-blue-600">
              <Info className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Messages Feed */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={cn(
                "flex gap-3 max-w-[80%]",
                msg.isMe ? "ml-auto flex-row-reverse" : ""
              )}
            >
              {!msg.isMe && (
                <img src={conversations[0].image} alt={msg.sender} className="h-8 w-8 rounded-full object-cover mt-1" />
              )}
              <div className={cn(
                "group relative p-4 rounded-2xl text-sm shadow-sm",
                msg.isMe 
                  ? "bg-blue-600 text-white rounded-br-none" 
                  : "bg-white text-slate-700 border border-slate-100 rounded-bl-none"
              )}>
                <p>{msg.text}</p>
                <span className={cn(
                  "text-[10px] absolute bottom-1 right-3 opacity-0 group-hover:opacity-70 transition-opacity",
                  msg.isMe ? "text-blue-100" : "text-slate-400"
                )}>
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 bg-white border-t border-slate-100">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <Button type="button" variant="ghost" size="icon" className="text-slate-400 hover:text-blue-600">
              <Paperclip className="h-5 w-5" />
            </Button>
            <Input 
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Type a message..." 
              className="flex-1 bg-slate-50 border-slate-200 focus:bg-white"
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 shadow-sm" disabled={!messageInput.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Messages;
