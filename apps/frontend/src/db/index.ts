import type { Table } from "dexie";
import Dexie from "dexie";
interface TaskTable {
  id: number;
  title: string;
  content: string;
  projectId: string;
  state: number;
  index: number;
}

class DidaBd extends Dexie {
  task!: Table<TaskTable, number>;
  constructor() {
    super("dida");
    this.version(1).stores({
      tarsk: "++id ttile content, projectId, state, index",
    });
  }
}

let db: DidaBd;

export async function setupDB() {
  db = new DidaBd();
}

export function getDB() {
  return db;
}
