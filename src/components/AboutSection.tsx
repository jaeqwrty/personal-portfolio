import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="mb-4"
  >
    <div className="flex justify-between mb-1">
      <span className="font-mono-retro text-xs text-foreground">{name}</span>
      <span className="font-mono-retro text-xs text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 bg-muted rounded-sm overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
        className="h-full rounded-sm"
        style={{
          background: `linear-gradient(90deg, hsl(326 100% 70%), hsl(186 100% 50%))`,
          boxShadow: "0 0 8px hsl(326 100% 70% / 0.5)",
        }}
      />
    </div>
  </motion.div>
);

const AboutSection = () => {
  const categories = [
    { key: "mobile", label: "Mobile" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "tools", label: "Tools" },
  ] as const;

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-display neon-text-blue text-center mb-4"
        >
          ABOUT.EXE
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="w-24 h-0.5 bg-secondary mx-auto mb-12"
          style={{ boxShadow: "0 0 10px hsl(186 100% 50%)" }}
        />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="retro-card">
              <p className="font-mono-retro text-sm text-secondary mb-2">{'> cat about.txt'}</p>
              <p className="font-heading text-sm leading-relaxed text-foreground/80 mb-4">
                I'm a passionate developer specializing in Flutter mobile apps and modern web applications. 
                With a love for clean code and pixel-perfect design, I build experiences that are both 
                beautiful and performant.
              </p>
              <p className="font-heading text-sm leading-relaxed text-foreground/80 mb-4">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or diving into retro gaming culture.
              </p>
              <p className="font-mono-retro text-xs text-primary animate-pulse">{'> _'}</p>
            </div>
          </motion.div>

          <div>
            {categories.map((cat) => (
              <div key={cat.key} className="mb-6">
                <h3 className="font-heading text-xs uppercase tracking-widest text-primary mb-3">
                  {cat.label}
                </h3>
                {skills
                  .filter((s) => s.category === cat.key)
                  .map((skill, i) => (
                    <SkillBar key={skill.name} {...skill} index={i} />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
