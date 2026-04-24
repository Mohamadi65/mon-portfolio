"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSelector } from "./language-selector"
import { useLanguage } from "@/contexts/language-context"
import {
  Users,
  School,
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  Home,
  UserCheck,
  Gift,
  Settings,
  LogOut,
} from "lucide-react"

export function DashboardNavigation() {
  const pathname = usePathname()
  const { t } = useLanguage()

  const navigation = [
    { name: t("nav.dashboard"), href: "/dashboard", icon: Home },
    { name: t("nav.personnes"), href: "/dashboard/personnes", icon: Users },
    { name: t("nav.familles"), href: "/dashboard/familles", icon: UserCheck },
    { name: t("nav.ecoles"), href: "/dashboard/ecoles", icon: School },
    { name: t("nav.villages"), href: "/dashboard/villages", icon: MapPin },
    { name: t("nav.metiers"), href: "/dashboard/metiers", icon: Briefcase },
    { name: t("nav.rentrees"), href: "/dashboard/rentrees", icon: GraduationCap },
    { name: t("nav.materiels"), href: "/dashboard/materiels", icon: Heart },
    { name: t("nav.dons"), href: "/dashboard/dons", icon: Gift },
    { name: t("nav.utilisateurs"), href: "/dashboard/utilisateurs", icon: Settings },
  ]

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo et titre */}
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="flex items-center space-x-3">
              {/* Logo stylisé inspiré du baobab */}
              <div className="relative">
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-orange-600">
                  <path
                    d="M20 35 L20 25 M15 25 Q20 20 25 25 M12 22 Q20 15 28 22 M10 20 Q20 10 30 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle cx="20" cy="8" r="2" fill="currentColor" />
                  <circle cx="15" cy="12" r="1.5" fill="currentColor" />
                  <circle cx="25" cy="12" r="1.5" fill="currentColor" />
                  <circle cx="12" cy="18" r="1" fill="currentColor" />
                  <circle cx="28" cy="18" r="1" fill="currentColor" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold">
                  <span className="text-orange-600">SAPAGA</span>{" "}
                  <span className="text-gray-800 dark:text-gray-200">MANAGEMENT</span>
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Système de gestion communautaire</p>
              </div>
            </Link>
          </div>

          {/* Navigation desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors hover:text-orange-600",
                    isActive
                      ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                      : "text-gray-700 dark:text-gray-300 hover:text-orange-600",
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <ThemeToggle />
            <Link
              href="/"
              className="text-gray-600 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-500 transition-colors text-sm font-medium"
            >
              {t("nav.publicSite")}
            </Link>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-500 transition-colors">
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:block text-sm font-medium">{t("nav.logout")}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
