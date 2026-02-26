import { motion } from "framer-motion";
import { getCheckoutUrl } from "@/lib/utm";

const PricingSection = () => {
  return (
    <section id="oferta" className="py-24 md:py-32 gradient-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-10 text-balance">
            O valor de{" "}
            <span className="italic text-primary">transformar memórias</span>
          </h2>

          <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-card border border-border/50 mb-8">
            <p className="font-body text-muted-foreground text-sm mb-6">
              Se você adquirisse cada item separadamente:
            </p>

            <div className="space-y-2 font-body text-sm text-muted-foreground mb-6">
              <div className="flex justify-between">
                <span>Manual Prático</span>
                <span>R$ 57,00</span>
              </div>
              <div className="flex justify-between">
                <span>Mini Curso – 5 Pontos Essenciais</span>
                <span>R$ 34,90</span>
              </div>
              <div className="flex justify-between">
                <span>Álbum de Riscos Especiais</span>
                <span>R$ 27,90</span>
              </div>
              <div className="flex justify-between">
                <span>Aula: A Magia do Transfer</span>
                <span>R$ 84,00</span>
              </div>
              <div className="flex justify-between">
                <span>Galeria de Inspirações</span>
                <span>R$ 9,90</span>
              </div>
              <div className="border-t border-border pt-3 mt-4 flex justify-between font-medium text-foreground">
                <span>Total separado</span>
                <span className="line-through">R$ 213,70</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="font-body text-sm text-muted-foreground mb-2">
                Hoje, a Estrutura Essencial completa:
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="font-heading text-5xl md:text-6xl font-semibold text-primary">
                  R$ 157
                </span>
                <span className="font-heading text-2xl text-primary">,90</span>
              </div>
              <p className="font-body text-xs text-muted-foreground mt-3">
                Incluindo a aula A Magia do Transfer (R$ 84) por valor especial dentro da oferta
              </p>
            </div>

            <motion.a
              href={getCheckoutUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                const w = window as Window & { fbq?: (...args: unknown[]) => void };
                if (typeof w.fbq === "function") {
                  w.fbq("track", "InitiateCheckout");
                }
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block w-full gradient-cta text-primary-foreground font-body font-semibold 
                px-10 py-4 rounded-full shadow-cta transition-all duration-300 
                hover:opacity-95 text-base tracking-wide text-center"
            >
              Quero transformar minhas memórias em arte
            </motion.a>

            <p className="font-body text-xs text-muted-foreground mt-4">
              Acesso imediato após confirmação do pagamento
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
