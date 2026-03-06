import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, GraduationCap, Link as LinkIcon, Mail, Edit, Share2, Calendar } from 'lucide-react';

const Profile = () => {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="relative mb-20">
        <div className="h-48 w-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl"></div>
        <div className="absolute -bottom-16 left-8 flex items-end">
          <div className="h-32 w-32 rounded-full border-4 border-white bg-white shadow-md overflow-hidden">
            <img src="https://i.pravatar.cc/300?u=john" alt="Profile" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <Button variant="secondary" size="sm" className="bg-white/90 hover:bg-white text-slate-900 shadow-sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share Profile
          </Button>
          <Button variant="secondary" size="sm" className="bg-white/90 hover:bg-white text-slate-900 shadow-sm">
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
        {/* Left Column - Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 font-display">John Doe</h1>
            <p className="text-lg text-slate-600 font-medium">Software Engineer at Tech Corp</p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                San Francisco, CA
              </div>
              <div className="flex items-center gap-1.5">
                <Briefcase className="h-4 w-4" />
                Tech Corp
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4" />
                Stanford University '24
              </div>
              <div className="flex items-center gap-1.5 text-blue-600 hover:underline cursor-pointer">
                <LinkIcon className="h-4 w-4" />
                linkedin.com/in/johndoe
              </div>
            </div>
          </div>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                Passionate software engineer with a focus on building scalable web applications. 
                I love solving complex problems and learning new technologies. 
                Currently working on improving the developer experience at Tech Corp.
                Open to mentorship opportunities and connecting with fellow alumni.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { role: "Software Engineer", company: "Tech Corp", period: "2024 - Present", description: "Developing frontend features for the main dashboard using React and TypeScript." },
                { role: "Software Engineering Intern", company: "Google", period: "Summer 2023", description: "Worked on the Google Cloud team to optimize API performance." },
              ].map((exp, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <div className="h-10 w-10 rounded bg-slate-100 flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-slate-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{exp.role}</h3>
                    <p className="text-sm text-slate-600">{exp.company}</p>
                    <p className="text-xs text-slate-400 mb-2">{exp.period}</p>
                    <p className="text-sm text-slate-600">{exp.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="h-10 w-10 rounded bg-slate-100 flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-slate-500" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Stanford University</h3>
                  <p className="text-sm text-slate-600">Bachelor of Science in Computer Science</p>
                  <p className="text-xs text-slate-400">2020 - 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", "Python", "AWS", "GraphQL", "Tailwind CSS"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Mail className="h-4 w-4 text-slate-400" />
                john.doe@example.com
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <LinkIcon className="h-4 w-4 text-slate-400" />
                github.com/johndoe
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Calendar className="h-4 w-4 text-slate-400" />
                Joined September 2020
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
