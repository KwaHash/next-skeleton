# Next.js Skeleton Project

A modern, production-ready Next.js skeleton application built with TypeScript, featuring a comprehensive UI component library, state management, and development tools.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom design system
- **shadcn/ui** component library with Radix UI primitives
- **Redux Toolkit** for state management
- **TanStack Query** for server state management
- **Dark/Light theme** support with next-themes
- **ESLint & Prettier** for code quality
- **Husky** for git hooks
- **HolyLoader** for loading indicators

## 🛠️ Tech Stack

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **TypeScript ESLint** - TypeScript linting

## 📁 Project Structure

```
next-skeleton/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── providers.tsx      # App providers
│   └── manifest.ts        # PWA manifest
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── dialog/           # Dialog components
│   ├── header/           # Navigation components
│   └── ...               # Other components
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries
│   ├── config.ts         # Environment configuration
│   ├── fonts.ts          # Font configurations
│   └── utils.ts          # Utility functions
├── providers/            # React context providers
├── stores/               # Redux store configuration
├── styles/               # Global styles
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd next-skeleton
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure the following variables:
   ```env
   NEXT_PUBLIC_APP_ENV=development
   NEXT_PUBLIC_HOST=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run prepare` - Install Husky git hooks

## 🎨 UI Components

Use the shadcn/ui CLI to add new components:

```bash
npx shadcn@latest add <component-name>
```

## 🔧 State Management

### Redux Toolkit
- Global application state
- Dialog management
- Type-safe selectors and actions

### TanStack Query
- Server state management
- Caching and synchronization
- Background updates

## 🔍 Code Quality

- **ESLint** configuration with TypeScript support
- **Prettier** for consistent code formatting
- **Husky** git hooks for pre-commit checks
- **TypeScript** strict mode enabled

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- **Netlify**
- **AWS Amplify**
- **Railway**
- **Docker** (with custom Dockerfile)

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org)
- [TanStack Query Documentation](https://tanstack.com/query)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request