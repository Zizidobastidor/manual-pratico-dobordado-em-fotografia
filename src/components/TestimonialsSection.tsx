import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Fernanda M.",
    text: "Eu nunca tinha bordado na vida. Comecei com uma foto da minha avó e chorei de emoção quando vi o resultado. Não é sobre técnica, é sobre sentir.",
    detail: "Iniciante, 34 anos",
  },
  {
    name: "Camila R.",
    text: "Tenho ansiedade e o bordado em fotografia se tornou minha terapia. Cada ponto me acalma. É meu momento de silêncio e criação.",
    detail: "Iniciante, 28 anos",
  },
  {
    name: "Dona Lúcia",
    text: "Achei que seria difícil demais para mim. Mas o manual explica tudo com tanta paciência que me senti acolhida. Bordei uma foto do meu neto e ele ficou emocionado.",
    detail: "Iniciante, 62 anos",
  },
  {
    name: "Juliana S.",
    text: "A aula do Transfer mudou tudo para mim. Não sabia que era possível colocar uma foto no tecido de forma tão simples. Abriu um mundo de possibilidades.",
    detail: "Iniciante, 41 anos",
  },
];

const TestimonialsSection = () => {
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
            O que dizem as{" "}
            <span className="italic text-primary">alunas iniciantes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="p-6 rounded-xl bg-card shadow-soft border border-border/50 relative"
            >
              <Quote className="w-6 h-6 text-rose-soft/50 mb-3" />
              <p className="font-body text-foreground leading-relaxed text-sm mb-4 italic">
                "{item.text}"
              </p>
              <div>
                <p className="font-heading text-base font-semibold text-foreground">
                  {item.name}
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
