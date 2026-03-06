import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, MapPin, Briefcase, GraduationCap, MessageSquare, UserPlus } from 'lucide-react';
import { cn } from '@/lib/utils';

const AlumniDirectory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const alumni = [
    { id: 1, name: "Sarah Miller", role: "Product Designer", company: "Airbnb", location: "San Francisco, CA", year: "2019", skills: ["UX/UI", "Figma", "Prototyping"], image: "https://i.pravatar.cc/150?u=sarah" },
    { id: 2, name: "David Chen", role: "Software Engineer", company: "Google", location: "Mountain View, CA", year: "2020", skills: ["React", "TypeScript", "Node.js"], image: "https://i.pravatar.cc/150?u=david" },
    { id: 3, name: "Emily Zhang", role: "Data Scientist", company: "Netflix", location: "Los Gatos, CA", year: "2018", skills: ["Python", "Machine Learning", "SQL"], image: "https://i.pravatar.cc/150?u=emily" },
    { id: 4, name: "Michael Ross", role: "Product Manager", company: "Stripe", location: "Remote", year: "2017", skills: ["Product Strategy", "Agile", "Roadmapping"], image: "https://i.pravatar.cc/150?u=michael" },
    { id: 5, name: "Jessica Wong", role: "Marketing Manager", company: "Spotify", location: "New York, NY", year: "2021", skills: ["Digital Marketing", "SEO", "Content Strategy"], image: "https://i.pravatar.cc/150?u=jessica" },
    { id: 6, name: "James Wilson", role: "Frontend Developer", company: "Vercel", location: "Remote", year: "2022", skills: ["Next.js", "Tailwind CSS", "React"], image: "https://i.pravatar.cc/150?u=james" },
  ];

  const filteredAlumni = alumni.filter(person => {
    const matchesSearch = person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.role.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = selectedFilter === 'All' || person.role.includes(selectedFilter) || (selectedFilter === 'Engineering' && (person.role.includes('Engineer') || person.role.includes('Developer')));

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 font-display">Alumni Directory</h1>
          <p className="text-slate-500">Connect with 1,200+ alumni from your university.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">Invite Alumni</Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input 
            placeholder="Search by name, company, or role..." 
            className="pl-10 bg-slate-50 border-slate-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          {['All', 'Engineering', 'Product', 'Design', 'Marketing', 'Data'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
                selectedFilter === filter 
                  ? "bg-blue-100 text-blue-700" 
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              )}
            >
              {filter}
            </button>
          ))}
          <Button variant="outline" size="icon" className="shrink-0">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Alumni Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAlumni.map((person) => (
          <Card key={person.id} className="overflow-hidden hover:shadow-md transition-shadow border-slate-200">
            <div className="h-24 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <CardContent className="pt-0 pb-6 px-6 relative">
              <div className="absolute -top-12 left-6">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="h-24 w-24 rounded-xl border-4 border-white shadow-sm object-cover bg-slate-200"
                />
              </div>
              <div className="mt-14 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{person.name}</h3>
                  <p className="text-slate-600 font-medium">{person.role}</p>
                  <p className="text-sm text-slate-500">{person.company}</p>
                </div>

                <div className="space-y-2 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-slate-400" />
                    <span>Class of {person.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    <span>{person.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {person.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 h-9 text-sm">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Connect
                  </Button>
                  <Button variant="outline" className="flex-1 h-9 text-sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AlumniDirectory;
