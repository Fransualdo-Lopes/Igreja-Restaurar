
export interface Ministry {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  // New fields for detailed view
  longDescription?: string;
  leader?: string;
  schedule?: string;
  location?: string;
  team?: TeamMember[];
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl?: string;
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