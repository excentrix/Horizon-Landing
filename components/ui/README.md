# Advanced Popover Component

A powerful, feature-rich popover component that combines hover functionality with site preview images. Built using Radix UI primitives and Framer Motion for smooth animations.

## Features

- 🖼️ **Site Preview Images**: Automatically generates screenshots using Microlink API
- 🎯 **Hover Activation**: Opens on hover with configurable delays
- ✨ **Smooth Animations**: Powered by Framer Motion with spring physics
- 🎨 **Rich Content**: Supports titles, descriptions, icons, and action buttons
- 📱 **Responsive Design**: Works seamlessly across all device sizes
- 🎭 **Customizable Positioning**: Control popover placement and alignment
- 🔄 **Interactive Elements**: Action buttons with custom click handlers
- 🖼️ **Static Images**: Option to use custom images instead of screenshots

## Installation

Make sure you have the required dependencies:

```bash
npm install @radix-ui/react-hover-card motion lucide-react qss
```

## Basic Usage

```tsx
import AdvancedPopover from '@/components/ui/advanced-popover';

function MyComponent() {
  return (
    <AdvancedPopover
      trigger={<button>Hover me!</button>}
      title="Project Horizon"
      description="Your Personal AI Mentor"
      url="https://projecthorizon.ai"
    />
  );
}
```

## Props

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `trigger` | `React.ReactNode` | The element that triggers the popover |
| `title` | `string` | The title displayed in the popover |
| `url` | `string` | URL for the screenshot preview |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `description` | `string` | - | Optional description text |
| `icon` | `React.ReactNode` | YouTube icon | Custom icon for the title |
| `href` | `string` | - | Link for the title (opens in new tab) |
| `actionLabel` | `string` | - | Text for the action button |
| `actionHref` | `string` | - | Link for the action button |
| `onActionClick` | `() => void` | - | Function to call when action button is clicked |
| `meta` | `string` | - | Optional metadata (e.g., duration, status) |
| `className` | `string` | `''` | Additional CSS classes |
| `side` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Popover placement |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | Popover alignment |

### Image Preview Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `number` | `200` | Image width in pixels |
| `height` | `number` | `125` | Image height in pixels |
| `quality` | `number` | `50` | Image quality (1-100) |
| `layout` | `string` | `'fixed'` | Image layout |
| `isStatic` | `boolean` | `false` | Use static image instead of screenshot API |
| `imageSrc` | `string` | `''` | Static image URL when `isStatic` is true |

## Examples

### Basic Example

```tsx
<AdvancedPopover
  trigger={<button className="btn">Learn More</button>}
  title="Project Horizon"
  description="Your Personal AI Mentor for Career, Academics & Mental Health"
  url="https://projecthorizon.ai"
  icon="🧠"
/>
```

### With Action Button

```tsx
<AdvancedPopover
  trigger={<button className="btn">Watch Demo</button>}
  title="Project Horizon Demo"
  description="See how our AI mentor adapts to your needs in real-time"
  url="https://projecthorizon.ai/demo"
  actionLabel="Play Video"
  actionHref="https://youtube.com/watch?v=demo"
  icon="🎥"
  meta="5 min"
/>
```

### Custom Position

```tsx
<AdvancedPopover
  trigger={<button className="btn">Right Side</button>}
  title="Right Positioned"
  description="Popover appears on the right side"
  url="https://projecthorizon.ai"
  side="right"
  align="start"
/>
```

### Static Image

```tsx
<AdvancedPopover
  trigger={<button className="btn">Custom Image</button>}
  title="Static Preview"
  description="Using a pre-defined image"
  url="https://example.com"
  isStatic={true}
  imageSrc="https://via.placeholder.com/200x125/4F46E5/FFFFFF?text=Custom+Image"
  icon="🖼️"
/>
```

### With Click Action

```tsx
<AdvancedPopover
  trigger={<button className="btn">Click Action</button>}
  title="Interactive Demo"
  description="Click the action button to trigger a custom function"
  url="https://projecthorizon.ai"
  actionLabel="Try Now"
  onActionClick={() => {
    console.log('Custom action triggered!');
    // Your custom logic here
  }}
  icon="⚡"
/>
```

## Styling

The component uses Tailwind CSS classes and can be customized through the `className` prop. The popover has a dark theme by default with:

- Black background (`bg-black`)
- White text (`text-white`)
- Rounded corners (`rounded-2xl`)
- Shadow effects (`shadow-xl`)
- Border styling (`border border-white/10`)

## Image Preview

### Screenshot API (Default)

When `isStatic` is false, the component uses the Microlink API to generate screenshots:

- Automatically captures website screenshots
- Supports mobile viewport simulation
- Configurable quality and dimensions
- Dark theme screenshots for better contrast

### Static Images

When `isStatic` is true, you can provide a custom image:

- Use any image URL
- Supports all image formats
- No API calls required
- Faster loading times

## Animation

The component features smooth animations powered by Framer Motion:

- **Entrance**: Scale and fade-in with spring physics
- **Exit**: Smooth fade-out and scale-down
- **Mouse Movement**: Subtle parallax effect on hover
- **Spring Physics**: Natural, bouncy animations

## Accessibility

- Built on Radix UI primitives for accessibility
- Proper ARIA attributes and keyboard navigation
- Screen reader friendly
- Focus management
- Semantic HTML structure

## Browser Support

- Modern browsers with ES6+ support
- Requires CSS Grid and Flexbox support
- Motion library for animations
- Radix UI for accessibility primitives

## Performance

- Images are preloaded when component mounts
- Lazy loading for screenshot generation
- Optimized animations with spring physics
- Minimal re-renders with proper state management

## Troubleshooting

### Common Issues

1. **Images not loading**: Check if the URL is accessible and CORS-enabled
2. **Screenshot API errors**: Verify the Microlink API is working
3. **Animation performance**: Reduce animation complexity on low-end devices
4. **Positioning issues**: Check if the trigger element has proper positioning

### Debug Mode

Enable debug logging by setting the environment variable:

```bash
DEBUG=advanced-popover npm run dev
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - see LICENSE file for details.
