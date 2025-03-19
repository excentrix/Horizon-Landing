/**
 * Utility functions for interacting with the Notion API
 */

export interface WaitlistEntry {
    email: string;
    position: number;
}

/**
 * Add a new entry to the waitlist in Notion
 */
export async function addToWaitlist(
    data: WaitlistEntry,
): Promise<{ success: boolean; error?: string }> {
    try {
        const response = await fetch('/api/waitlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
            return {
                success: false,
                error: result.error || 'Failed to add to waitlist',
            };
        }

        return { success: true };
    } catch (error) {
        console.error('Error adding to waitlist:', error);
        return {
            success: false,
            error: 'Network error when adding to waitlist',
        };
    }
}
