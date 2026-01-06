"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Code, Lightbulb, Target } from "lucide-react"

export function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const features = [
    {
      icon: Code,
      title: "Desenvolvimento Frontend",
      description: "Especializado em criar interfaces modernas e responsivas",
    },
    {
      icon: Lightbulb,
      title: "Desenvolvimento Backend",
      description: "Lógica de sistemas, regras de negócio e banco de dados bem estruturados",
    },
    {
      icon: Target,
      title: "Foco em Qualidade",
      description: "Código limpo, padronizado e fácil de manter",
    },
  ]

  return (
    <section id="sobre" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Sou estudante de <span className="text-foreground font-semibold">Desenvolvimento de Sistemas</span>,
              apaixonado por tecnologia e inovação. Desenvolvi alguns projetos BackEnd/FrontEnd, entre eles 3 sites para empresas onde ganhei muita experiência com o desenvolvimento frontend, desenvolvi experiências digitais intuitivas e visualmente atraentes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Ao longo da minha jornada acadêmica, venho estudando e praticando diversas tecnologias modernas como{" "}
              <span className="text-foreground font-semibold">C#, JAVA, ANGULAR, HTML, CSS, JavaScript, SQL</span> e frameworks populares.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Estou sempre em busca de <span className="text-foreground font-semibold">novos desafios e oportunidades para aprender</span> e crescer profissionalmente na área de tecnologia da informação.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-6"
          >
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-card hover:bg-accent transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
