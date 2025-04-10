
import React from "react";
import { Music, Heart, Mail, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 bg-muted/30 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <Music className="h-6 w-6 text-primary mr-2" />
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-music-gradient">
              EmotionBeats
            </h2>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-medium mb-4">About EmotionBeats</h3>
            <p className="text-sm text-muted-foreground">
              EmotionBeats is an AI-powered music curator that creates perfect playlists based on your emotions and activities.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-sm text-muted-foreground pt-4 border-t">
          <p>© 2025 EmotionBeats. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-music-energetic mx-1" /> for music lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
