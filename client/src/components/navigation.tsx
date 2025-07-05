import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-[var(--lohn-primary)]">
              LöhnLab
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('steuerberater')}
              className="text-gray-700 hover:text-[var(--lohn-primary)] transition-colors font-medium"
            >
              Für Steuerberater
            </button>
            <button 
              onClick={() => scrollToSection('unternehmen')}
              className="text-gray-700 hover:text-[var(--lohn-primary)] transition-colors font-medium"
            >
              Für Unternehmen
            </button>
            <button 
              onClick={() => scrollToSection('roadmap')}
              className="text-gray-700 hover:text-[var(--lohn-primary)] transition-colors font-medium"
            >
              Entwicklung
            </button>
            <Button 
              onClick={() => scrollToSection('kontakt')}
              className="bg-[var(--lohn-primary)] text-white hover:bg-[var(--lohn-secondary)] transition-colors rounded-full"
            >
              Kontakt
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('steuerberater')}
                className="text-gray-700 hover:text-[var(--lohn-primary)] transition-colors font-medium text-left"
              >
                Für Steuerberater
              </button>
              <button 
                onClick={() => scrollToSection('unternehmen')}
                className="text-gray-700 hover:text-[var(--lohn-primary)] transition-colors font-medium text-left"
              >
                Für Unternehmen
              </button>
              <button 
                onClick={() => scrollToSection('roadmap')}
                className="text-gray-700 hover:text-[var(--lohn-primary)] transition-colors font-medium text-left"
              >
                Entwicklung
              </button>
              <Button 
                onClick={() => scrollToSection('kontakt')}
                className="bg-[var(--lohn-primary)] text-white hover:bg-[var(--lohn-secondary)] transition-colors rounded-full w-fit"
              >
                Kontakt
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
