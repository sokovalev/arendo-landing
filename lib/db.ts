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

// Migration: Add is_agreed column if it doesn't exist
(function addIsAgreedColumn() {
  // Check if the column exists using SQL query
  const columnExists = db
    .prepare(
      `
    SELECT COUNT(*) as count 
    FROM pragma_table_info('leads') 
    WHERE name = 'is_agreed'
  `
    )
    .get() as { count: number };

  if (columnExists.count === 0) {
    // Column doesn't exist, add it
    console.log("Adding is_agreed column to leads table...");
    db.exec(`
      ALTER TABLE leads 
      ADD COLUMN is_agreed INTEGER NOT NULL DEFAULT 0
    `);
    console.log("is_agreed column added successfully");
  }
})();

export interface Lead {
  id: number;
  email: string;
  is_agreed: boolean;
  created_at: string;
}

export function addLead(email: string, isAgreed: boolean): Lead | null {
  try {
    const stmt = db.prepare(
      "INSERT INTO leads (email, is_agreed) VALUES (?, ?)"
    );
    const result = stmt.run(email, isAgreed ? 1 : 0);
    return {
      id: result.lastInsertRowid as number,
      email,
      is_agreed: isAgreed,
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
