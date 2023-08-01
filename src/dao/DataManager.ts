export interface DataManager<T> {
  createRecord(recordData: T): Promise<boolean>;
  findRecordById(id: string): Promise<T | null>;
  updateRecord(id: string, assignments: Partial<T>): Promise<boolean>;
  deleteRecord(id: string): Promise<boolean>;
}
