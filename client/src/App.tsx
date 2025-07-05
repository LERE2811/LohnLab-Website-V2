import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Unternehmen from "@/pages/unternehmen";
import Lohnerhoehung from "@/pages/lohnerhoehung";
import Lohnoptimierung from "@/pages/lohnoptimierung";
import Neueinstellungen from "@/pages/neueinstellungen";
import Kontakt from "@/pages/kontakt";
import FAQ from "@/pages/faq";
import Impressum from "@/pages/impressum";
import Datenschutz from "@/pages/datenschutz";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/unternehmen" component={Unternehmen} />
      <Route path="/loesungen/lohnerhoehung" component={Lohnerhoehung} />
      <Route path="/loesungen/lohnoptimierung" component={Lohnoptimierung} />
      <Route path="/loesungen/neueinstellungen" component={Neueinstellungen} />
      <Route path="/lohnoptimierung" component={Lohnoptimierung} />
      <Route path="/kontakt" component={Kontakt} />
      <Route path="/faq" component={FAQ} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/datenschutz" component={Datenschutz} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
