import { Pool } from 'pg';

const connectionString = 'postgres://vmclltfi:pfDzsRSDearLNyciUxlLBUjR9aPvWcE4@kesavan.db.elephantsql.com/vmclltfi';

const db = new Pool({ connectionString });

export default db;
