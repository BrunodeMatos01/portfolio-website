"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { GraduationCap, BookOpen, Award } from "lucide-react"

export function ExperienceSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const experiences = [
    {
      icon: GraduationCap,
      title: "Desenvolvimento de Sistemas",
      organization: "Senai",
      period: "02/2024 - 12/2025",
      description:
        "Curso de Desenvolvimento de Sistemas, com formação em Frontend, Backend e banco de dados SQL.",
    },
    {
      icon: BookOpen,
      title: "+Devs2Blu",
      organization: "BluSoft",
      period: "09/2024 - 05/2025",
      description: "Curso +Devs2Blu com carga de 480 horas, onde aprendemos a fundo tudo sobre (FrontEnd, BackEnd, Banco de Dados, Git, Scrum, Arquitetura, Docker) e Gestão de Gerenciamento",
    },
  ]

  return (
    <section id="experiencia" className="py-20 px-4 bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Formação & Estudos</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Minha trajetória educacional e cursos relevantes na área de tecnologia
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 w-full">
                  <Card className="p-6 bg-card hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <experience.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
                        <p className="text-primary text-sm mb-2">{experience.organization}</p>
                        <p className="text-xs text-muted-foreground mb-3">{experience.period}</p>
                        <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block relative">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background" />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
