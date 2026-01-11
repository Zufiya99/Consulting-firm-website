# StratEdge - Strategic Consulting & Digital Transformation Website

<div align="center">

**A modern, professional website for StratEdge - a future-ready strategic advisory firm**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 📋 About This Website

This is the official website for **StratEdge**, a strategic advisory firm that specializes in helping enterprises navigate the complex intersection of finance, technology, and business transformation. The website serves as a comprehensive digital platform showcasing the company's expertise, services, insights, and career opportunities.

### What is StratEdge?

StratEdge is a future-ready strategic advisory firm that provides expert consulting services across multiple domains:

- **Audit & Assurance** - Comprehensive financial auditing and assurance services
- **Tax & Regulatory** - Expert tax planning, compliance, and regulatory advisory
- **Advisory & Strategy** - Strategic consulting for business growth and transformation
- **Digital Transformation** - AI integration, cloud migration, and process automation
- **ESG & Sustainability** - Environmental, social, and governance consulting

### Website Purpose

This website is designed to:
- Showcase StratEdge's professional services and expertise
- Provide detailed information about each service offering
- Share industry insights and thought leadership through blog articles
- Attract top talent through a comprehensive careers section
- Enable potential clients to easily contact and engage with the firm
- Present the company's values, team, and global presence

---

## ✨ Key Features

### 🎨 Modern Design & User Experience
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Beautiful Animations**: Smooth, professional animations powered by Framer Motion
- **Interactive Components**: Engaging UI elements with hover effects and transitions
- **Dark Theme**: Modern dark theme optimized for professional presentation
- **Gradient Effects**: Beautiful gradient backgrounds and text effects throughout

### 📄 Comprehensive Pages

1. **Home Page**
   - Hero section with compelling value proposition
   - Service overview cards
   - Client testimonials and trust indicators
   - Call-to-action sections

2. **Services Page**
   - Detailed service descriptions for all 5 core offerings
   - Interactive service cards with hover effects
   - Feature lists for each service
   - Why choose StratEdge section

3. **About Page**
   - Company history and timeline
   - Core values presentation
   - Leadership team showcase
   - Global office locations
   - Company statistics with animated counters

4. **Insights/Blog**
   - Article listing page
   - Detailed article pages with rich content
   - Category filtering
   - Social sharing functionality
   - Author information

5. **Careers Page**
   - Job listings with filtering
   - Department-based job categories
   - Search functionality
   - Company culture and benefits
   - Application process information

6. **Contact Page**
   - Contact form with validation
   - Multiple contact methods (email, phone, address)
   - Office locations worldwide
   - Business hours information
   - Interactive map visualization

### 🚀 Technical Features
- **Server-Side Rendering (SSR)**: Fast page loads with Next.js SSR
- **Type Safety**: Full TypeScript implementation
- **Component Library**: Reusable UI components built with Radix UI
- **Form Handling**: React Hook Form with Zod validation
- **Analytics**: Vercel Analytics integration
- **SEO Optimized**: Proper meta tags and semantic HTML

---

## 🛠️ Tech Stack

### Core Technologies
- **[Next.js 16](https://nextjs.org/)** - React framework for production
- **[React 19](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework

### Key Libraries
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[React Hook Form](https://react-hook-form.com/)** - Form handling
- **[Zod](https://zod.dev/)** - Schema validation
- **[Vercel Analytics](https://vercel.com/analytics)** - Web analytics

---

## 📦 Project Structure

```
Consulting-firm-website/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── careers/           # Careers page
│   ├── contact/           # Contact page
│   ├── insights/          # Blog/insights pages
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── footer.tsx        # Footer component
│   ├── navigation.tsx    # Navigation bar
│   ├── hero-section.tsx  # Hero section
│   └── ...               # Other components
├── public/               # Static assets
│   ├── images/           # Image files
│   └── ...               # Other assets
├── lib/                  # Utility functions
├── styles/               # Additional styles
├── next.config.mjs       # Next.js configuration
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.x or higher
- **npm** 9.x or higher (or **yarn** / **pnpm**)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Consulting-firm-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

---

## 🌐 Deployment on Vercel

This project is optimized for deployment on Vercel. Follow these steps to deploy:

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import project to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure project settings**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to production**
   ```bash
   vercel --prod
   ```

### Environment Variables

If you need to add environment variables:
1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add your variables (e.g., API keys, database URLs)
4. Redeploy your application

### Custom Domain

To add a custom domain:
1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your domain
4. Follow DNS configuration instructions

---

## 🔧 Configuration

### Next.js Configuration

The project uses `next.config.mjs` with the following settings:
- TypeScript build errors are ignored (for development)
- Images are unoptimized (can be changed for production)

### Tailwind CSS

Tailwind CSS is configured with:
- Custom color scheme matching the brand
- Animation utilities
- Responsive breakpoints

---

## 📱 Browser Support

This website supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 🤝 Contributing

This is a private project for StratEdge. For any updates or modifications, please contact the development team.

---

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

## 👨‍💻 Developer

**Made with ❤️ by [Zufiya Idrisi](https://www.linkedin.com/in/zufiyaidrisi9797/)**

---

## 📞 Support

For questions or support regarding this website:
- **Email**: idrisizufiya@gmail.com
- **Website**: [StratEdge](https://zufiya-idrisi.netlify.app/)

---

## 🎯 Future Enhancements

Potential features for future updates:
- Multi-language support
- Client portal integration
- Live chat functionality
- Advanced analytics dashboard
- Content Management System (CMS) integration
- Email newsletter subscription

---

**Built with modern web technologies for optimal performance and user experience.**
