import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function useAnalytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // This is where you would typically send a page view to your analytics service
        // For example, if using Google Analytics:
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('config', 'G-JCJ88LN2LC', {
                page_path: pathname,
            });
        }

        // For demonstration purposes, we'll just log to console
        console.log(`Page view: ${pathname}${searchParams ? `?${searchParams}` : ''}`);
    }, [pathname, searchParams]);
}
