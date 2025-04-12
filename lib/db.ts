import Database from "better-sqlite3";
import { join } from "path";

export const db = new Database(join(process.cwd(), "leads.db"));

// Initialize the database with the leads table
db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export interface Lead {
  id: number;
  email: string;
  created_at: string;
}

export function addLead(email: string): Lead | null {
  try {
    const stmt = db.prepare("INSERT INTO leads (email) VALUES (?)");
    const result = stmt.run(email);
    return {
      id: result.lastInsertRowid as number,
      email,
      created_at: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Error adding lead:", error);
    return null;
  }
}

export function getLeads(): Lead[] {
  const stmt = db.prepare("SELECT * FROM leads ORDER BY created_at DESC");
  return stmt.all() as Lead[];
}
