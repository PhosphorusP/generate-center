export interface StoredPreference {
  preferenceId?: string;
  value: string | number | boolean;
}

export interface StoredChatConversation {
  chatConversationId?: number;
  title: string;
  created: number;
  updated: number;
}

export interface StoredChatRecord {
  chatRecordId?: number;
  chatConversationId?: number;
  role: string;
  content: string[];
  created: number;
  updated: number;
  finishReason: 'stop' | 'length' | undefined;
  model: string;
  expectedMaxToken: number;
  oneOfChoices: boolean;
}
