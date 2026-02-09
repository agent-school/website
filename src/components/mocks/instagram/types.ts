export type Category = "Support" | "Sales" | "Spam" | "General";

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  isFromUser: boolean;
}

export interface Conversation {
  id: string;
  username: string;
  avatar: string;
  preview: string;
  timestamp: Date;
  unread: number;
  category: Category;
  messages: Message[];
}

export interface InstagramData {
  conversations: Conversation[];
}

export interface CategoryFilter {
  category: Category | "all";
}
