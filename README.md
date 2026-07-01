# Wanko Joel Nathan - Developer Portfolio

🌐 **Live Demo:** [https://my-portfolio-one-kappa-15.vercel.app/](https://my-portfolio-one-kappa-15.vercel.app/)

A modern, responsive, and highly interactive personal developer portfolio and blog built with React, Vite, and Tailwind CSS. 

This project serves as a showcase of my skills, technical stack, services, and past projects, while also functioning as a dynamic Markdown-powered blog system.

## 🚀 Key Features
 
- **Modern Tech Stack**: Built on React 18, Vite, TypeScript, and Tailwind CSS.
- **Markdown Blog System**: Write blog posts natively in Markdown (powered by `gray-matter` & `react-markdown`).
- **Interactive UI**: Fully accessible components using `shadcn/ui` and `Radix UI`.
- **Smooth Animations**: Scroll-triggered animations seamlessly integrated using `Framer Motion`.
- **Functioning Contact Form**: Direct-to-inbox messaging via `EmailJS` (no backend required).
- **Dark/Light Mode**: Smooth, one-click system-aware theme toggling.
- **Image Optimization**: Custom scripts for WebP image conversion to ensure lightning-fast loads.
- **SEO Ready**: Dynamic meta tags and titles managed via `react-helmet-async`.
- **Automated Deployments**: CI/CD configured for instant Vercel deployments.

## 🛠️ Technologies Used

- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) + [EmailJS](https://www.emailjs.com/)

---

## 💻 Getting Started (Local Development)

To run this project locally, you will need Node.js and npm installed on your machine.

### 1. Clone the repository

```sh
# Clone via HTTPS or SSH
git clone <repository-url>

# Navigate into the directory
cd My-Portfolio
```

### 2. Install dependencies

```sh
npm install
```

### 3. Environment Variables

Copy the example environment file and fill in your EmailJS credentials if you intend to test the contact form:

```sh
cp .env.example .env
```

Ensure your `.env` contains the correct variables:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Start the development server

```sh
npm run dev
```

The app will start running on your local network (usually `http://localhost:5173` or `http://localhost:8080`).

---

## 📁 Project Structure highlights

- `/src/posts/*.md` - This is where all blog posts live. Just add a new markdown file and it automatically appears on the site!
- `/src/data/projects.ts` - Centralized data file for managing the portfolio projects grid.
- `/src/components/sections/` - Modular homepage sections (Hero, About, Skills, Contact, etc.).
- `/scripts/` - Custom Node scripts (e.g. `optimize-images.mjs` for WebP conversion).

## 🚀 Available Scripts

In the project directory, you can run:

- `npm run dev` - Starts the development server.
- `npm run build` - Builds the app for production (outputs to `/dist`).
- `npm run preview` - Previews the production build locally.
- `npm run lint` - Runs ESLint to check for code issues.
- `npm run optimize-images` - Converts raw images to optimized `.webp` formats.
