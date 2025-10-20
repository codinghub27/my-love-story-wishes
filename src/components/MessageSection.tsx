import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const MessageSection = () => {
  return (
    <section id="message" className="py-20 px-4 bg-gradient-soft">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-scale-in">
          <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            A Message From My Heart
          </h2>
          <div className="w-24 h-1 bg-gradient-romantic mx-auto rounded-full" />
        </div>

        <Card className="p-8 md:p-12 shadow-romantic backdrop-blur-sm bg-card/90 animate-fade-in-up">
          <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
            <p className="text-xl md:text-2xl font-playfair text-primary text-center mb-8">
              My Dearest Love,
            </p>
            
            <p>
              On this special day, I want you to know just how much you mean to me. 
              From the moment you came into my life, everything changed for the better. 
              Your smile lights up my darkest days, and your laughter is my favorite melody.
            </p>
            
            <p>
              You are not just my girlfriend; you are my best friend, my confidant, and my greatest adventure. 
              Every day with you feels like a gift, and I cherish every single moment we share together. 
              Your kindness, your strength, and your beautiful soul inspire me to be a better person.
            </p>
            
            <p>
              As you celebrate another year of your amazing life, I want to remind you that you deserve 
              all the happiness in the world. You deserve every dream to come true, every wish to be granted, 
              and every moment to be filled with joy.
            </p>
            
            <p className="text-center font-playfair text-2xl text-primary mt-8">
              I love you more than words can express,
              <br />
              and I always will. ❤️
            </p>
            
            <p className="text-center text-muted-foreground italic mt-6">
              Happy Birthday, my love. Here's to many more beautiful years together.
            </p>
          </div>
        </Card>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center shadow-soft hover:shadow-romantic transition-smooth hover:scale-105">
            <div className="text-4xl mb-3">💝</div>
            <h3 className="font-bold text-lg mb-2 text-foreground">Endless Love</h3>
            <p className="text-sm text-muted-foreground">
              My love for you grows stronger with each passing day
            </p>
          </Card>
          
          <Card className="p-6 text-center shadow-soft hover:shadow-romantic transition-smooth hover:scale-105">
            <div className="text-4xl mb-3">🌟</div>
            <h3 className="font-bold text-lg mb-2 text-foreground">You're Amazing</h3>
            <p className="text-sm text-muted-foreground">
              Your beauty, inside and out, takes my breath away
            </p>
          </Card>
          
          <Card className="p-6 text-center shadow-soft hover:shadow-romantic transition-smooth hover:scale-105">
            <div className="text-4xl mb-3">💫</div>
            <h3 className="font-bold text-lg mb-2 text-foreground">Forever Together</h3>
            <p className="text-sm text-muted-foreground">
              I can't wait to create more beautiful memories with you
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
