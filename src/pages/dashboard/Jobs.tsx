import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Briefcase, Filter, Building2, Clock, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Vercel", location: "Remote", type: "Full-time", salary: "$120k - $160k", posted: "2d ago", logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" },
    { id: 2, title: "Product Designer", company: "Airbnb", location: "San Francisco, CA", type: "Full-time", salary: "$140k - $180k", posted: "1d ago", logo: "https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png" },
    { id: 3, title: "Software Engineer Intern", company: "Google", location: "Mountain View, CA", type: "Internship", salary: "$50/hr", posted: "3d ago", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" },
    { id: 4, title: "Data Scientist", company: "Netflix", location: "Los Gatos, CA", type: "Full-time", salary: "$150k - $200k", posted: "5d ago", logo: "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png" },
    { id: 5, title: "Marketing Manager", company: "Spotify", location: "New York, NY", type: "Full-time", salary: "$110k - $150k", posted: "1w ago", logo: "https://open.scdn.co/cdn/images/favicon.0f31d2ea.ico" },
  ];

  const filteredJobs = jobs.filter(job => 
    (selectedType === 'All' || job.type === selectedType) &&
    (job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 font-display">Job Board</h1>
          <p className="text-slate-500">Find your next opportunity from alumni-referred roles.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">Post a Job</Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input 
            placeholder="Search jobs, companies, or keywords..." 
            className="pl-10 bg-slate-50 border-slate-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          {['All', 'Full-time', 'Part-time', 'Internship', 'Contract'].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
                selectedType === type 
                  ? "bg-blue-100 text-blue-700" 
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              )}
            >
              {type}
            </button>
          ))}
          <Button variant="outline" size="icon" className="shrink-0">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Job List */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="hover:border-blue-200 transition-all cursor-pointer border-slate-200 group">
            <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="h-16 w-16 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 shrink-0">
                <img src={job.logo} alt={job.company} className="h-full w-full object-contain" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                  {job.posted.includes('d ago') && parseInt(job.posted) <= 3 && (
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      New
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-slate-600 font-medium mb-2">
                  <Building2 className="h-4 w-4 text-slate-400" />
                  {job.company}
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="h-3.5 w-3.5" />
                    {job.type}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <DollarSign className="h-3.5 w-3.5" />
                    {job.salary}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {job.posted}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0">
                <Button variant="outline" className="w-full sm:w-auto">Save</Button>
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">Apply Now</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
