"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useT } from "@/components/I18nProvider";

export type BaseInputType = "text" | "email" | "number" | "date" | "password";

export type Field =
  | {
      name: string;
      label: string;
      type: BaseInputType;
      required?: boolean;
      rightElement?: React.ReactNode;
      autoComplete?: string;
    }
  | {
      name: string;
      label: string;
      type: "textarea";
      required?: boolean;
      rightElement?: React.ReactNode;
    }
  | {
      name: string;
      label: string;
      type: "select";
      required?: boolean;
      options: Array<{ value: string; label: string }>;
    }
  | { name: string; label: string; type: "checkbox"; required?: boolean };

export type Helpers = {
  getField: (k: string) => any;
  setField: (k: string, v: any) => void;
};

export type CrudModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Record<string, any>) => Promise<void> | void;

  /** Titre COMPLET déjà traduit (ex: "Créer une catégorie", "Edit category") */
  title: string;

  /** Description complète déjà traduite (optionnelle) */
  description?: string;

  mode: "create" | "edit" | "view";

  data?: Record<string, any>;
  fields: Field[];

  renderTop?: (helpers?: Helpers) => React.ReactNode;
  renderBottom?: (helpers: Helpers) => React.ReactNode;
  closeOnSuccess?: boolean;

  /** erreurs de champs (ex: { "cat.nom": ["Le nom est déjà pris."] }) */
  fieldErrors?: Record<string, string[]>;
};

export function CrudModal({
  isOpen,
  onClose,
  onSubmit,
  title,
  description,
  mode,
  data,
  fields,
  renderTop,
  renderBottom,
  closeOnSuccess = true,
  fieldErrors,
}: CrudModalProps) {
  const t = useT();
  const [formData, setFormData] = React.useState<Record<string, any>>(data ?? {});
  const [submitting, setSubmitting] = React.useState(false);
  const isReadOnly = mode === "view";

  React.useEffect(() => {
    if (isOpen) setFormData(data ?? {});
  }, [isOpen, data]);

  const getField = React.useCallback((k: string) => formData?.[k], [formData]);
  const setField = React.useCallback((k: string, v: any) => {
    setFormData((prev) => ({ ...prev, [k]: v }));
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isReadOnly) return onClose();

    setSubmitting(true);
    try {
      await onSubmit(formData);
      if (closeOnSuccess) onClose();
    } finally {
      setSubmitting(false);
    }
  }

  const errFor = (name: string) => fieldErrors?.[name]?.[0];
  const inputErrCls = "border-red-500 focus-visible:ring-red-500";

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent
        onInteractOutside={(e) => {
          const el = e.target as HTMLElement | null;
          if (el && (el.closest("video") || el.closest("[data-keep-dialog]"))) {
            e.preventDefault();
          }
        }}
        onPointerDownOutside={(e) => {
          const el = e.target as HTMLElement | null;
          if (el && (el.closest("video") || el.closest("[data-keep-dialog]"))) {
            e.preventDefault();
          }
        }}
        onEscapeKeyDown={(e) => {
          const active = document.activeElement as HTMLElement | null;
          if (active && (active.closest("video") || active.closest("[data-keep-dialog]"))) {
            e.preventDefault();
          }
        }}
        className="max-w-3xl max-h-[85vh] overflow-y-auto"
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          {renderTop?.({ getField, setField })}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fields.map((field) => {
              const val = getField(field.name);
              const err = errFor(field.name);

              const labelNode = (
                <Label htmlFor={field.name} className="text-sm font-medium">
                  {field.label}
                  {"required" in field && field.required ? (
                    <span className="text-red-500 ml-1">*</span>
                  ) : null}
                </Label>
              );

              if (
                field.type === "text" ||
                field.type === "email" ||
                field.type === "number" ||
                field.type === "date" ||
                field.type === "password"
              ) {
                const hasRight = !!("rightElement" in field && field.rightElement);

                return (
                  <div key={field.name}>
                    {labelNode}
                    <div className="relative">
                      <Input
                        id={field.name}
                        type={field.type}
                        value={val ?? ""}
                        onChange={(e) => setField(field.name, e.target.value)}
                        required={field.required}
                        disabled={isReadOnly}
                        autoComplete={"autoComplete" in field ? field.autoComplete : undefined}
                        className={`mt-1 ${hasRight ? "pr-10" : ""} ${err ? inputErrCls : ""}`}
                      />
                      {"rightElement" in field ? field.rightElement : null}
                    </div>
                    {err && <p className="mt-1 text-xs text-red-600">{err}</p>}
                  </div>
                );
              }

              if (field.type === "textarea") {
                const hasRight = !!("rightElement" in field && field.rightElement);

                return (
                  <div key={field.name} className="md:col-span-2">
                    {labelNode}
                    <div className="relative">
                      <Textarea
                        id={field.name}
                        value={val ?? ""}
                        onChange={(e) => setField(field.name, e.target.value)}
                        required={field.required}
                        disabled={isReadOnly}
                        className={`mt-1 ${hasRight ? "pr-10" : ""} ${err ? inputErrCls : ""}`}
                        rows={4}
                      />
                      {"rightElement" in field ? field.rightElement : null}
                    </div>
                    {err && <p className="mt-1 text-xs text-red-600">{err}</p>}
                  </div>
                );
              }

              if (field.type === "select") {
                const selectValue =
                  val === null || typeof val === "undefined" || val === ""
                    ? undefined
                    : String(val);

                return (
                  <div key={field.name}>
                    {labelNode}
                    <Select
                      value={selectValue}
                      onValueChange={(v) => setField(field.name, v)}
                      disabled={isReadOnly}
                    >
                      <SelectTrigger id={field.name} className={`mt-1 ${err ? inputErrCls : ""}`}>
                        <SelectValue placeholder={field.label} />
                      </SelectTrigger>
                      <SelectContent>
                        {field.options.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {err && <p className="mt-1 text-xs text-red-600">{err}</p>}
                  </div>
                );
              }

              if (field.type === "checkbox") {
                return (
                  <div key={field.name} className="flex items-center gap-2 mt-6">
                    <input
                      id={field.name}
                      type="checkbox"
                      checked={!!val}
                      onChange={(e) => setField(field.name, e.target.checked)}
                      disabled={isReadOnly}
                      className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                    />
                    <Label htmlFor={field.name} className="text-sm">
                      {field.label}
                    </Label>
                    {err && <p className="ml-2 text-xs text-red-600">{err}</p>}
                  </div>
                );
              }

              return null;
            })}
          </div>

          {renderBottom?.({ getField, setField })}

          <DialogFooter className="flex gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              {isReadOnly ? t("common.close") ?? "Fermer" : t("common.cancel") ?? "Annuler"}
            </Button>

            {!isReadOnly && (
              <Button
                type="submit"
                disabled={submitting}
                className="bg-orange-600 hover:bg-orange-700"
              >
                {mode === "create" ? t("common.create") ?? "Créer" : t("common.save") ?? "Enregistrer"}
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
