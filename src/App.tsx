import React from 'react';
import { Bot, MessageSquare, Cpu, Code, ChevronRight, Github, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-dark font-roboto">
      {/* Hero Section */}
      <header className="container mx-auto px-2 py-16 md:py-24">
        <nav className="flex justify-between items-center mb-16 h-5">
          <img src='/logo.png' alt="Logo" className="w-42" />
          {/* <Bot className="w-10 h-10 text-yellow" /> */}
          {/* <div className="flex gap-4">
            <a href="https://github.com/henriquesilvadev" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 text-white hover:text-yellow transition-colors" />
            </a>
            <a href="https://linkedin.com/in/henriquesilvadev" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 text-white hover:text-yellow transition-colors" />
            </a>
          </div> */}
        </nav>
        
        <div className="relative overflow-hidden">
          {/* Background video */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay (opcional, para contraste) */}
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

          {/* Content on top */}
          <div className="relative z-20 max-w-4xl mx-auto text-center py-32 px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Construindo Conversas Inteligentes
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12">
              Criando chatbots avançados e soluções de IA conversacional que transformam a forma como as empresas se conectam com seus clientes.
            </p>
            <a 
              href="https://henriquesilva.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow hover:bg-orange text-dark font-medium px-8 py-3 rounded-full transition-colors"
            >
              Saiba mais <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Nossa Especialidade</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-dark to-gray-900 p-8 rounded-2xl">
            <MessageSquare className="w-12 h-12 text-yellow mb-6" />
            <h3 className="text-xl font-bold mb-4">Conversational Design</h3>
            <p className="text-gray-300">Criando fluxos de diálogo naturais e envolventes que tornam as interações mais humanas e com propósito.</p>
          </div>
          <div className="bg-gradient-to-br from-dark to-gray-900 p-8 rounded-2xl">
            <Cpu className="w-12 h-12 text-orange mb-6" />
            <h3 className="text-xl font-bold mb-4">AI Integration</h3>
            <p className="text-gray-300">Aproveitando tecnologias de IA de ponta para construir soluções de chatbots inteligentes e sensíveis ao contexto.</p>
          </div>
          <div className="bg-gradient-to-br from-dark to-gray-900 p-8 rounded-2xl">
            <Code className="w-12 h-12 text-red-orange mb-6" />
            <h3 className="text-xl font-bold mb-4">Custom Development</h3>
            <p className="text-gray-300">Construindo soluções de chatbots sob medida que se alinham perfeitamente com as necessidades e objetivos do seu negócio.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="/profile_bio.png"
                alt="Henrique Silva" 
                className="rounded-2xl shadow-lg w-40"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Henrique Silva</h2>
              <p className="text-gray-300 mb-6">
                A passionate developer and conversational AI expert with years of experience in creating intelligent interfaces that bridge the gap between humans and technology.
              </p>
              <a 
                href="https://henriquesilva.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow hover:text-orange inline-flex items-center gap-2 transition-colors"
              >
                Visit Portfolio <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2025 Henrique Silva. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://henriquesilva.dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow transition-colors">
              Bio
            </a>
            <a href="https://github.com/henriquesilvadev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/henriquesilvadev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;