/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"
import { useEffect, useMemo, useRef, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"

import { useT } from "@/components/I18nProvider"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSelector } from "@/components/language-selector"
import { useAuth } from "@/contexts/AuthContext"



import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import {
  LayoutDashboard,
  Users,
  Home,
  School,
  MapPin,
  Briefcase,
  Calendar,
  Package,
  Gift,
  UserCog,
  ExternalLink,
  LogOut,
  User,
  Settings,

  ChevronDown, Shield, GraduationCap
} from "lucide-react"
import Image from "next/image"

const navigation = [
  {
    nameKey: "dashboard.overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    nameKey: "dashboard.events",
    href: "/dashboard/evenements",
    icon: Calendar,
  },
  {
    nameKey: "dashboard.seasons",
    href: "/dashboard/saisons",
    icon: Calendar,
  },
  {
    nameKey: "dashboard.categories",
    href: "/dashboard/categories",
    icon: Gift,
  },
  {
    nameKey: "dashboard.galleries",
    href: "/dashboard/galeries",
    icon: Briefcase,
  },
  {
    nameKey: "dashboard.roles",
    href: "/dashboard/roles",
    icon: Users,
  },
  {
    nameKey: "dashboard.permissions",
    href: "/dashboard/permissions",
    icon: Home,
  },
  {
    nameKey: "dashboard.disciplines",
    href: "/dashboard/disciplines",
    icon: School,
  },
  {
    nameKey: "dashboard.belts",
    href: "/dashboard/ceintures",
    icon: Gift,
  },
  {
    nameKey: "dashboard.courses",
    href: "/dashboard/cours",
    icon: Calendar,
  },
  // {
  //   nameKey: "dashboard.licencies",
  //   href: "/dashboard/licencies",
  //   icon: School,
  // },
  {
    nameKey: "dashboard.partners",
    href: "/dashboard/partenaires",
    icon: MapPin,
  },
  {
    nameKey: "dashboard.articles",
    href: "/dashboard/articles",
    icon: Briefcase,
  },
  {
    nameKey: "dashboard.clubs",
    href: "/dashboard/clubs",
    icon: Package,
  },
  {
    nameKey: "dashboard.users",
    href: "/dashboard/users",
    icon: UserCog,
  },
]

export function AppSidebar({ isAdmin }: { isAdmin: boolean }) {
  const pathname = usePathname()
  const t = useT()
  const router = useRouter()
  const [isLogoutLoading, setIsLogoutLoading] = useState(false)

  // auth
  const { logout } = useAuth()

  const handleLogout = async () => {
    setIsLogoutLoading(true)
    await logout()
    router.push("/login")
    setIsLogoutLoading(false)
  }

   const filteredNav = useMemo(() => {
  const adminOnlyRoutes = [
    "/dashboard/users",
    "/dashboard/roles",
    "/dashboard/permissions",
  ]

  return navigation.filter((item) => {
    if (adminOnlyRoutes.includes(item.href)) {
      return isAdmin
    }
    return true
  })
}, [isAdmin])

const activeHref = useMemo(() => {
  const matches = filteredNav
    .filter((item) => pathname === item.href || pathname.startsWith(item.href + "/"))
    .sort((a, b) => b.href.length - a.href.length)

  return matches[0]?.href ?? null
}, [filteredNav, pathname])



  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center space-x-2 px-2">
          <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              MAZAMET AIKIDO
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Management System
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t("dashboard.navigation")}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
{filteredNav.map((item) => {
  const Icon = item.icon
  const isActive = activeHref === item.href

  return (
    <SidebarMenuItem key={item.href}>
      <SidebarMenuButton
        asChild
        isActive={isActive}
        tooltip={t(item.nameKey)}
        className={[
          "relative transition-colors",
          isActive
            ? "bg-orange-100 text-orange-700 hover:bg-orange-100 dark:bg-orange-900/30 dark:text-orange-200 " +
              "before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1 before:rounded-full before:bg-orange-500"
            : "",
          isActive ? "[&>svg]:text-orange-600 dark:[&>svg]:text-orange-300" : "",
        ].join(" ")}
      >
        <Link href={item.href}>
          <Icon />
          <span>{t(item.nameKey)}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
})}

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <SidebarGroup>
          <SidebarGroupContent>
            <div className="flex items-center justify-between px-2 py-2">
              <ThemeToggle />
              {/* tu peux garder ton LanguageSelector pour changer la locale (cookie + refresh) */}
              <LanguageSelector iconOnly />
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/">
                    <ExternalLink />
                    <span>{t("dashboard.publicSite")}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
                >
                  <button onClick={handleLogout} disabled={isLogoutLoading}>
                    <LogOut />
                    <span>{t("dashboard.logout")}</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const t = useT()
  const { user } = useAuth()
  const userData = user?.user;

  
  const router = useRouter()
  const [isLogoutLoading, setIsLogoutLoading] = useState(false)

  // auth
  const { logout } = useAuth()

  const handleLogout = async () => {
    setIsLogoutLoading(true)
    await logout()
    router.push("/login")
    setIsLogoutLoading(false)
  }
  
  const isAdmin = !!userData?.roles?.some((r: any) => r?.nom === "admin");
  console.log("userData", userData);
 console.log("isAdmin", isAdmin)

  return (
    <SidebarProvider>
      <AppSidebar isAdmin={isAdmin} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 ">
          <SidebarTrigger className="-ml-1" />
          <div className="flex items-center justify-between w-full">
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                {t("dash.header.title")}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t("dash.header.subtitle")}
              </p>
            </div>

{userData?.personne && (
  <UserDropdown
    user={userData.personne}
    roles={userData.roles ?? []}
    onLogout={handleLogout}
    t={t}
  />
)}


            <div className="flex items-center space-x-2 md:hidden">
              <ThemeToggle />
              <LanguageSelector iconOnly />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto">
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">{children}</div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}




function UserDropdown({
  user,
  roles,
  onLogout,
  t,
}: {
  user: any
  roles: any[]
  onLogout: () => void
  t: (key: string) => string
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Fermer si click dehors + ESC
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", onDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [])

  const initial = (user?.prenom?.[0] ?? user?.nom?.[0] ?? "U").toUpperCase()

  const primaryRole = useMemo(() => {
    const names = (roles ?? []).map((r: any) => String(r?.nom ?? "").toLowerCase())
    if (names.includes("admin")) return { label: "Admin", Icon: Shield }
    if (names.includes("coach")) return { label: "Coach", Icon: GraduationCap }
    return null
  }, [roles])

  return (
    <div ref={ref} className="relative z-50">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group flex items-center gap-3 select-none"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {/* Pastille online animée */}
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/40" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-emerald-500/30" />
        </span>

        {/* Badge glass */}
        <div
          className={[
            "relative flex items-center gap-3 rounded-full",
            "border border-white/40 bg-white/30 px-3 py-1.5",
            "shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-xl",
            "transition hover:shadow-[0_10px_40px_rgba(0,0,0,0.10)]",
            "dark:border-white/10 dark:bg-white/5",
          ].join(" ")}
        >
          {/* Glow hover */}
          <div
            className={[
              "pointer-events-none absolute -inset-1 rounded-full",
              "opacity-0 blur-xl transition group-hover:opacity-100",
              "bg-gradient-to-r from-orange-500/20 via-emerald-400/20 to-sky-500/20",
            ].join(" ")}
          />

          {/* Avatar + ring lumineux */}
         <div className="relative">
  {user?.photo_url ? (
    <Image
      src={user.photo_url}
      alt="avatar"
      width={36}
      height={36}
      className="h-9 w-9 rounded-full object-cover ring-2 ring-white/70 dark:ring-black/40 shadow-sm"
      referrerPolicy="no-referrer"
      unoptimized
    />
  ) : (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-600 text-white text-sm font-semibold shadow-sm">
      {initial}
    </div>
  )}

  <span
    className={[
      "pointer-events-none absolute -inset-[3px] rounded-full",
      "opacity-70 blur-[1px]",
      "bg-gradient-to-r from-orange-500/60 via-emerald-400/60 to-sky-500/60",
    ].join(" ")}
  />
</div>


          {/* Nom + statut + badge rôle */}
          <div className="leading-tight text-left">
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                {user?.prenom} {user?.nom}
              </p>

              {primaryRole && (
                <span
                  className={[
                    "inline-flex items-center gap-1 rounded-full px-2 py-0.5",
                    "text-[11px] font-medium",
                    "border border-black/5 bg-black/5 text-gray-700",
                    "dark:border-white/10 dark:bg-white/10 dark:text-gray-200",
                  ].join(" ")}
                >
                  <primaryRole.Icon className="h-3 w-3" />
                  {primaryRole.label}
                </span>
              )}
            </div>

            <p className="text-xs text-emerald-600 dark:text-emerald-400">
              {t("dashboard.online")}
            </p>
          </div>

          {/* Flèche ▼ (rotation en CSS) */}
          <span
            className={[
              "ml-1 text-gray-600 dark:text-gray-300 transition-transform duration-200",
              open ? "rotate-180" : "rotate-0",
            ].join(" ")}
            aria-hidden="true"
          >
            <ChevronDown className="h-4 w-4" />
          </span>
        </div>
      </button>

      {/* Dropdown (CSS anim) */}
      <div
        className={[
          "absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl",
          "border border-white/40 bg-white/40 shadow-2xl backdrop-blur-2xl",
          "dark:border-white/10 dark:bg-gray-950/40",
          "origin-top-right transition-all duration-150",
          open ? "pointer-events-auto opacity-100 scale-100 translate-y-0" : "pointer-events-none opacity-0 scale-95 -translate-y-1",
        ].join(" ")}
        role="menu"
      >
        {/* Header */}
        <div className="px-4 py-3 border-b border-white/30 dark:border-white/10">
          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            {user?.prenom} {user?.nom}
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-300 truncate">
            {user?.email}
          </p>
        </div>

        {/* Items */}
        <div className="py-2">
          <DropdownItem
            icon={<User className="h-4 w-4" />}
            label={t("dashboard.profile")}
            onClick={() => setOpen(false)}
          />
          <DropdownItem
            icon={<Settings className="h-4 w-4" />}
            label={t("dashboard.settings")}
            onClick={() => setOpen(false)}
          />

          <div className="my-2 h-px bg-white/30 dark:bg-white/10" />

          <DropdownItem
            icon={<LogOut className="h-4 w-4" />}
            label={t("dashboard.logout")}
            danger
            onClick={onLogout}
          />
        </div>
      </div>
    </div>
  )
}

function DropdownItem({
  icon,
  label,
  onClick,
  danger = false,
}: {
  icon: React.ReactNode
  label: string
  onClick: () => void
  danger?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[  
        "group flex w-full items-center gap-3 px-4 py-2 text-sm transition",
        "hover:bg-white/50 dark:hover:bg-white/5",
        danger
          ? "text-red-600 hover:bg-red-500/10 dark:hover:bg-red-500/10"
          : "text-gray-800 dark:text-gray-100",
      ].join(" ")}
      role="menuitem"
    >
      <span
        className={[
          "flex h-8 w-8 items-center justify-center rounded-xl transition",
          danger
            ? "bg-red-500/10 text-red-600"
            : "bg-black/5 text-gray-700 dark:bg-white/10 dark:text-gray-200",
          "group-hover:scale-[1.03]",
        ].join(" ")}
      >
        {icon}
      </span>
      <span className="font-medium">{label}</span>
    </button>
  )
}

