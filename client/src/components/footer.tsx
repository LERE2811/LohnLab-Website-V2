import { Linkedin } from "lucide-react";
import { SiXing } from "react-icons/si";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[var(--lohn-primary)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">LöhnLab</div>
            <p className="text-blue-100 mb-4">
              LohnLab Cockpit - Die moderne Lohnoptimierungslösung für Steuerberater und Unternehmen. 
              Mehr Service, weniger Aufwand.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-white w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Xing"
              >
                <SiXing className="text-white w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Produkt</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="hover:text-white transition-colors text-left"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('roadmap')}
                  className="hover:text-white transition-colors text-left"
                >
                  Roadmap
                </button>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Preise</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#" className="hover:text-white transition-colors">Über uns</a></li>
              <li>
                <button 
                  onClick={() => scrollToSection('kontakt')}
                  className="hover:text-white transition-colors text-left"
                >
                  Kontakt
                </button>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; 2024 LohnLab GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
