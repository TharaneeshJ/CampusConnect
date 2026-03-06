import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, MessageSquare, UserPlus, Briefcase, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const Notifications = () => {
  const notifications = [
    { id: 1, type: 'message', title: 'New message from Sarah Miller', time: '10 min ago', read: false, icon: MessageSquare, color: 'text-blue-600 bg-blue-100' },
    { id: 2, type: 'connection', title: 'David Chen sent you a connection request', time: '1 hour ago', read: false, icon: UserPlus, color: 'text-green-600 bg-green-100' },
    { id: 3, type: 'job', title: 'New job posting: Product Designer at Airbnb', time: '2 hours ago', read: true, icon: Briefcase, color: 'text-purple-600 bg-purple-100' },
    { id: 4, type: 'system', title: 'Your profile is 80% complete', time: '1 day ago', read: true, icon: CheckCircle2, color: 'text-orange-600 bg-orange-100' },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900 font-display">Notifications</h1>
        <Button variant="ghost" className="text-sm text-blue-600 hover:text-blue-700">Mark all as read</Button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card key={notification.id} className={cn("border-slate-200 shadow-sm transition-colors", !notification.read ? "bg-blue-50/50 border-blue-100" : "bg-white")}>
            <CardContent className="p-4 flex gap-4 items-start">
              <div className={cn("h-10 w-10 rounded-full flex items-center justify-center shrink-0", notification.color)}>
                <notification.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className={cn("text-sm font-medium", !notification.read ? "text-slate-900" : "text-slate-600")}>
                  {notification.title}
                </p>
                <p className="text-xs text-slate-400 mt-1">{notification.time}</p>
                {notification.type === 'connection' && (
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 h-8 text-xs">Accept</Button>
                    <Button size="sm" variant="outline" className="h-8 text-xs">Decline</Button>
                  </div>
                )}
              </div>
              {!notification.read && (
                <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
