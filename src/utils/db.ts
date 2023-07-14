import Dexie, { Table } from 'dexie';

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

export class DBClass extends Dexie {
  preferences!: Table<StoredPreference>;
  chatConversations!: Table<StoredChatConversation>;
  chatRecords!: Table<StoredChatRecord>;
  constructor() {
    super('GenerateCenterDatabase');
    this.version(1).stores({
      preferences: 'preferenceId, value',
      chatConversations: 'chatConversationId, title, created, updated',
      chatRecords:
        'chatRecordId, chatConversationId, role, content, created, updated, finishReason, model, expectedMaxToken, oneOfChoices'
    });
  }
}

export const db = new DBClass();
