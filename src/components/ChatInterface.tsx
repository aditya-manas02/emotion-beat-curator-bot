
import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { SendIcon, MusicIcon, Bot, ExternalLink } from "lucide-react";
import { useToast } from "../hooks/use-toast";

interface Message {
  id: number;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
  spotifyLink?: string;
}

interface MoodPlaylist {
  [key: string]: { 
    name: string;
    link: string;
    description: string;
  }
}

const ChatInterface = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hi there! I'm your AI music curator. Tell me how you're feeling or what you're doing, and I'll create a perfect playlist for you!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Define Spotify playlists for different moods
  const moodPlaylists: MoodPlaylist = {
    happy: {
      name: "Happy Vibes",
      link: "https://open.spotify.com/playlist/37i9dQZF1DX9XIFQuFvzM4",
      description: "Upbeat tracks to boost your mood"
    },
    sad: {
      name: "In My Feelings",
      link: "https://open.spotify.com/playlist/37i9dQZF1DX7qK8ma5wgG1",
      description: "Emotional tracks for when you're feeling down"
    },
    energetic: {
      name: "Energy Boost",
      link: "https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP",
      description: "High tempo tracks to fuel your day"
    },
    calm: {
      name: "Peaceful Moments",
      link: "https://open.spotify.com/playlist/37i9dQZF1DX3Ogo9pFvBkY",
      description: "Gentle melodies to soothe your mind"
    },
    focus: {
      name: "Deep Concentration",
      link: "https://open.spotify.com/playlist/37i9dQZF1DX3PFzdbtx1Us",
      description: "Instrumental tracks for better focus"
    },
    workout: {
      name: "Workout Beats",
      link: "https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP",
      description: "High energy tracks for your exercise routine"
    },
    relax: {
      name: "Relaxation Station",
      link: "https://open.spotify.com/playlist/37i9dQZF1DX6VdMW310YC7",
      description: "Perfect for unwinding and relaxing"
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getMoodFromInput = (input: string): string | null => {
    const inputLower = input.toLowerCase();
    
    if (inputLower.includes("happy") || inputLower.includes("joy") || inputLower.includes("excited")) {
      return "happy";
    } else if (inputLower.includes("sad") || inputLower.includes("down") || inputLower.includes("blue")) {
      return "sad";
    } else if (inputLower.includes("workout") || inputLower.includes("exercise") || inputLower.includes("gym")) {
      return "workout";
    } else if (inputLower.includes("focus") || inputLower.includes("work") || inputLower.includes("study")) {
      return "focus";
    } else if (inputLower.includes("relax") || inputLower.includes("calm") || inputLower.includes("sleep")) {
      return "relax";
    } else if (inputLower.includes("energy") || inputLower.includes("energetic") || inputLower.includes("pumped")) {
      return "energetic";
    } else if (inputLower.includes("peaceful") || inputLower.includes("chill") || inputLower.includes("quiet")) {
      return "calm";
    }
    
    return null;
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: input,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages([...messages, userMessage]);
    setInput("");

    // Simulate AI response after a short delay
    setTimeout(() => {
      const mood = getMoodFromInput(input);
      let response = "";
      let spotifyLink = "";
      
      if (mood && moodPlaylists[mood]) {
        const playlist = moodPlaylists[mood];
        response = `I've created a "${playlist.name}" playlist for you! ${playlist.description}. Here's a Spotify playlist that matches your mood:`;
        spotifyLink = playlist.link;
      } else {
        response = "Based on what you've told me, I've created a mixed playlist that I think you'll enjoy! It has a variety of genres and moods. Here's a general Spotify playlist you might like:";
        spotifyLink = "https://open.spotify.com/playlist/37i9dQZF1DX4JAvHpjipBk";
      }

      const botMessage: Message = {
        id: messages.length + 2,
        content: response,
        sender: "bot",
        timestamp: new Date(),
        spotifyLink: spotifyLink
      };
      setMessages((prev) => [...prev, botMessage]);

      toast({
        title: "Playlist Generated!",
        description: "Your Spotify playlist is ready to explore",
      });
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-6 px-4">
      <Card className="border rounded-xl overflow-hidden shadow-lg bg-card">
        <div className="p-4 bg-primary flex items-center">
          <Bot className="h-6 w-6 text-primary-foreground mr-2" />
          <h3 className="text-lg font-medium text-primary-foreground">AI Music Curator</h3>
        </div>
        
        <div className="h-[400px] overflow-y-auto p-4 bg-muted/30">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                {message.sender === "bot" && (
                  <div className="flex items-center mb-1">
                    <MusicIcon className="h-4 w-4 mr-1" />
                    <span className="text-xs font-medium">Music Curator</span>
                  </div>
                )}
                <p className="text-sm">{message.content}</p>
                {message.spotifyLink && (
                  <a 
                    href={message.spotifyLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 mt-2 text-xs font-medium text-primary-foreground bg-primary/20 p-2 rounded hover:bg-primary/30 transition-colors"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Open Spotify Playlist
                  </a>
                )}
                <p className="text-xs opacity-70 mt-1 text-right">
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="p-4 border-t flex items-center gap-2">
          <Input
            placeholder="Tell me how you feel or what you're doing..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} size="icon">
            <SendIcon className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ChatInterface;
