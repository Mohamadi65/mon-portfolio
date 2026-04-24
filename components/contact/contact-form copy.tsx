/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

type FieldState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm({ t }: any) {
  const [values, setValues] = useState<FieldState>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  return (
    <motion.form
      action="mailto:freelancemohamadi65@gmail.com"
      method="POST"
      encType="text/plain"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="card space-y-6 p-6 md:p-8"
    >
      <div>
        <p className="badge mb-4">{t("contact.form.badge")}</p>

        <h2 className="text-2xl font-bold tracking-tight text-slate-950">
          {t("contact.form.title")}
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          {t("contact.form.description")}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <FloatingInput
          name="name"
          type="text"
          value={values.name}
          label={t("contact.form.name")}
          onChange={handleChange}
          required
        />

        <FloatingInput
          name="email"
          type="email"
          value={values.email}
          label={t("contact.form.email")}
          onChange={handleChange}
          required
        />
      </div>

      <FloatingTextarea
        name="message"
        value={values.message}
        label={t("contact.form.message")}
        onChange={handleChange}
        required
      />

      <motion.button
        type="submit"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="group inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-bold text-white shadow-lg shadow-slate-950/10 transition hover:bg-slate-800"
      >
        <span className="text-white">{t("contact.form.submit")}</span>
        <Send className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
      </motion.button>
    </motion.form>
  );
}

type FloatingInputProps = {
  name: string;
  type: string;
  value: string;
  label: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function FloatingInput({
  name,
  type,
  value,
  label,
  required,
  onChange,
}: FloatingInputProps) {
  const isActive = value.length > 0;

  return (
    <motion.label
      animate={{
        borderColor: isActive ? "rgba(37, 99, 235, 0.45)" : "#e2e8f0",
        boxShadow: isActive
          ? "0 0 0 4px rgba(37, 99, 235, 0.08)"
          : "0 0 0 0 rgba(37, 99, 235, 0)",
      }}
      className="relative block rounded-2xl border bg-white px-4 pb-3 pt-5 transition"
    >
      <motion.span
        animate={{
          y: isActive ? -7 : 0,
          scale: isActive ? 0.86 : 1,
          color: isActive ? "#2563eb" : "#64748b",
        }}
        transition={{ duration: 0.18 }}
        className="pointer-events-none absolute left-4 top-4 origin-left text-sm font-medium"
      >
        {label}
      </motion.span>

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-3 w-full bg-transparent text-sm font-semibold text-slate-950 outline-none"
      />
    </motion.label>
  );
}

type FloatingTextareaProps = {
  name: string;
  value: string;
  label: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function FloatingTextarea({
  name,
  value,
  label,
  required,
  onChange,
}: FloatingTextareaProps) {
  const isActive = value.length > 0;

  return (
    <motion.label
      animate={{
        borderColor: isActive ? "rgba(37, 99, 235, 0.45)" : "#e2e8f0",
        boxShadow: isActive
          ? "0 0 0 4px rgba(37, 99, 235, 0.08)"
          : "0 0 0 0 rgba(37, 99, 235, 0)",
      }}
      className="relative block rounded-2xl border bg-white px-4 pb-3 pt-5 transition"
    >
      <motion.span
        animate={{
          y: isActive ? -7 : 0,
          scale: isActive ? 0.86 : 1,
          color: isActive ? "#2563eb" : "#64748b",
        }}
        transition={{ duration: 0.18 }}
        className="pointer-events-none absolute left-4 top-4 origin-left text-sm font-medium"
      >
        {label}
      </motion.span>

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={6}
        className="mt-3 min-h-36 w-full resize-none bg-transparent text-sm font-semibold leading-6 text-slate-950 outline-none"
      />
    </motion.label>
  );
}