import { Heart } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-80" />
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-20 left-10 text-primary/30 w-8 h-8 animate-float" style={{ animationDelay: "0s" }} />
        <Heart className="absolute top-40 right-20 text-accent/30 w-6 h-6 animate-float" style={{ animationDelay: "1s" }} />
        <Heart className="absolute bottom-32 left-1/4 text-primary/20 w-10 h-10 animate-float" style={{ animationDelay: "2s" }} />
        <Heart className="absolute top-1/3 right-1/3 text-accent/20 w-7 h-7 animate-float" style={{ animationDelay: "1.5s" }} />
        <Heart className="absolute bottom-20 right-10 text-primary/30 w-9 h-9 animate-float" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Heart className="w-16 h-16 mx-auto mb-6 text-primary animate-heart-beat" />
        </div>
        
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Happy Birthday
        </h1>
        
        <p 
          className="text-3xl md:text-5xl font-playfair text-primary mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          My Beautiful Love
        </p>
        
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          Today is the perfect day to celebrate the most incredible person in my life.
          Every moment with you is a treasure, and I'm so grateful to share this special day with you.
        </p>
        
        <div 
          className="mt-10 animate-fade-in-up"
          style={{ animationDelay: "1s" }}
        >
          <button
            onClick={() => document.getElementById('message')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium shadow-romantic hover:scale-105 transition-smooth"
          >
            Read My Message ❤️
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
