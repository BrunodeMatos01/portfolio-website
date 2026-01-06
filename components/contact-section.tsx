"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const contactInfo = [
    { icon: Mail, label: "Email", value: "brunodematos3@gmail.com", href: "mailto:brunodematos3@gmail.com" },
    { icon: Phone, label: "Telefone", value: "+55 (47) 98852-5262", href: "tel:+5547988525262" },
    { icon: MapPin, label: "Localização", value: "Blumenau, SC", href: null },
  ]

  return (
    <section id="contato" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou disponível para novos projetos e oportunidades. Vamos conversar!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Informações de Contato</h3>
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-4 bg-card hover:bg-accent transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-foreground font-medium hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
