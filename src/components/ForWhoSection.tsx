import { motion } from "framer-motion";
import { Heart, Sparkles, Camera, Palette } from "lucide-react";
import bordadoFotografia1 from "@/assets/bordado-em-fotografia-1.png";

const audiences = [
  {
    icon: Heart,
    text: "Para quem nunca bordou e quer começar com segurança, sem medo de errar",
  },
  {
    icon: Sparkles,
    text: "Para quem busca um processo criativo com significado e propósito",
  },
  {
    icon: Camera,
    text: "Para quem quer transformar fotos em arte autoral e única",
  },
  {
    icon: Palette,
    text: "Para quem quer aprender técnica de forma acolhedora e passo a passo",
  },
];

const ForWhoSection = () => {
  return (
    <section className="py-24 md:py-32 gradient-warm">
      {/* Image banner */}
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <img
            src={bordadoFotografia1}
            alt="Mãos bordando flores coloridas em fotografia no bastidor"
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
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6 text-balance">
            Para quem é a{" "}
            <span className="italic text-primary">Estrutura Essencial</span>?
          </h2>
          <p className="font-body text-muted-foreground">
            Se você se reconhece em pelo menos uma dessas descrições, este manual foi feito para você.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex items-start gap-4 p-6 rounded-xl bg-background/80 shadow-card backdrop-blur-sm"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-body text-foreground leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
