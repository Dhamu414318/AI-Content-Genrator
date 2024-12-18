import React from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';
import { ContentSource } from '../types';

interface Props {
  sources: ContentSource[];
  onAdd: (source: ContentSource) => void;
  onRemove: (index: number) => void;
}

export default function ContentSourceInput({ sources, onAdd, onRemove }: Props) {
  const [newSource, setNewSource] = React.useState<ContentSource>({
    type: 'twitter',
    url: '',
  });

  const handleAdd = () => {
    if (newSource.url) {
      onAdd(newSource);
      setNewSource({ type: 'twitter', url: '' });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <select
          className="rounded-md border border-gray-300 px-3 py-2"
          value={newSource.type}
          onChange={(e) => setNewSource({ ...newSource, type: e.target.value as ContentSource['type'] })}
        >
          <option value="twitter">Twitter</option>
          <option value="blog">Blog</option>
          <option value="linkedin">LinkedIn</option>
        </select>
        <input
          type="url"
          placeholder="Enter URL"
          className="flex-1 rounded-md border border-gray-300 px-3 py-2"
          value={newSource.url}
          onChange={(e) => setNewSource({ ...newSource, url: e.target.value })}
        />
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          <PlusCircle size={20} />
          Add Source
        </button>
      </div>

      <div className="space-y-2">
        {sources.map((source, index) => (
          <div key={index} className="flex items-center justify-between rounded-md bg-gray-50 p-3">
            <div>
              <span className="font-medium capitalize">{source.type}:</span> {source.url}
            </div>
            <button
              onClick={() => onRemove(index)}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}