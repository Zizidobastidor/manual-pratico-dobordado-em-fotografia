import { motion } from "framer-motion";
import { Check } from "lucide-react";

const objections = [
  {
    title: "Não sei bordar",
    answer:
      "Esse manual foi criado especialmente para quem nunca bordou. Cada ponto é explicado com calma, clareza e carinho.",
  },
  {
    title: "Não tenho materiais caros",
    answer:
      "Você começa com uma agulha, linha e uma foto impressa. Sem investimentos grandes, sem lista complicada.",
  },
  {
    title: "Não sei desenhar",
    answer:
      "O Álbum de Riscos Especiais traz desenhos prontos para você aplicar. Sem necessidade de talento para desenho.",
  },
  {
    title: "Tenho medo de errar",
    answer:
      "A imperfeição faz parte da arte. Cada ponto \"errado\" é um traço único da sua história. O processo é mais importante que o resultado.",
  },
];

const ObjectionsSection = () => {
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
            Talvez você esteja pensando...
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6">
          {objections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card shadow-soft border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-heading text-lg font-semibold text-foreground mb-2 italic">
                    "{item.title}"
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed text-sm">
                    {item.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
