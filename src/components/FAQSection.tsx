import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Como vou receber o material?",
    answer:
      "É tudo digital. Assim que o pagamento for confirmado, você recebe o acesso por e-mail em poucos minutos. Sem esperar entrega, sem frete.",
  },
  {
    question: "Funciona no celular?",
    answer:
      "Sim! Todos os materiais funcionam em celular, tablet e computador. Você acessa de onde estiver, quando quiser.",
  },
  {
    question: "Preciso ter experiência em bordado?",
    answer:
      "Não precisa de nada. A Estrutura Essencial foi criada exatamente para quem está começando do zero — inclusive para quem nunca segurou uma agulha na vida.",
  },
  {
    question: "A Aula Magia do Transfer exige material especial?",
    answer:
      "Os materiais são simples e fáceis de encontrar em qualquer loja de artesanato ou online. Você não precisa gastar mais de R$30 para ter tudo que precisa.",
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer:
      "O acesso é vitalício. Você compra uma vez e o material é seu para sempre — pode acessar daqui a um ano, cinco anos, quando quiser.",
  },
  {
    question: "E se eu não gostar?",
    answer:
      "Você tem 7 dias de garantia completa. Abre, explora, começa a bordar — e se sentir que não era o que esperava, devolvemos cada centavo sem formulário, sem justificativa, sem complicação.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-4">
            Ainda tem dúvidas?
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            As perguntas que mais chegam por aqui — respondidas com carinho.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-card hover:bg-muted/50 transition-colors"
              >
                <span className="font-body font-medium text-foreground text-base pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-muted-foreground leading-relaxed px-6 py-4 border-t border-border">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
