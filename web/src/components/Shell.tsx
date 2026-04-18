import { NavLink } from 'react-router-dom'
import type { ReactNode } from 'react'
import panwLogoPositive from '../assets/brand/panw-logo-positive.svg'
import panwLogoWhite from '../assets/brand/panw-logo-white.svg'

interface ShellProps {
  children: ReactNode
  dark: boolean
  onToggleDark: () => void
}

const NAV_ITEMS = [
  { to: '/tenants',  label: 'Tenants'  },
  { to: '/profiles', label: 'Profiles' },
  { to: '/reports',  label: 'Reports'  },
  { to: '/diffs',    label: 'Diffs'    },
]

export default function Shell({ children, dark, onToggleDark }: ShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0a]">
      <header className="border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0a0a0a] sticky top-0 z-40 shadow-sm dark:shadow-none">
        <div className="max-w-screen-xl mx-auto flex items-center gap-6 px-4 h-14">

          {/* Logo lockup — positive in light, white in dark */}
          <div className="flex items-center gap-3 shrink-0" style={{ paddingLeft: '0px' }}>
            {/* Light mode logo */}
            <img
              src={panwLogoPositive}
              alt="Palo Alto Networks"
              height={28}
              className="h-7 w-auto dark:hidden"
              style={{ minWidth: 0 }}
            />
            {/* Dark mode logo */}
            <img
              src={panwLogoWhite}
              alt="Palo Alto Networks"
              height={28}
              className="h-7 w-auto hidden dark:block"
              style={{ minWidth: 0 }}
            />
            {/* Product name — separated with clearspace */}
            <span className="hidden sm:block text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 select-none pl-2 border-l border-slate-200 dark:border-slate-700">
              PAIC
            </span>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-0.5 flex-1" aria-label="Main navigation">
            {NAV_ITEMS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-cyber-500 bg-cyber-500/10 dark:text-cyber-400 dark:bg-cyber-500/15'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Theme toggle — prominent, ~40×40 hit area */}
          <button
            onClick={onToggleDark}
            aria-label="Toggle theme"
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex items-center justify-center w-10 h-10 rounded transition-colors
                       text-slate-500 hover:text-slate-900 hover:bg-slate-100
                       dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-500"
          >
            {dark ? (
              /* Sun icon — switch to light */
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
              </svg>
            ) : (
              /* Moon icon — switch to dark */
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-screen-xl mx-auto w-full px-4 py-6">
        {children}
      </main>
    </div>
  )
}
