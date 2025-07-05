import { Euro, Wallet, TrendingUp } from "lucide-react";

export default function CalculationModes() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-[var(--lohn-light)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lohn-primary)] mb-4">Drei Berechnungsmodi für jeden Bedarf</h2>
          <p className="text-xl text-gray-600">Exakte Lohnberechnung auf DATEV-Niveau mit echtem hinterlegten Lohnprogramm</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-[var(--lohn-secondary)] rounded-2xl flex items-center justify-center mb-6">
              <Euro className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">Brutto-Modus</h3>
            <p className="text-gray-600 mb-6">Klassische Bruttogehalt-Berechnung für bekannte Szenarien und Standardverhandlungen.</p>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-600"><strong>Beispiel:</strong> Bruttogehalt von 4.000€ → Nettoauszahlung berechnen</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-[var(--lohn-teal)]">
            <div className="w-16 h-16 bg-[var(--lohn-teal)] rounded-2xl flex items-center justify-center mb-6">
              <Wallet className="text-[var(--lohn-primary)] text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">
              Netto-Modus <span className="text-[var(--lohn-teal)] text-sm font-normal">(Empfohlen)</span>
            </h3>
            <p className="text-gray-600 mb-6">Der entscheidende Wert der nach Steuern und Abzügen wirklich beim Mitarbeiter ankommt.</p>
            <div className="bg-[var(--lohn-teal)]/10 rounded-xl p-4">
              <p className="text-sm text-[var(--lohn-primary)]"><strong>Vorteil:</strong> Mitarbeiter weiß genau, was am Ende auf dem Konto landet</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-[var(--lohn-purple)] rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-[var(--lohn-primary)] mb-4">Lohnkosten-Modus</h3>
            <p className="text-gray-600 mb-6">Arbeitgeber kann exakt sein Budget angeben und hat verlässliches Kostencontrolling.</p>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-600"><strong>Beispiel:</strong> Budget 5.500€ → optimale Aufteilung berechnen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
