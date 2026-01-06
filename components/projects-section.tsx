"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const projects = [
    {
      title: "Site para Empresa da Industria Têxtil",
      description:
        "Site cirado com o intiuito de mostrar o catálogo da empresa e receber orçamentos por email.",
      image: "/Site de industria.png",
      technologies: ["HTML", "CSS", "JS", "EMAILJS"],
      liveUrl: "https://www.texportimportacao.com/",
      githubUrl: "https://www.texportimportacao.com/",
    },
    {
      title: "Landing Page para Marketing Digital",
      description: "Landing Page criada com o intuito de aumentar o reconhecimetno da agência de Marketing.",
      image: "/Site para marketing Digital.png",
      technologies: ["HTML", "CSS", "JS", "EMAILJS"],
      liveUrl: "https://goaspekto.com.br/",
      githubUrl: "https://goaspekto.com.br/",
    },
    {
      title: "Site para Empresa de Uniformes",
      description: "Site cirado com o intuito de alcançar maior púplico e aumento de vendas.",
      image: "/Site para Uniformes.png",
      technologies: ["HTML", "CSS", "JS", "EMAILJS"],
      liveUrl: "https://wvuniformes.com.br/",
      githubUrl: "https://wvuniformes.com.br/",
    },
    {
      title: "Estoque inteligente",
      description: "Projeto feito em equipe com banco de Dados. Obejtivo: Montar um sistema que capacitdava o dono de um espaço comercial a gerenciar seu estoque de forma eficiente.",
      image: "/Estoque inteligente.png",
      technologies: ["Angular", "C#", "MYSQL"],
      liveUrl: "https://github.com/BrunodeMatos01/Projeto-03",
      githubUrl: "https://github.com/BrunodeMatos01/Projeto-03",
    },
    {
      title: "Gerenciamento de Funcionários",
      description: "Projeto individual. Obejtivo: Montar um sistema de gerenciamento de funcionários para uma pequena empresa.",
      image: "/Gerenciamento de Funcionarios.png",
      technologies: ["Java", "MYSQL", "JDBC",],
      liveUrl: "https://github.com/BrunodeMatos01/ProvaPratica01",
      githubUrl: "https://github.com/BrunodeMatos01/ProvaPratica01",
    },
    {
      title: "Calculadora Financeira",
      description: "Projeto em equipe utilizando C# e GitBash para controle de versão e colaboração. Obejtivo: montar uma calculadora financeira interativa.",
      image: "/financial-calculator.jpg",
      technologies: ["C#", "Git", "BitBash"],
      liveUrl: "https://github.com/BrunodeMatos01/superCalculadora",
      githubUrl: "https://github.com/BrunodeMatos01/superCalculadora",
    },
  ]

  return (
    <section id="projetos" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meus Projetos</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi durante minha jornada de aprendizado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-card group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="default" asChild className="flex-1">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Projeto
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
