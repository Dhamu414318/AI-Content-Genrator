import React, { useState } from 'react';
import { Brain, Settings, History } from 'lucide-react';
import ContentSourceInput from './components/ContentSourceInput';
import GeneratedContentList from './components/GeneratedContentList';
import { ContentSource, GeneratedContent, Profile } from './types';

function App() {
  const [profile, setProfile] = useState<Profile>({
    name: 'Jack',
    bio: 'President of Persist Venture, Web3 Wizard',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    sources: [],
  });

  const [generatedContents, setGeneratedContents] = useState<GeneratedContent[]>([]);

  const handleAddSource = (source: ContentSource) => {
    setProfile((prev) => ({
      ...prev,
      sources: [...prev.sources, source],
    }));
  };

  const handleRemoveSource = (index: number) => {
    setProfile((prev) => ({
      ...prev,
      sources: prev.sources.filter((_, i) => i !== index),
    }));
  };

  const generateContent = async () => {
    // In a real application, this would call the OpenAI API
    const mockContent: GeneratedContent = {
      text: "Excited to share my thoughts on the future of Web3 and how it's reshaping the digital landscape. The possibilities are endless when we combine decentralized systems with innovative thinking. #Web3 #Innovation #Tech",
      timestamp: new Date().toISOString(),
      source: profile.sources[0] || { type: 'twitter', url: '' },
    };
    setGeneratedContents((prev) => [mockContent, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">AI Content Generator</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg bg-white p-6 shadow">
              <h2 className="mb-6 text-2xl font-bold">Content Sources</h2>
              <ContentSourceInput
                sources={profile.sources}
                onAdd={handleAddSource}
                onRemove={handleRemoveSource}
              />
              <button
                onClick={generateContent}
                className="mt-6 w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                Generate Content
              </button>
            </div>

            <div className="mt-8 rounded-lg bg-white p-6 shadow">
              <h2 className="mb-6 text-2xl font-bold">Generated Content</h2>
              <GeneratedContentList contents={generatedContents} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg bg-white p-6 shadow">
              <div className="text-center">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="mx-auto h-24 w-24 rounded-full"
                />
                <h2 className="mt-4 text-xl font-bold">{profile.name}</h2>
                <p className="text-gray-600">{profile.bio}</p>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <Settings size={20} />
                Settings
              </h3>
              {/* Add settings controls here */}
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <History size={20} />
                Activity Log
              </h3>
              {/* Add activity log here */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;