import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-gradient-hero border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <Heart className="w-10 h-10 mx-auto text-primary animate-heart-beat" />
        </div>
        
        <p className="text-2xl font-playfair text-foreground mb-4">
          You mean the world to me
        </p>
        
        <p className="text-muted-foreground mb-6">
          Wishing you all the happiness your heart can hold
        </p>
        
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>Made with endless love ❤️</p>
          <p>© {currentYear} · Forever Yours</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
