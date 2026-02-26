import { motion } from "framer-motion";
import bordadoResultado from "@/assets/bordado-resultado-new.webp";

const ClosingSection = () => {
  return (
    <section className="py-24 md:py-32 gradient-warm">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-card order-2 lg:order-1"
          >
            <img
              src={bordadoResultado}
              alt="Resultado final de bordado em fotografia com rosas delicadas"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 text-balance">
              Você não está comprando{" "}
              <span className="italic text-primary">um PDF</span>
            </h2>

            <div className="space-y-5 font-body text-muted-foreground leading-relaxed mb-10">
              <p>
                Você está abrindo uma nova forma de olhar para suas memórias.
              </p>
              <p>
                Está dando às suas mãos a chance de criar algo que nenhuma impressora, 
                nenhum filtro, nenhuma inteligência artificial pode reproduzir.
              </p>
              <p className="text-foreground font-medium text-lg">
                Algo que é só seu. Feito por você. Com o que você sente.
              </p>
              <p>
                Essa é a essência do bordado em fotografia: transformar o que já existe 
                em algo que nunca existiu antes.
              </p>
            </div>

            <motion.a
              href="#oferta"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block gradient-cta text-primary-foreground font-body font-semibold 
                px-10 py-4 rounded-full shadow-cta transition-all duration-300 
                hover:opacity-95 text-base tracking-wide"
            >
              Quero transformar minhas memórias em arte
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
