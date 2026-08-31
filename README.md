# Portfolio Tracker Pro

A **production-ready investment portfolio management SaaS platform** built with modern web technologies. Track your investment portfolio, execute trades in real-time, and analyze performance metrics with beautiful charts and dashboards.

![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791?style=flat-square&logo=postgresql)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## 🎯 Overview

Portfolio Tracker Pro is a **multi-user SaaS application** where investors can:

- ✅ Create accounts with secure authentication
- ✅ Manage multiple investment portfolios
- ✅ Track real-time asset prices (stocks, crypto, ETFs)
- ✅ Execute buy/sell transactions with full history
- ✅ View performance metrics with interactive charts
- ✅ Monitor asset allocation and P&L
- ✅ Watch live asset watchlist with price tickers
- ✅ Access responsive, professional dashboards

**Built to demonstrate enterprise-grade full-stack development.**

---

## 🛠️ Tech Stack

### Frontend

- **Next.js 16.3** — React framework with App Router & Server Components
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first styling
- **Shadcn UI** — Production-ready component library
- **React Query** — Data fetching & caching
- **Recharts** — Financial data visualization
- **Zustand** — Client-side state management

### Backend & Database

- **Node.js** — JavaScript runtime
- **PostgreSQL** — Relational database
- **Prisma ORM** — Type-safe database client
- **NextAuth.js** — Authentication & sessions
- **Server Actions** — Next.js mutations

### Infrastructure & DevOps

- **Vercel** — Deployment platform
- **GitHub** — Version control
- **GitHub Actions** — CI/CD pipelines
- **Environment Variables** — Secure configuration

---

## 📊 Project Structure

portfolio-tracker-pro/
├── app/ # Next.js App Router
│ ├── layout.tsx # Root layout with sidebar
│ ├── page.tsx # Homepage
│ ├── (auth)/ # Authentication routes
│ │ ├── login/page.tsx
│ │ └── signup/page.tsx
│ ├── dashboard/ # Main dashboard
│ │ ├── page.tsx
│ │ └── components/
│ │ ├── PortfolioOverview.tsx
│ │ ├── PerformanceChart.tsx
│ │ └── AssetAllocationChart.tsx
│ ├── portfolio/ # Portfolio management
│ │ ├── [id]/page.tsx
│ │ ├── [id]/holdings/page.tsx
│ │ └── [id]/transactions/page.tsx
│ ├── watchlist/ # Asset watchlist
│ │ └── page.tsx
│ ├── api/ # API routes
│ │ ├── auth/ # NextAuth handlers
│ │ ├── portfolios/ # Portfolio CRUD
│ │ ├── transactions/ # Trade execution
│ │ └── prices/ # Market data
│ └── globals.css # Global styles
│
├── components/
│ ├── ui/ # Shadcn UI components
│ │ ├── button.tsx
│ │ ├── card.tsx
│ │ ├── table.tsx
│ │ └── ... (20+ components)
│ └── (shared components here)
│
├── lib/
│ └── utils.ts # Utility functions
│
├── prisma/
│ └── schema.prisma # Database schema
│
├── public/ # Static assets
│
├── .env.local # Environment variables (local)
├── .gitignore # Git ignore rules
├── next.config.ts # Next.js configuration
├── tsconfig.json # TypeScript configuration
├── tailwind.config.ts # Tailwind CSS configuration
├── package.json # Dependencies
└── README.md # This file

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20+ (LTS recommended)
- **npm** 10+
- **PostgreSQL** 15+ (local or cloud)
- **Git** 2.40+

### Installation

**1. Clone the repository:**

```bash
git clone https://github.com/[YourUsername]/portfolio-tracker-pro.git
cd portfolio-tracker-pro
```

**2. Install dependencies:**

```bash
npm install
```

**3. Set up environment variables:**

Create a `.env.local` file in the project root:

```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio_tracker"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# API
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
```

**4. Set up the database:**

```bash
npx prisma migrate dev --name init
```

This creates tables based on the schema.

**5. Start the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📖 Usage

### Login

- Navigate to `/login`
- Create a new account or use demo credentials
- You're redirected to the dashboard

### Create a Portfolio

- Click "New Portfolio" on the dashboard
- Enter a name and initial cash amount
- Your portfolio appears in the sidebar

### Execute Trades

- Go to your portfolio
- Click "Buy" or "Sell"
- Select asset and quantity
- Confirm transaction
- See it reflected in holdings and performance

### View Analytics

- Dashboard shows portfolio performance over time
- Asset allocation pie chart
- Recent transactions table
- Real-time P&L metrics

### Monitor Watchlist

- Add symbols to your watchlist
- See real-time price updates
- Click to add holdings to your portfolio

---

## 🔄 Git Workflow (Development)

We follow a **feature branch strategy**:

```bash
# Create a feature branch
git checkout -b feature/feature-name

# Make commits frequently
git add .
git commit -m "Descriptive message"

# Push to GitHub
git push -u origin feature/feature-name

# When complete, merge to develop
git checkout develop
git pull
git merge feature/feature-name
git push

# Deploy to production (main branch only)
git checkout main
git merge develop
git push
```

**Branches:**

- `main` — Production-ready code (deployed)
- `develop` — Development integration branch
- `feature/*` — Individual features

---

## 📈 Development Roadmap

### ✅ Phase 1: Foundation & Setup (CURRENT)

- [x] Project initialization
- [x] Git setup with branching strategy
- [x] Next.js with TypeScript & Tailwind
- [x] Shadcn UI component library
- [ ] README documentation

### 🔄 Phase 2: Authentication & Core Layout (NEXT)

- [ ] NextAuth.js setup
- [ ] Login/signup pages
- [ ] Route protection middleware
- [ ] Global layout with sidebar
- [ ] Command menu (Cmd+K)

### 📊 Phase 3: Dashboard & Portfolio Core

- [ ] Portfolio CRUD operations
- [ ] Holdings list component
- [ ] Portfolio overview dashboard
- [ ] Basic styling & responsiveness

### 💰 Phase 4: Trading Engine

- [ ] Buy/Sell transaction logic
- [ ] Transaction history
- [ ] P&L calculations
- [ ] Form validation & error handling

### 📈 Phase 5: Real-Time Data & Charts

- [ ] Mock market data service
- [ ] React Query integration
- [ ] Real-time watchlist (polling)
- [ ] Performance charts (Recharts)
- [ ] Asset allocation visualization

### 🚀 Phase 6: Polish & Deployment

- [ ] Performance optimization
- [ ] Error boundaries
- [ ] Loading states & skeletons
- [ ] Mobile responsiveness
- [ ] Deployment to Vercel
- [ ] GitHub Actions CI/CD

---

## 🧪 Testing (Coming Soon)

```bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Check coverage
npm run test:coverage
```

---

## 📦 Deployment

### Deploy to Vercel (Recommended)

Vercel is the creator of Next.js and makes deployment seamless.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Follow the prompts. Your app is live in minutes!

**Environment variables on Vercel:**

1. Go to project settings
2. Add same `.env.local` variables
3. Redeploy

---

## 🤝 Contributing

This is a personal project, but contributions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License — see [LICENSE](LICENSE) file for details.

---

## 🙋 About

Built by **Humphrey** as a portfolio project to demonstrate full-stack development capabilities at enterprise scale.

**Key Learning Areas:**

- Full-stack development with Next.js
- Database design & optimization
- Authentication & security
- Real-time data handling
- Component architecture
- State management
- DevOps & deployment

---
c
## 📞 Contact

- **GitHub:** [github.com/[YourUsername]](https://github.com/[YourUsername])
- **Email:** your.email@example.com
- **LinkedIn:** [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Shadcn UI](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Prisma](https://www.prisma.io)

---

**Happy coding! 🚀**
