import { useEffect, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { GoogleAnalyticsProvider } from './analytics/providers/google-analytics';
import type { AnalyticsEvent } from './analytics/types';

const analyticsProvider = new GoogleAnalyticsProvider();

export function useAnalytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        try {
            const queryString = searchParams ? `?${searchParams}` : '';
            analyticsProvider.pageView({
                path: pathname,
                query: queryString,
                title: document.title,
                referrer: document.referrer,
            });
        } catch (error) {
            // In production, you might want to send this to an error reporting service
            console.error('Failed to send analytics:', error);
        }
    }, [pathname, searchParams]);

    const trackEvent = useCallback((event: AnalyticsEvent) => {
        try {
            analyticsProvider.event(event);
        } catch (error) {
            console.error('Failed to track event:', error);
        }
    }, []);

    return { trackEvent };
}
