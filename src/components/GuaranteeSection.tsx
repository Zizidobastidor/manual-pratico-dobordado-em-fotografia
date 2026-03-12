import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-secondary/50 border border-border/50 rounded-2xl p-8 md:p-10 text-center">
            <ShieldCheck className="w-10 h-10 text-accent mx-auto mb-4" />

            <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground mb-6">
              Garantia de 7 dias —{" "}
              <span className="italic text-primary">sem perguntas.</span>
            </h3>

            <div className="space-y-4 font-body text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                Se em 7 dias você abrir a Estrutura Essencial e sentir que não era o que esperava,
                devolvemos cada centavo. Sem formulário complicado. Sem justificativa necessária.
              </p>
              <p className="text-foreground font-medium">
                Abra, explore, comece a bordar — sem risco nenhum.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
