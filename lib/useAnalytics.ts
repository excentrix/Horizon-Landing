import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function useAnalytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // This is where you would typically send a page view to your analytics service
        // For example, if using Google Analytics:
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('config', 'G-XXXXXXXXXX', {
                page_path: pathname,
            });
        }

        // For demonstration purposes, we'll just log to console
        console.log(`Page view: ${pathname}${searchParams ? `?${searchParams}` : ''}`);
    }, [pathname, searchParams]);
}
