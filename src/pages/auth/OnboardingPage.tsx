import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Check, Briefcase, GraduationCap, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      navigate('/dashboard');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-lg border-slate-200">
        <div className="w-full bg-slate-100 h-2 rounded-t-xl overflow-hidden">
          <div 
            className="h-full bg-blue-600 transition-all duration-500 ease-in-out"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
        
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                    step >= i ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-500"
                  )}>
                    {step > i ? <Check className="h-4 w-4" /> : i}
                  </div>
                  {i < 3 && (
                    <div className={cn(
                      "w-12 h-0.5 mx-2 transition-colors",
                      step > i ? "bg-blue-600" : "bg-slate-200"
                    )}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">
            {step === 1 && "Complete your profile"}
            {step === 2 && "Professional details"}
            {step === 3 && "What are you looking for?"}
          </CardTitle>
          <p className="text-slate-500">
            {step === 1 && "Let's get to know you better"}
            {step === 2 && "Tell us about your experience"}
            {step === 3 && "Select your interests to personalize your feed"}
          </p>
        </CardHeader>

        <CardContent className="py-6">
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex flex-col items-center">
                <div className="relative group cursor-pointer">
                  <div className="w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center border-2 border-dashed border-slate-300 hover:border-blue-500 transition-colors">
                    <User className="h-12 w-12 text-slate-400" />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full text-white shadow-md">
                    <Camera className="h-4 w-4" />
                  </div>
                </div>
                <p className="text-sm text-slate-500 mt-2">Upload a profile photo</p>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Bio</label>
                <textarea 
                  className="w-full min-h-[100px] rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Tell us a bit about yourself..."
                ></textarea>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Current Role</label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input className="pl-9" placeholder="Software Engineer, Product Manager, etc." />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Company / Organization</label>
                <Input placeholder="Google, Microsoft, Startup Inc." />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Skills</label>
                <Input placeholder="React, Python, Marketing (comma separated)" />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Mentorship", "Networking", "Job Opportunities", 
                "Mock Interviews", "Resume Review", "Career Advice",
                "Startup Advice", "Research Collaboration"
              ].map((interest) => (
                <div 
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={cn(
                    "p-4 rounded-lg border cursor-pointer transition-all flex items-center justify-between",
                    selectedInterests.includes(interest) 
                      ? "border-blue-600 bg-blue-50 text-blue-700" 
                      : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                  )}
                >
                  <span className="font-medium">{interest}</span>
                  {selectedInterests.includes(interest) && <CheckCircle2 className="h-5 w-5 text-blue-600" />}
                </div>
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter className="flex justify-between border-t border-slate-100 pt-6">
          <Button 
            variant="outline" 
            onClick={handleBack}
            disabled={step === 1}
            className={step === 1 ? "invisible" : ""}
          >
            Back
          </Button>
          <Button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 min-w-[100px]">
            {step === 3 ? "Finish" : "Next"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

// Helper component for the check icon
function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export default OnboardingPage;
