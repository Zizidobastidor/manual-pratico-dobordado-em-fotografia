import { motion } from "framer-motion";
import heroImage from "@/assets/hero-bordado.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-rose-soft/30 blur-3xl" />
        <div className="absolute bottom-40 right-40 w-48 h-48 rounded-full bg-gold-light/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-xl"
          >
            <p className="text-rose-deep font-body text-sm tracking-[0.2em] uppercase mb-6">
              Bordado em Fotografia
            </p>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light leading-[1.15] text-foreground mb-6 text-balance">
              Manual Prático do{" "}
              <span className="italic text-primary font-medium">
                Bordado em Fotografia
              </span>
            </h1>

            <p className="font-heading text-xl md:text-2xl text-earth-light italic mb-8">
              Estrutura Essencial — Onde memórias ganham nova vida através da linha e da agulha.
            </p>

            <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg mb-10">
              Existe uma fotografia guardada que você não olha há tempos. Talvez esteja numa gaveta, 
              talvez no celular. Mas quando você a vê… algo se move. Uma saudade. Um sorriso interrompido. 
              Um momento que merecia ter durado mais.
            </p>

            <p className="font-body text-foreground leading-relaxed text-base md:text-lg mb-10">
              E se você pudesse tocar esse momento de novo — dessa vez com suas mãos, linha e agulha — 
              e transformá-lo em arte?
            </p>

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

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={heroImage}
                alt="Bordado artístico em fotografia com flores delicadas em tons de rosa e dourado"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-gold-light/40 blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-rose-soft/30 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
