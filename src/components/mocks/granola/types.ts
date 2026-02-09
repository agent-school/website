export interface Speaker {
  id: string;
  name: string;
  color: string;
}

export interface TranscriptSegment {
  id: string;
  speakerId: string;
  timestamp: string;
  text: string;
  topic?: string;
}

export interface ActionItem {
  id: string;
  text: string;
  owner: string;
  dueDate?: string;
}

export interface Decision {
  id: string;
  text: string;
  context: string;
}

export interface Summary {
  overview: string;
  keyPoints: string[];
}

export interface GranolaData {
  speakers: Speaker[];
  transcript: TranscriptSegment[];
  summary: Summary;
  actionItems: ActionItem[];
  decisions: Decision[];
}
