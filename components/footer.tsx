export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              {new Date().getFullYear()} <span className="text-foreground font-semibold">Bruno de Matos</span>.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#projetos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Projetos
            </a>
            <a href="#contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
