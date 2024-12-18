import React from 'react';
import { GeneratedContent } from '../types';
import { MessageSquare, Share2 } from 'lucide-react';

interface Props {
  contents: GeneratedContent[];
}

export default function GeneratedContentList({ contents }: Props) {
  return (
    <div className="space-y-4">
      {contents.map((content, index) => (
        <div key={index} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Generated from {content.source.type}
            </span>
            <span className="text-sm text-gray-500">{content.timestamp}</span>
          </div>
          <p className="text-gray-800">{content.text}</p>
          <div className="mt-4 flex gap-4">
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-500">
              <MessageSquare size={16} />
              Edit
            </button>
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-500">
              <Share2 size={16} />
              Share
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}