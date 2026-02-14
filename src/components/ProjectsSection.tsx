import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";

type Filter = "all" | "flutter" | "web";

const ProjectsSection = () => {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "ALL" },
    { key: "flutter", label: "FLUTTER" },
    { key: "web", label: "WEB" },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-display neon-text-pink text-center mb-4"
        >
          PROJECTS
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="w-24 h-0.5 bg-primary mx-auto mb-12"
          style={{ boxShadow: "0 0 10px hsl(326 100% 70%)" }}
        />

        {/* Filter buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`font-heading text-xs tracking-widest px-4 py-2 border rounded-sm transition-all duration-300 ${
                filter === f.key
                  ? "border-primary bg-primary/10 text-primary neon-border-pink"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="retro-card group cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative h-40 mb-4 overflow-hidden rounded-sm bg-muted border border-border">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <span className="font-display text-xs text-muted-foreground">{project.category.toUpperCase()}</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                </div>

                <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:neon-text-pink transition-all duration-300">
                  {project.title}
                </h3>

                <p className="font-mono-retro text-xs text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono-retro text-[10px] px-2 py-1 border border-secondary/30 text-secondary/70 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-1 font-mono-retro text-xs text-primary hover:neon-text-pink transition-all"
                    >
                      <ExternalLink size={12} /> Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1 font-mono-retro text-xs text-secondary hover:neon-text-blue transition-all"
                    >
                      <Github size={12} /> Code
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
