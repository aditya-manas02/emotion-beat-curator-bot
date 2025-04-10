
import React from "react";
import { Button } from "./ui/button";
import { Music, Heart, Activity } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 px-6 md:px-12 flex flex-col items-center text-center">
      <div className="relative w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-music-happy via-music-calm to-music-energetic flex items-center justify-center">
        <Music className="h-10 w-10 text-white" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-music-happy via-music-calm to-music-energetic opacity-50 blur-lg -z-10"></div>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 max-w-3xl">
        AI Music Playlist Curator for Your Every{" "}
        <span className="text-transparent bg-clip-text bg-music-gradient">Emotion</span>
      </h1>
      
      <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
        Our AI creates the perfect playlist tailored to your emotions and activities. 
        Just tell us how you feel or what you're doing, and we'll handle the rest.
      </p>
      
      <div className="flex flex-wrap gap-4 justify-center">
        <Button size="lg" className="gap-2 bg-music-happy hover:bg-music-happy/90">
          <Heart className="h-5 w-5" />
          Emotion Playlists
        </Button>
        <Button size="lg" variant="outline" className="gap-2 border-music-energetic text-music-energetic hover:bg-music-energetic/10">
          <Activity className="h-5 w-5" />
          Activity Playlists
        </Button>
      </div>
      
      <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl w-full">
        <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/50">
          <span className="text-4xl font-bold text-music-happy">100+</span>
          <span className="text-sm text-muted-foreground">Emotions</span>
        </div>
        <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/50">
          <span className="text-4xl font-bold text-music-calm">50+</span>
          <span className="text-sm text-muted-foreground">Activities</span>
        </div>
        <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/50 col-span-2 md:col-span-1">
          <span className="text-4xl font-bold text-music-energetic">∞</span>
          <span className="text-sm text-muted-foreground">Possibilities</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
