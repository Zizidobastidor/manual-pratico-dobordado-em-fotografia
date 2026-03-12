import { motion } from "framer-motion";

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
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6 text-balance">
            Quem criou este{" "}
            <span className="italic text-primary">método</span>
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
                  📷 Inserir foto da Mila bordando
                </p>
              </div>
            </div>

            {/* Story content */}
            <div className="space-y-5">
              <p className="font-heading text-2xl text-foreground">
                Olá, eu sou a <span className="italic text-primary font-medium">Mila</span>.
              </p>

              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p className="bg-card/60 border border-dashed border-border rounded-lg p-4 text-sm italic">
                  ✏️ Inserir história de origem da Mila — 3 a 5 parágrafos curtos contando como
                  chegou ao bordado em fotografia, por que criou o método, e o que a move.
                </p>
              </div>

              <p className="font-body text-foreground leading-relaxed">
                Desde então, mais de{" "}
                <span className="bg-card/60 border border-dashed border-border rounded px-2 py-0.5 text-sm italic text-muted-foreground">
                  [X]
                </span>{" "}
                alunas usaram esse processo para transformar fotografias importantes em obras que
                carregam significado.
              </p>

              <p className="font-body text-foreground leading-relaxed font-medium">
                A Estrutura Essencial é tudo que aprendi — reunido para você começar com segurança e alma.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorSection;
