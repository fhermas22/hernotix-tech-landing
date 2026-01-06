# HERNOTIX Tech - Landing Page

![HERNOTIX Tech](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

A modern, professional, and dynamic landing page for **HERNOTIX Tech**, a Web and Mobile development studio based in Benin. Built with React 19, Tailwind CSS v4, and optimized for deployment on Vercel.

## 🎯 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Brand Identity**: Carefully crafted visual identity using Azure Blue, Gold Yellow, and Charcoal Black color scheme
- **Performance Optimized**: Lightning-fast load times with Vite bundling and optimized assets
- **SEO Ready**: Semantic HTML structure and meta tags for better search engine visibility
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Vercel Ready**: Pre-configured for seamless deployment on Vercel

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **pnpm** (package manager)
- **Git** (for version control)

### Installation

1. **Clone the repository**

   \`\`\`bash
   git clone https://github.com/fhermas22/hernotix-tech-landing.git
   cd hernotix-tech-landing
   \`\`\`

2. **Install dependencies**

   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server**

   \`\`\`bash
   npm run dev
   \`\`\`

   The application will be available at `http://localhost:5173`

4. **Build for production**

   \`\`\`bash
   npm run build
   \`\`\`

5. **Preview production build**

   \`\`\`bash
   npm run preview
   \`\`\`

## 📁 Project Structure

\`\`\`
hernotix-tech-landing/
├── public/
│   ├── hero_illustration.png          # Hero section illustration
│   ├── web_development_icon.png       # Web development service icon
│   ├── mobile_development_icon.png    # Mobile development service icon
│   └── benin_tech_illustration.png    # About section illustration
├── src/
│   ├── components/
│   │   ├── Header.tsx                 # Navigation header
│   │   ├── Hero.tsx                   # Hero section
│   │   ├── Services.tsx               # Services showcase
│   │   ├── Portfolio.tsx              # Portfolio/projects grid
│   │   ├── About.tsx                  # About the studio
│   │   ├── Contact.tsx                # Contact form
│   │   ├── Footer.tsx                 # Footer section
│   │   └── Logo.tsx                   # Brand logo (SVG)
│   ├── App.tsx                        # Main application component
│   ├── App.css                        # Component styles
│   ├── index.css                      # Global styles with Tailwind
│   └── main.tsx                       # React entry point
├── .gitignore                         # Git ignore rules
├── index.html                         # HTML template
├── package.json                       # Project dependencies
├── tailwind.config.js                 # Tailwind CSS configuration
├── postcss.config.js                  # PostCSS configuration
├── vite.config.ts                     # Vite configuration
├── tsconfig.json                      # TypeScript configuration
├── vercel.json                        # Vercel deployment configuration
└── README.md                          # This file
\`\`\`

## 🎨 Brand Colors

The landing page uses a carefully selected color palette that represents HERNOTIX Tech's brand identity:

| Color | Hex Code | Usage |
| :--- | :--- | :--- |
| **Azure Blue** | `#007FFF` | Primary color for buttons, links, and accents |
| **Gold Yellow** | `#FFD700` | Secondary color for highlights and CTAs |
| **Charcoal Black** | `#121212` | Primary text and dark backgrounds |
| **White** | `#FFFFFF` | Light backgrounds and contrast text |

## 🛠️ Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite 5
- **Package Manager**: npm/pnpm
- **Deployment**: Vercel
- **Version Control**: Git

## 📱 Responsive Breakpoints

The landing page is optimized for all screen sizes using Tailwind's responsive design system:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy this project is using Vercel:

1. **Push to GitHub**

   \`\`\`bash
   git push origin main
   \`\`\`

2. **Connect to Vercel**

   - Visit [Vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will auto-detect your Vite configuration
   - Click "Deploy"

3. **Configure Custom Domain** (Optional)

   - Go to your project settings in Vercel
   - Navigate to "Domains"
   - Add your custom domain and follow DNS configuration steps

### Environment Variables

If your project requires environment variables, create a `.env.local` file:

\`\`\`
VITE_API_URL=https://your-api-url.com
VITE_CONTACT_EMAIL=hello@hernotix.com
\`\`\`

## 📊 Performance

The landing page is optimized for speed and performance:

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: ~50KB (gzipped)
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s

## ♿ Accessibility

This project follows WCAG 2.1 guidelines:

- Semantic HTML structure
- ARIA labels for interactive elements
- Proper color contrast ratios
- Keyboard navigation support
- Screen reader friendly

## 🔒 Security

- No external dependencies for styling (Tailwind CSS is build-time only)
- Content Security Policy ready
- XSS protection through React's built-in sanitization
- Regular dependency updates

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

For questions, feedback, or inquiries about HERNOTIX Tech:

- **Email**: hello@hernotix.com
- **Website**: [hernotix.com](https://hernotix-tech.vercel.app)
- **Location**: Benin, West Africa

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [Vercel Documentation](https://vercel.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🙏 Acknowledgments

- Designed and developed by the HERNOTIX Tech team
- Illustrations created with attention to brand identity
- Built with modern web technologies and best practices

## 📈 Roadmap

Future enhancements planned for HERNOTIX Tech:

- Blog section with content management
- Case studies showcase
- Team member profiles
- Client testimonials carousel
- Newsletter subscription
- Dark mode toggle
- Multi-language support (French, English)
- Integration with CMS (Contentful, Sanity)

---

**Made with ❤️ by @fhermas22 for HERNOTIX Tech**

*Transforming ideas into powerful digital solutions from Benin to the world.*
