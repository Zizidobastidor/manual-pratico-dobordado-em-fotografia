import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fascinations = [
  "Como preparar sua fotografia para o bordado sem risco de estragar — o passo que muda tudo antes da primeira agulhada",
  "Os 5 pontos que aparecem em quase todos os bordados da Mila — ensinados em VÍDEO com a mão bordando na sua frente",
  "O segredo do gel transfer: como criar uma cópia da sua fotografia no tecido e bordar sem tocar na foto original",
  "Por que escolher a fotografia errada é o primeiro erro de quem começa — e como escolher a certa",
  "O que fazer quando a mão trava na hora de dar o primeiro ponto (não é falta de técnica)",
  "Como os riscos especiais eliminam o medo de errar: você só segue o caminho",
  "A diferença entre bordar \"em cima de\" uma fotografia e bordar \"em diálogo com\" ela — e por que isso muda o resultado",
];

const FascinationsSection = () => {
  return (
    <section className="py-24 md:py-32 gradient-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6 text-balance">
            Dentro da Estrutura Essencial{" "}
            <span className="italic text-primary">você vai descobrir:</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-5">
          {fascinations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-start gap-4"
            >
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <p className="font-body text-foreground leading-relaxed">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FascinationsSection;
