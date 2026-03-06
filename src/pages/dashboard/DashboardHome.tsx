import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, ArrowUpRight, Calendar, Clock } from 'lucide-react';

const DashboardHome = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 font-display">Good morning, John! 👋</h1>
          <p className="text-slate-500">Here's what's happening in your network today.</p>
        </div>
        <Link to="/dashboard/alumni">
          <Button className="bg-blue-600 hover:bg-blue-700">Find a Mentor</Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-none shadow-md">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-blue-100 text-sm font-medium mb-1">Profile Views</p>
                <h3 className="text-3xl font-bold">128</h3>
              </div>
              <div className="bg-white/20 p-2 rounded-lg">
                <Users className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-blue-100">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span>+12% from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-500 text-sm font-medium mb-1">Job Applications</p>
                <h3 className="text-3xl font-bold text-slate-900">8</h3>
              </div>
              <div className="bg-orange-100 p-2 rounded-lg">
                <Briefcase className="h-5 w-5 text-orange-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-slate-500">
              <span className="text-green-600 font-medium mr-1">2 Interviews</span>
              <span>scheduled</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-500 text-sm font-medium mb-1">Upcoming Sessions</p>
                <h3 className="text-3xl font-bold text-slate-900">3</h3>
              </div>
              <div className="bg-purple-100 p-2 rounded-lg">
                <Calendar className="h-5 w-5 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-slate-500">
              <Clock className="h-4 w-4 mr-1 text-slate-400" />
              <span>Next: Today, 2:00 PM</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recommended Alumni */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-slate-900">Recommended Alumni</h2>
            <Link to="/dashboard/alumni" className="text-sm text-blue-600 hover:underline font-medium">View all</Link>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Sarah Miller", role: "Product Designer", company: "Airbnb", img: "bg-pink-100 text-pink-700" },
              { name: "David Chen", role: "Software Engineer", company: "Google", img: "bg-blue-100 text-blue-700" },
              { name: "Emily Zhang", role: "Data Scientist", company: "Netflix", img: "bg-red-100 text-red-700" },
              { name: "Michael Ross", role: "Product Manager", company: "Stripe", img: "bg-indigo-100 text-indigo-700" },
            ].map((person, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer border-slate-200">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg ${person.img}`}>
                    {person.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{person.name}</h3>
                    <p className="text-sm text-slate-500">{person.role} at {person.company}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-auto text-slate-400 hover:text-blue-600">
                    <ArrowUpRight className="h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Job Postings */}
          <div className="pt-4 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-slate-900">Recent Job Postings</h2>
              <Link to="/dashboard/jobs" className="text-sm text-blue-600 hover:underline font-medium">View all</Link>
            </div>
            
            <div className="space-y-4">
              {[
                { title: "Frontend Developer", company: "Vercel", location: "Remote", type: "Full-time", posted: "2d ago" },
                { title: "UX Research Intern", company: "Spotify", location: "New York, NY", type: "Internship", posted: "3d ago" },
                { title: "Associate Product Manager", company: "Linear", location: "San Francisco, CA", type: "Full-time", posted: "5d ago" },
              ].map((job, i) => (
                <Card key={i} className="hover:border-blue-200 transition-colors cursor-pointer border-slate-200">
                  <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded bg-slate-100 flex items-center justify-center">
                        <Briefcase className="h-5 w-5 text-slate-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{job.title}</h3>
                        <p className="text-sm text-slate-500">{job.company} • {job.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                        {job.type}
                      </span>
                      <span className="text-xs text-slate-400">{job.posted}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar - Mentorship Requests / Events */}
        <div className="space-y-6">
          <Card className="border-slate-200 shadow-sm h-full">
            <CardHeader>
              <CardTitle className="text-lg">Mentorship Requests</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { name: "Alex Johnson", major: "Computer Science", year: "Junior", status: "Pending" },
                { name: "Maria Garcia", major: "Business", year: "Senior", status: "Accepted" },
              ].map((req, i) => (
                <div key={i} className="flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center font-medium text-slate-600">
                    {req.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-semibold text-slate-900">{req.name}</h4>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        req.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                      }`}>
                        {req.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mb-2">{req.major} • {req.year}</p>
                    {req.status === 'Pending' && (
                      <div className="flex gap-2 mt-2">
                        <Button size="sm" className="h-7 text-xs bg-blue-600 hover:bg-blue-700">Accept</Button>
                        <Button size="sm" variant="outline" className="h-7 text-xs">Decline</Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t border-slate-100">
                <Button variant="outline" className="w-full text-sm">View all requests</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
