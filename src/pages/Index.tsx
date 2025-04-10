
import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import EmotionSelector from "../components/EmotionSelector";
import ChatInterface from "../components/ChatInterface";
import PlaylistDisplay from "../components/PlaylistDisplay";
import Footer from "../components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { MessageSquare, ListMusic } from "lucide-react";

const Index = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<string>("default");

  const handleEmotionSelect = (emotion: string) => {
    setSelectedEmotion(emotion.toLowerCase());
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <EmotionSelector onSelectEmotion={handleEmotionSelect} />
      
      <div className="max-w-6xl mx-auto w-full px-4 py-8">
        <Tabs defaultValue="chat">
          <div className="flex justify-center mb-6">
            <TabsList>
              <TabsTrigger value="chat" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Chat with AI
              </TabsTrigger>
              <TabsTrigger value="playlist" className="flex items-center gap-2">
                <ListMusic className="h-4 w-4" />
                View Playlist
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="chat">
            <ChatInterface />
          </TabsContent>
          
          <TabsContent value="playlist">
            <PlaylistDisplay emotion={selectedEmotion} />
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
