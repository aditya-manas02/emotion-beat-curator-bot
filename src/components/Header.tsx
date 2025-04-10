
import React from "react";
import { Music, MusicIcon } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="flex items-center space-x-2">
        <Music className="h-6 w-6 text-primary" />
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-music-gradient">
          EmotionBeats
        </h1>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
          Home
        </a>
        <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
          About
        </a>
        <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
          FAQ
        </a>
      </nav>
      <Button variant="ghost" size="sm" className="md:hidden">
        <MusicIcon className="h-5 w-5" />
      </Button>
    </header>
  );
};

export default Header;
