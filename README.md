# Onlook Landing Page

A modern, interactive landing page built with Next.js and React Bits components, featuring stunning animations and cutting-edge design.

## 🚀 Features

- **Interactive Components**: Built with React Bits components including Aurora backgrounds, MagicBento grids, TiltedCard effects, and animated counters
- **Modern Design**: Beautiful UI with gradient backgrounds, glassmorphism effects, and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 14 and optimized for speed
- **TypeScript**: Full TypeScript support for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Graphics**: OGL (WebGL), Three.js
- **Components**: Custom React Bits implementations

## 📦 Components Used

### React Bits Components

- **Aurora**: Animated background with flowing colors and particle effects
- **SplitText**: Character-by-character text animations with GSAP
- **MagicBento**: Interactive bento grid with hover effects and spotlight
- **TiltedCard**: 3D card component with realistic perspective and glare effects
- **Counter**: Animated number counters with smooth transitions

### Custom Components

- **Navigation**: Responsive navbar with scroll effects
- **Hero**: Landing hero section with animated content
- **Features**: Feature showcase with animated icons
- **Showcase**: Interactive project showcase
- **Stats**: Animated statistics with counters
- **Testimonials**: Customer testimonials section
- **Footer**: Comprehensive footer with links and newsletter

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd project-1755974763127
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors and Themes

The landing page uses a blue-to-purple gradient theme. You can customize colors by modifying:

- Tailwind CSS classes in components
- CSS custom properties in `globals.css`
- Component prop values

### Content

Update the content by modifying:

- Text content in component files
- Images and assets in the `public` folder
- Links and navigation items

### Animations

Customize animations by adjusting:

- Framer Motion variants and transitions
- GSAP animation parameters
- Scroll trigger settings

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── Aurora.tsx         # Aurora background effect
│   ├── SplitText.tsx      # Text animation component
│   ├── MagicBento.tsx     # Interactive bento grid
│   ├── TiltedCard.tsx     # 3D card component
│   ├── Counter.tsx        # Animated counter
│   ├── Navigation.tsx     # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features section
│   ├── Showcase.tsx       # Showcase section
│   ├── Stats.tsx          # Statistics section
│   ├── Testimonials.tsx   # Testimonials section
│   └── Footer.tsx         # Footer component
├── lib/                   # Utility functions
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

### Adding New Components

1. Create a new component file in the `components/` directory
2. Export the component as default
3. Import and use it in `page.tsx` or other components

### Styling Guidelines

- Use Tailwind CSS classes for styling
- Follow the existing color scheme and spacing patterns
- Ensure responsive design for all components
- Use Framer Motion for animations when possible

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Other Platforms

- **Netlify**: Use `npm run build` and deploy the `out` directory
- **AWS Amplify**: Connect your repository and build automatically
- **Self-hosted**: Build and serve the static files

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions:

- Create an issue in the repository
- Contact the development team
- Check the documentation

---

Built with ❤️ using Next.js and React Bits
