import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const MESSAGES_FILE = path.join(process.cwd(), 'data', 'messages.json');

function ensureDataDir() {
  const dir = path.dirname(MESSAGES_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(MESSAGES_FILE)) {
    fs.writeFileSync(MESSAGES_FILE, '[]', 'utf-8');
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }
    if (!email || !email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email is required.' }, { status: 400 });
    }
    if (!message || !message.trim()) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    ensureDataDir();

    // Read existing messages
    const raw = fs.readFileSync(MESSAGES_FILE, 'utf-8');
    const messages = JSON.parse(raw);

    // Add new message
    messages.push({
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString()
    });

    // Save
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), 'utf-8');

    return NextResponse.json({
      message: 'Thank you! Your message has been received.',
      success: true
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    ensureDataDir();
    const raw = fs.readFileSync(MESSAGES_FILE, 'utf-8');
    const messages = JSON.parse(raw);
    return NextResponse.json({ messages, count: messages.length });
  } catch {
    return NextResponse.json({ messages: [], count: 0 });
  }
}
