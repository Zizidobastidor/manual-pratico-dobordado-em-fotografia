import { motion } from "framer-motion";
import bordadoProcesso from "@/assets/bordado-processo.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const WhatIsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* SEO content block */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto mb-20 font-body text-muted-foreground leading-relaxed text-base md:text-lg text-center"
        >
          <p>
            Se você está procurando <strong>como bordar em fotografia</strong>, este manual foi criado exatamente para isso. 
            Aqui você aprende a técnica de bordado em foto de forma estruturada, entendendo como bordar sobre foto impressa 
            com segurança e intenção artística. O objetivo não é apenas ensinar pontos, mas mostrar como transformar foto em 
            bordado com significado.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-2xl overflow-hidden shadow-card"
          >
            <img
              src={bordadoProcesso}
              alt="Processo de bordado em fotografia com flores coloridas"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 text-balance">
              O que é{" "}
              <span className="italic text-primary">Bordado em Fotografia</span>?
            </h2>

            <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
              <p>
                É dar relevo ao que se sente. É pegar uma imagem impressa — um rosto, uma paisagem, 
                um instante — e bordar sobre ela com linha, cor e textura.
              </p>
              <p>
                Não é sobre perfeição técnica. É sobre presença. Cada ponto que você dá é um gesto 
                de cuidado com uma memória que importa para você.
              </p>
              <p className="text-foreground font-medium">
                Você não precisa ter experiência com bordado. Não precisa saber desenhar. 
                Não precisa de materiais caros.
              </p>
              <p>
                Precisa apenas de uma fotografia que faça seu coração bater diferente — 
                e da vontade de transformá-la em algo que só você poderia criar.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
