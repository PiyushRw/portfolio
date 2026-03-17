import { NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

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

    // Format the Telegram message
    const text = `📩 <b>New Portfolio Contact!</b>\n\n👤 <b>Name:</b> ${escapeHtml(name.trim())}\n📧 <b>Email:</b> ${escapeHtml(email.trim())}\n💬 <b>Message:</b>\n${escapeHtml(message.trim())}\n\n🕐 <i>${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</i>`;

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const telegramRes = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'HTML'
      })
    });

    const telegramData = await telegramRes.json();

    if (!telegramData.ok) {
      console.error('Telegram API error:', telegramData);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: 'Thank you! Your message has been sent.',
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

// Escape HTML special characters to prevent injection
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
