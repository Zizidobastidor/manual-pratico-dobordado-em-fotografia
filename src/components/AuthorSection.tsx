import { motion } from "framer-motion";
import maeEFilha from "@/assets/mae-e-filha-juntas.png";

const AuthorSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="font-body text-lg text-primary mb-4 italic">
            💛 A vida tem a cor que a gente borda.
          </p>
          <p className="font-body text-muted-foreground mb-10">
            E as suas memórias merecem ser bordadas com alma.
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6 text-balance">
            Quem criou o método{" "}
            <span className="italic text-primary">Memoriart™</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
            {/* Photo placeholder */}
            <div className="mx-auto md:mx-0">
              <div className="w-64 h-72 rounded-2xl bg-card border-2 border-dashed border-border flex items-center justify-center shadow-soft overflow-hidden">
                <p className="font-body text-muted-foreground text-sm text-center px-4">
                  📷 Inserir foto da mãe e filha bordando
                </p>
              </div>
            </div>

            {/* Story content */}
            <div className="space-y-5">
              <p className="font-body text-foreground leading-relaxed">
                Mãe e filha juntas criamos o método{" "}
                <span className="italic text-primary font-medium">Memoriart™</span>{" "}
                — uma forma de ensinar bordado em fotografia que vai muito além da técnica.
              </p>

              <div className="space-y-3">
                <p className="font-heading text-lg text-foreground font-medium">
                  Nos últimos meses:
                </p>
                <ul className="space-y-2 font-body text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    Mais de <span className="text-foreground font-medium">1.000 mulheres</span> adquiriram nosso manual
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    Centenas de memórias foram transformadas em arte
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    Alunas que nunca haviam bordado criaram suas primeiras peças em poucas horas
                  </li>
                </ul>
              </div>

              <div className="pt-2 space-y-4">
                <p className="font-heading text-lg text-foreground font-medium">
                  Mas o mais importante?
                </p>
                <p className="font-body text-foreground leading-relaxed">
                  Não ensinamos só pontos.
                </p>
                <p className="font-body text-foreground leading-relaxed font-medium text-primary">
                  Ensinamos presença.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Ensinamos como estar com suas memórias de uma forma ativa, gentil e transformadora.
                </p>
              </div>

              <p className="font-body text-foreground leading-relaxed italic pt-4 border-t border-border">
                Ponto a ponto, a vida também pode ser remendada. 🧵
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorSection;
