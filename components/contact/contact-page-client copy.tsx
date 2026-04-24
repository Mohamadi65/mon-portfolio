"use client"

import { useState } from "react"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Send,
  Users,
  Shield,
} from "lucide-react"

import type { Locale } from "@/lib/i18n-config"

import { Navbar } from "@/components/layout/navbar"
import { SiteFooter } from "@/components/layout/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type Props = {
  dictionary: Record<string, string>
  locale: Locale
}

export default function ContactPageClient({ dictionary }: Props) {
  const t = (key: string) => dictionary?.[key] ?? key

  const phone = "05.63.98.50.44"
  const phoneHref = "0563985044"

  // 👉 remplace par ton vrai email si besoin
  const email = "judo.club.mazamet@gmail.com"

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  // Version simple sans backend :
  // envoie vers mailto avec sujet + message préremplis
  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(
    form.subject || "Message depuis le site",
  )}&body=${encodeURIComponent(
    `Nom : ${form.name}\nEmail : ${form.email}\n\n${form.message}`,
  )}`

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
      <Navbar t={t} />

      <main
        id="main-content"
        className="mx-auto flex-1 w-full max-w-6xl px-4 py-10 md:px-6 lg:px-8"
      >
        {/* Header */}
        <header className="mb-10 text-center md:text-left">
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {t("contact.breadcrumb") || "Contact"}
          </p>
          <h1 className="mt-1 text-3xl font-bold text-slate-900 dark:text-slate-50">
            {t("contact.title") || "Contact"}
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            {t("contact.description") ||
              "Vous pouvez nous joindre par téléphone, par email, ou venir nous rencontrer au dojo."}
          </p>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Bloc infos */}
          <div className="space-y-6">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                {t("contact.getInTouch") || "Nous joindre"}
              </h2>

              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-pink-50 p-2 dark:bg-pink-900/30">
                    <Phone className="h-5 w-5 text-pink-700 dark:text-pink-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-50">
                      {t("contact.phoneLabel") || "Téléphone"}
                    </p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {t("contact.phoneHours") ||
                        "Vous pouvez nous joindre aux heures des cours."}
                    </p>
                    <a
                      href={`tel:${phoneHref}`}
                      className="mt-2 inline-flex rounded-full bg-pink-50 px-3 py-1 text-sm font-medium text-pink-700 hover:bg-pink-100 dark:bg-pink-900/30 dark:text-pink-300"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-blue-50 p-2 dark:bg-blue-900/30">
                    <Mail className="h-5 w-5 text-blue-700 dark:text-blue-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-50">
                      {t("contact.emailLabel") || "Email"}
                    </p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {t("contact.emailText") ||
                        "Pour vos messages par email, utilisez le formulaire ci-contre."}
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className="mt-2 inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-amber-50 p-2 dark:bg-amber-900/30">
                    <MapPin className="h-5 w-5 text-amber-700 dark:text-amber-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-50">
                      {t("contact.addressLabel") || "Adresse"}
                    </p>
                    <div className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      <p>Dojo André Adam – 1er étage</p>
                      <p>63 rue des Cordes</p>
                      <p>81200 MAZAMET</p>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Dojo+Andr%C3%A9+Adam+63+rue+des+Cordes+81200+Mazamet"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-300"
                    >
                      {t("contact.openMap") || "Ouvrir la carte"}
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <article className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-2">
                  <Clock3 className="h-5 w-5 text-slate-500 dark:text-slate-300" />
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                    {t("contact.hoursTitle") || "Horaires de contact"}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  {t("contact.hoursText") ||
                    "Le téléphone est à privilégier pendant les horaires des cours."}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-slate-500 dark:text-slate-300" />
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                    {t("contact.teachersTitle") || "Professeurs"}
                  </h3>
                </div>
                <div className="mt-3 space-y-2 text-sm">
                  <p className="text-slate-600 dark:text-slate-300">
                    {t("contact.judoTeachersText") ||
                      "Pour joindre les professeurs de judo :"}
                    {" "}
                    <Link
                      href="/cours/judo"
                      className="font-medium text-blue-700 underline underline-offset-4 dark:text-blue-300"
                    >
                      {t("contact.seeJudo") || "voir ici"}
                    </Link>
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    {t("contact.aikidoTeachersText") ||
                      "Pour joindre les professeurs d’aïkido :"}
                    {" "}
                    <Link
                      href="/cours/aikido"
                      className="font-medium text-blue-700 underline underline-offset-4 dark:text-blue-300"
                    >
                      {t("contact.seeAikido") || "voir ici"}
                    </Link>
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* Formulaire */}
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-2">
              <div className="rounded-xl bg-emerald-50 p-2 dark:bg-emerald-900/30">
                <Shield className="h-5 w-5 text-emerald-700 dark:text-emerald-300" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                  {t("contact.formTitle") || "Envoyer un message"}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {t("contact.formDescription") ||
                    "Remplissez le formulaire ci-dessous pour nous écrire."}
                </p>
              </div>
            </div>

            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                window.location.href = mailtoHref
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    {t("contact.form.name") || "Nom"}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t("contact.form.namePlaceholder") || "Votre nom"}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    {t("contact.form.email") || "Email"}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={
                      t("contact.form.emailPlaceholder") || "votre@email.com"
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  {t("contact.form.subject") || "Sujet"}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder={
                    t("contact.form.subjectPlaceholder") || "Objet de votre message"
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  {t("contact.form.message") || "Message"}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={
                    t("contact.form.messagePlaceholder") || "Votre message..."
                  }
                  className="min-h-[180px]"
                  required
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t("contact.form.notice") ||
                    "Ce formulaire ouvre votre messagerie avec le message prérempli."}
                </p>

                <Button type="submit" className="inline-flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  {t("contact.form.submit") || "Envoyer"}
                </Button>
              </div>
            </form>
          </article>
        </section>
      </main>

      <SiteFooter t={t} />
    </div>
  )
}