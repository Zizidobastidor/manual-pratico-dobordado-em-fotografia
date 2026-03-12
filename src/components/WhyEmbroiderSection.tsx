import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import fotoPaiCavalete from "@/assets/foto-pai-cavalete.png";

const WhyEmbroiderSection = () => {
  return (
    <section className="py-24 md:py-32 gradient-warm">
      {/* Image banner before content */}
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <img
            src={fotoPaiCavalete}
            alt="Fotografia bordada em cavalete — bordado em fotografia com flores coloridas"
            className="w-full rounded-2xl shadow-soft"
          />
        </motion.div>
      </div>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Eye className="w-7 h-7 text-primary" />
            </div>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-10 text-center text-balance">
            Por que bordar uma fotografia{" "}
            <span className="italic text-primary">muda a forma como você enxerga</span>{" "}
            suas memórias?
          </h2>

          <div className="space-y-6 font-body text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
            <p>
              Uma foto no celular dura segundos no seu olhar. Você desliza, segue em frente. 
              Mas quando você imprime essa foto e começa a bordar sobre ela, algo muda.
            </p>
            <p>
              Você desacelera. Olha com atenção para cada detalhe. Escolhe as cores que traduzem 
              o que aquele momento significa para você. Cada ponto é uma pausa. Cada linha, 
              um fio de conexão com o que você sente.
            </p>
            <p className="text-foreground font-medium text-lg">
              Bordar uma fotografia é um ato de presença. 
              É dizer: "isso importa para mim".
            </p>
            <p>
              Quando você termina, a foto não é mais apenas uma imagem. 
              É uma peça de arte — feita pelas suas mãos, com o seu coração.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyEmbroiderSection;
