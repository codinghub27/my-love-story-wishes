import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

const MemoriesGallery = () => {
  // Placeholder memories - these can be replaced with actual photos
  const memories = [
    {
      title: "Our First Date",
      description: "The moment I knew you were special",
      emoji: "🥰"
    },
    {
      title: "That Perfect Day",
      description: "When we laughed until our stomachs hurt",
      emoji: "😄"
    },
    {
      title: "Romantic Evening",
      description: "Under the stars, just you and me",
      emoji: "✨"
    },
    {
      title: "Adventure Together",
      description: "Exploring the world hand in hand",
      emoji: "🌍"
    },
    {
      title: "Cozy Moments",
      description: "The simple joy of being together",
      emoji: "☕"
    },
    {
      title: "Making Memories",
      description: "Every day is special with you",
      emoji: "💕"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-scale-in">
          <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Beautiful Memories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every moment with you becomes a cherished memory that I hold close to my heart
          </p>
          <div className="w-24 h-1 bg-gradient-romantic mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((memory, index) => (
            <Card 
              key={index}
              className="group overflow-hidden shadow-soft hover:shadow-romantic transition-smooth hover:scale-105 cursor-pointer"
              style={{ 
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="aspect-square bg-gradient-romantic flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-smooth" />
                <div className="relative z-10 text-8xl group-hover:scale-110 transition-bounce">
                  {memory.emoji}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-smooth">
                  {memory.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {memory.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground italic">
            "Every love story is beautiful, but ours is my favorite." ❤️
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemoriesGallery;
