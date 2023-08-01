export interface ChatRecord {
  chatRecordId?: number;
  chatConversationId: number;
  role: string;
  content: string[];
  created: number;
  updated: number;
  finishReason: 'stop' | 'length' | undefined;
  model: string;
  expectedMaxToken: number;
  oneOfChoices: boolean;
}
