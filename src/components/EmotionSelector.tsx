
import React from "react";
import { Button } from "./ui/button";
import { Heart, Activity, Music, Zap, Coffee, Moon, Brain, Smile, Frown, Headphones } from "lucide-react";

const emotions = [
  { name: "Happy", icon: Smile, color: "bg-music-happy text-white" },
  { name: "Sad", icon: Frown, color: "bg-music-sad text-white" },
  { name: "Energetic", icon: Zap, color: "bg-music-energetic text-white" },
  { name: "Calm", icon: Moon, color: "bg-music-calm text-white" },
  { name: "Focus", icon: Brain, color: "bg-music-focus text-white" },
  { name: "Workout", icon: Activity, color: "bg-music-workout text-white" },
  { name: "Relax", icon: Coffee, color: "bg-music-relax text-white" },
];

interface EmotionSelectorProps {
  onSelectEmotion: (emotion: string) => void;
}

const EmotionSelector: React.FC<EmotionSelectorProps> = ({ onSelectEmotion }) => {
  return (
    <div className="w-full py-12 md:py-16 px-6 md:px-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        How are you feeling today?
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-4xl mx-auto">
        {emotions.map((emotion) => (
          <Button
            key={emotion.name}
            variant="ghost"
            className={`flex-col h-24 hover:scale-105 transition-all ${emotion.color}`}
            onClick={() => onSelectEmotion(emotion.name)}
          >
            <emotion.icon className="h-8 w-8 mb-2" />
            <span>{emotion.name}</span>
          </Button>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-music-happy to-music-energetic hover:opacity-90 gap-2"
        >
          <Headphones className="h-5 w-5" />
          Generate My Playlist
        </Button>
        <p className="mt-4 text-sm text-muted-foreground">
          Or chat with our AI for more personalized recommendations
        </p>
      </div>
    </div>
  );
};

export default EmotionSelector;
