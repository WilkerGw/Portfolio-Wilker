// src/components/Projects.tsx
import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "Meu Portfólio",
    description:
      "O site que você está vendo agora, construído com as tecnologias mais modernas para web. Design responsivo e animações fluidas.",
    imageUrl: "/projects/portfolio.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "https://github.com/wilkermartins/portfolio",
    featured: true,
  },
  {
    title: "E-commerce Platform",
    description:
      "Uma plataforma de e-commerce completa com carrinho de compras, checkout seguro e painel de administração intuitivo.",
    imageUrl: "/placeholder.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
  },
  {
    title: "Task Manager App",
    description:
      "Um aplicativo elegante para gerenciamento de tarefas diárias com interface moderna e funcionalidades avançadas.",
    imageUrl: "/placeholder.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description:
      "Dashboard interativo para visualização de dados meteorológicos com gráficos em tempo real e previsões precisas.",
    imageUrl: "/placeholder.png",
    tags: ["Vue.js", "Chart.js", "API Integration"],
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
  },
  {
    title: "Social Media App",
    description:
      "Rede social moderna com funcionalidades de posts, comentários, likes e sistema de notificações em tempo real.",
    imageUrl: "/placeholder.png",
    tags: ["React Native", "Firebase", "Redux"],
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
  },
  {
    title: "Blog Platform",
    description:
      "Plataforma de blog com editor rico, sistema de categorias, comentários e otimização SEO avançada.",
    imageUrl: "/placeholder.png",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 bg-gradient-to-br from-black via-green-900 to-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
      <div className="absolute top-20 left-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-green-200 to-green-300 bg-clip-text text-transparent animate-slide-up">
            Meus Projetos
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto animate-slide-up delay-200">
            Uma coleção dos meus trabalhos mais recentes, demonstrando
            criatividade, inovação e expertise técnica em desenvolvimento web.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Featured Project */}
        <div className="mb-16 animate-slide-up delay-300">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Projeto em Destaque
          </h3>
          <div className="max-w-4xl mx-auto">
            {projectsData
              .filter((project) => project.featured)
              .map((project, index) => (
                <div key={index} className="relative group">
                  <div className="bg-gradient-to-r from-green-600/20 to-green-800/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full mb-4">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          Projeto em Destaque
                        </div>
                        <h4 className="text-3xl font-bold text-white mb-4">
                          {project.title}
                        </h4>
                        <p className="text-white/70 text-lg mb-6">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <a
                            href={project.liveUrl}
                            className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-800 text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300"
                          >
                            Ver Projeto
                          </a>
                          <a
                            href={project.repoUrl}
                            className="px-6 py-3 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                          >
                            Código Fonte
                          </a>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="aspect-video bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl border border-white/20 flex items-center justify-center">
                          <div className="text-white/50 text-center">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                              <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                />
                              </svg>
                            </div>
                            <p className="text-sm">Preview do Projeto</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="animate-slide-up delay-400">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Outros Projetos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData
              .filter((project) => !project.featured)
              .map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  tags={project.tags}
                  liveUrl={project.liveUrl}
                  repoUrl={project.repoUrl}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
