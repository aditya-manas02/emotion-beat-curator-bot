
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Play, SkipForward, Heart, Clock, ListMusic, Music } from "lucide-react";
import { Button } from "./ui/button";

interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
}

interface PlaylistDisplayProps {
  emotion: string;
  songs: Song[];
}

const sampleData = {
  happy: {
    title: "Happy Vibes",
    description: "Upbeat tracks to boost your mood",
    color: "from-music-happy/40 to-music-happy/10",
    songs: [
      { id: 1, title: "Happy", artist: "Pharrell Williams", duration: "3:53" },
      { id: 2, title: "Good as Hell", artist: "Lizzo", duration: "2:39" },
      { id: 3, title: "Walking on Sunshine", artist: "Katrina & The Waves", duration: "3:58" },
      { id: 4, title: "Can't Stop the Feeling!", artist: "Justin Timberlake", duration: "3:56" },
      { id: 5, title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", duration: "4:30" },
    ]
  },
  sad: {
    title: "In My Feelings",
    description: "Emotional tracks for reflection",
    color: "from-music-sad/40 to-music-sad/10",
    songs: [
      { id: 1, title: "Someone Like You", artist: "Adele", duration: "4:45" },
      { id: 2, title: "Fix You", artist: "Coldplay", duration: "4:55" },
      { id: 3, title: "Tears in Heaven", artist: "Eric Clapton", duration: "4:33" },
      { id: 4, title: "Hurt", artist: "Johnny Cash", duration: "3:38" },
      { id: 5, title: "Skinny Love", artist: "Bon Iver", duration: "3:58" },
    ]
  },
  energetic: {
    title: "Energy Boost",
    description: "High tempo tracks to fuel your day",
    color: "from-music-energetic/40 to-music-energetic/10",
    songs: [
      { id: 1, title: "Eye of the Tiger", artist: "Survivor", duration: "4:05" },
      { id: 2, title: "Levels", artist: "Avicii", duration: "3:19" },
      { id: 3, title: "Don't Stop Me Now", artist: "Queen", duration: "3:29" },
      { id: 4, title: "Harder, Better, Faster, Stronger", artist: "Daft Punk", duration: "3:45" },
      { id: 5, title: "Till I Collapse", artist: "Eminem ft. Nate Dogg", duration: "4:57" },
    ]
  },
  calm: {
    title: "Peaceful Moments",
    description: "Gentle melodies to soothe your mind",
    color: "from-music-calm/40 to-music-calm/10",
    songs: [
      { id: 1, title: "Weightless", artist: "Marconi Union", duration: "8:08" },
      { id: 2, title: "Claire de Lune", artist: "Claude Debussy", duration: "5:26" },
      { id: 3, title: "Gymnopédie No.1", artist: "Erik Satie", duration: "3:05" },
      { id: 4, title: "Horizon Variations", artist: "Max Richter", duration: "1:42" },
      { id: 5, title: "Intro", artist: "The xx", duration: "2:07" },
    ]
  },
  focus: {
    title: "Deep Concentration",
    description: "Instrumental tracks for better focus",
    color: "from-music-focus/40 to-music-focus/10",
    songs: [
      { id: 1, title: "Experience", artist: "Ludovico Einaudi", duration: "5:15" },
      { id: 2, title: "Nuvole Bianche", artist: "Ludovico Einaudi", duration: "5:57" },
      { id: 3, title: "Divenire", artist: "Ludovico Einaudi", duration: "6:42" },
      { id: 4, title: "Una Mattina", artist: "Ludovico Einaudi", duration: "3:24" },
      { id: 5, title: "I Giorni", artist: "Ludovico Einaudi", duration: "6:51" },
    ]
  },
  default: {
    title: "Your Custom Playlist",
    description: "Tailored to your unique taste",
    color: "from-primary/20 to-secondary/20",
    songs: [
      { id: 1, title: "Bohemian Rhapsody", artist: "Queen", duration: "5:54" },
      { id: 2, title: "Hotel California", artist: "Eagles", duration: "6:30" },
      { id: 3, title: "Sweet Child O' Mine", artist: "Guns N' Roses", duration: "5:56" },
      { id: 4, title: "Imagine", artist: "John Lennon", duration: "3:03" },
      { id: 5, title: "Billie Jean", artist: "Michael Jackson", duration: "4:54" },
    ]
  }
};

const PlaylistDisplay: React.FC<{emotion?: string}> = ({ emotion = "default" }) => {
  const playlist = sampleData[emotion as keyof typeof sampleData] || sampleData.default;
  
  return (
    <div className="w-full py-10 px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Your AI Generated Playlist</h2>
      
      <Card className={`w-full max-w-3xl mx-auto overflow-hidden shadow-lg bg-gradient-to-br ${playlist.color} border-0`}>
        <div className="p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="w-40 h-40 bg-gradient-to-br from-music-happy via-music-calm to-music-energetic rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
            <ListMusic className="h-16 w-16 text-white" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-bold">{playlist.title}</h3>
            <p className="text-muted-foreground">{playlist.description}</p>
            
            <div className="flex items-center mt-6 gap-3">
              <Button className="rounded-full w-12 h-12 p-0 bg-primary hover:bg-primary/90">
                <Play className="h-6 w-6 ml-1" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <SkipForward className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <CardContent className="p-0">
          <div className="bg-card/80 backdrop-blur-sm p-4">
            <div className="grid grid-cols-12 text-sm font-medium text-muted-foreground py-2 px-4 border-b">
              <div className="col-span-1">#</div>
              <div className="col-span-5">Title</div>
              <div className="col-span-5">Artist</div>
              <div className="col-span-1 flex justify-end">
                <Clock className="h-4 w-4" />
              </div>
            </div>
            
            <div className="divide-y">
              {playlist.songs.map((song) => (
                <div
                  key={song.id}
                  className="grid grid-cols-12 text-sm py-3 px-4 items-center hover:bg-muted/50 transition-colors"
                >
                  <div className="col-span-1">{song.id}</div>
                  <div className="col-span-5 font-medium">{song.title}</div>
                  <div className="col-span-5 text-muted-foreground">{song.artist}</div>
                  <div className="col-span-1 text-right text-muted-foreground">{song.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-6 text-center">
        <Button variant="outline" className="gap-2">
          <Music className="h-4 w-4" />
          Save Playlist
        </Button>
      </div>
    </div>
  );
};

export default PlaylistDisplay;
