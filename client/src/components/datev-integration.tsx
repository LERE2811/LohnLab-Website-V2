import { RefreshCw, Shield, Calculator } from "lucide-react";

export default function DatevIntegration() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-6">Nahtlose DATEV Integration</h2>
            <p className="text-xl text-gray-600 mb-8">
              Über die API-Schnittstelle zu DATEV wird das Cockpit immer mit den aktuellen 
              Stammdaten der Mitarbeiter aktuell gehalten.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[var(--lohn-teal)] rounded-xl flex items-center justify-center">
                  <RefreshCw className="text-[var(--lohn-primary)] text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Automatische Synchronisation</h4>
                  <p className="text-gray-600">Stammdaten werden automatisch aktualisiert</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[var(--lohn-secondary)] rounded-xl flex items-center justify-center">
                  <Shield className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Sichere Datenübertragung</h4>
                  <p className="text-gray-600">Verschlüsselte Verbindung zu DATEV</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[var(--lohn-purple)] rounded-xl flex items-center justify-center">
                  <Calculator className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--lohn-primary)]">Echte Lohnberechnung</h4>
                  <p className="text-gray-600">Präzise Berechnung auf DATEV-Niveau</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="DATEV integration visualization" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
