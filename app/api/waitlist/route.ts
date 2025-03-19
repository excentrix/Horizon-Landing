import { NextResponse } from 'next/server';

// Notion API configuration
const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

export async function POST(request: Request) {
    try {
        const { email, position } = await request.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        if (!NOTION_API_KEY || !NOTION_DATABASE_ID) {
            console.error('Notion API key or database ID not configured');
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        // Add to Notion database
        const response = await fetch(`https://api.notion.com/v1/pages`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${NOTION_API_KEY}`,
                'Content-Type': 'application/json',
                'Notion-Version': '2022-06-28',
            },
            body: JSON.stringify({
                parent: { database_id: NOTION_DATABASE_ID },
                properties: {
                    Email: {
                        title: [
                            {
                                text: {
                                    content: email,
                                },
                            },
                        ],
                    },
                    Position: {
                        number: position,
                    },
                    Status: {
                        select: {
                            name: 'Waitlist',
                        },
                    },
                    'Signup Date': {
                        date: {
                            start: new Date().toISOString(),
                        },
                    },
                },
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Notion API error:', errorData);
            return NextResponse.json({ error: 'Failed to add to waitlist' }, { status: 500 });
        }

        return NextResponse.json({ success: true, position });
    } catch (error) {
        console.error('Error adding to waitlist:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
