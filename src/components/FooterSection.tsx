const FooterSection = () => {
  return (
    <footer className="py-10 bg-background border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="font-heading text-lg italic text-muted-foreground mb-2">
          Manual Prático do Bordado em Fotografia
        </p>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
