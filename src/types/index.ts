export interface Ministry {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'Worship' | 'Community' | 'Youth' | 'Kids';
}

export interface Sermon {
  id: string;
  title: string;
  preacher: string;
  date: string;
  thumbnailUrl: string;
  videoUrl?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}