import { motion } from "framer-motion";
import { BookOpen, Play, Image, Wand2, GalleryHorizontalEnd } from "lucide-react";
import manualPratico from "@/assets/manual-pratico.png";
import miniCurso from "@/assets/mini-curso-5-pontos.png";
import albumRiscos from "@/assets/album-riscos.png";

const items = [
  {
    icon: BookOpen,
    title: "Manual Prático Completo",
    description:
      "Passo a passo técnico detalhado + fundamentos criativos para você bordar com confiança, mesmo que nunca tenha pego uma agulha.",
    value: "R$ 57,00",
    image: manualPratico,
    imageAlt: "Manual Prático do Bordado em Fotografia",
  },
  {
    icon: Play,
    title: "Mini Curso: Os 5 Pontos Essenciais",
    description:
      "Aprenda os cinco pontos fundamentais para bordar em fotografia. Videoaulas práticas e objetivas, pensadas para iniciantes.",
    value: "R$ 34,90",
    image: miniCurso,
    imageAlt: "Os 5 Melhores Pontos para Bordar em Fotografia",
  },
  {
    icon: Image,
    title: "Álbum de Riscos Especiais",
    description:
      "Desenhos e riscos prontos para você aplicar diretamente sobre suas fotos, sem precisar saber desenhar.",
    value: "R$ 27,90",
    image: albumRiscos,
    imageAlt: "Álbum de Riscos para Bordar em Fotografia",
  },
  {
    icon: Wand2,
    title: "Aula: A Magia do Transfer",
    description:
      "Descubra como transferir qualquer fotografia do papel para o tecido. Uma técnica essencial que abre possibilidades infinitas.",
    value: "R$ 84,00",
  },
  {
    icon: GalleryHorizontalEnd,
    title: "Galeria de Inspirações",
    description:
      "Bônus criativo com referências visuais para despertar ideias e nutrir o seu olhar artístico.",
    value: "R$ 9,90",
  },
];

const WhatYouGetSection = () => {
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
            O que você recebe na{" "}
            <span className="italic text-primary">Estrutura Essencial</span>
          </h2>
          <p className="font-body text-muted-foreground">
            Tudo o que você precisa para dar os primeiros passos com segurança e beleza.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, index) => (
            <div key={index}>
              {item.image && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mb-4"
                >
                  <img
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    className="w-full rounded-2xl shadow-soft"
                  />
                </motion.div>
              )}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-5 p-6 rounded-xl bg-card shadow-soft border border-border/50"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <span className="text-sm font-body text-muted-foreground whitespace-nowrap line-through">
                      {item.value}
                    </span>
                  </div>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
