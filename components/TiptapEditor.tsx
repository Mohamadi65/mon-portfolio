"use client";

import { useEffect, useMemo, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import type { Editor } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";

type TiptapEditorProps = {
  initialHTML?: string;
  onSave?: (html: string) => void | Promise<void>;
  readOnly?: boolean;
};

type BtnProps = {
  onClick: () => void;
  active?: boolean;
  label: string;
  title?: string;
  disabled?: boolean;
};

function Btn({ onClick, active, label, title, disabled }: BtnProps) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${active ? "btn--active" : ""}`}
    >
      {label}
    </button>
  );
}

function normalizeUrl(url: string): string {
  const trimmed = url.trim();

  if (!trimmed) return "";

  if (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("mailto:") ||
    trimmed.startsWith("tel:")
  ) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

function LinkPopover({
  open,
  initialUrl,
  onClose,
  onSubmit,
  onRemove,
}: {
  open: boolean;
  initialUrl: string;
  onClose: () => void;
  onSubmit: (url: string) => void;
  onRemove: () => void;
}) {
  const [url, setUrl] = useState(() => initialUrl);

  if (!open) return null;

  return (
    <div className="link-popover-backdrop" onClick={onClose}>
      <div className="link-popover" onClick={(e) => e.stopPropagation()}>
        <div className="link-popover__title">Insérer un lien</div>

        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://exemple.com"
          className="link-popover__input"
          autoFocus
        />

        <div className="link-popover__actions">
          <button type="button" className="btn" onClick={onClose}>
            Annuler
          </button>

          <button type="button" className="btn" onClick={onRemove}>
            Supprimer
          </button>

          <button
            type="button"
            className="btn btn--active"
            onClick={() => onSubmit(url)}
          >
            Valider
          </button>
        </div>
      </div>
    </div>
  );
}

function Toolbar({ editor }: { editor: Editor | null }) {
  const [linkOpen, setLinkOpen] = useState(false);

  const currentLink = useMemo(() => {
    if (!editor) return "";
    return editor.getAttributes("link").href || "";
  }, [editor, linkOpen]);

  if (!editor) return null;

  const openLinkDialog = () => {
    setLinkOpen(true);
  };

  const closeLinkDialog = () => {
    setLinkOpen(false);
  };

  const applyLink = (url: string) => {
    const normalized = normalizeUrl(url);

    if (!normalized) {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      setLinkOpen(false);
      return;
    }

    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({
        href: normalized,
        target: "_blank",
        rel: "noopener noreferrer nofollow",
      })
      .run();

    setLinkOpen(false);
  };

  const removeLink = () => {
    editor.chain().focus().extendMarkRange("link").unsetLink().run();
    setLinkOpen(false);
  };

  return (
    <>
      <div className="toolbar">
        <Btn
          label="Bold"
          title="Bold (Ctrl/Cmd+B)"
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        />
        <Btn
          label="Italic"
          title="Italic (Ctrl/Cmd+I)"
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        />
        <Btn
          label="Strike"
          active={editor.isActive("strike")}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        />
        <Btn
          label="Code"
          active={editor.isActive("code")}
          onClick={() => editor.chain().focus().toggleCode().run()}
        />

        <Btn
          label="Link"
          title="Ajouter ou modifier un lien"
          active={editor.isActive("link")}
          onClick={openLinkDialog}
        />
        <Btn
          label="Unlink"
          title="Supprimer le lien"
          disabled={!editor.isActive("link")}
          onClick={() =>
            editor.chain().focus().extendMarkRange("link").unsetLink().run()
          }
        />

        <Btn
          label="Clear marks"
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
        />
        <Btn
          label="Clear nodes"
          onClick={() => editor.chain().focus().clearNodes().run()}
        />

        <Btn
          label="P"
          active={editor.isActive("paragraph")}
          onClick={() => editor.chain().focus().setParagraph().run()}
        />
        <Btn
          label="H1"
          active={editor.isActive("heading", { level: 1 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        />
        <Btn
          label="H2"
          active={editor.isActive("heading", { level: 2 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        />
        <Btn
          label="H3"
          active={editor.isActive("heading", { level: 3 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        />

        <Btn
          label="UL"
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        />
        <Btn
          label="OL"
          active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        />
        <Btn
          label="Code block"
          active={editor.isActive("codeBlock")}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        />
        <Btn
          label="Quote"
          active={editor.isActive("blockquote")}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        />
        <Btn
          label="HR"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        />
        <Btn
          label="Br"
          onClick={() => editor.chain().focus().setHardBreak().run()}
        />

        <Btn label="Undo" onClick={() => editor.chain().focus().undo().run()} />
        <Btn label="Redo" onClick={() => editor.chain().focus().redo().run()} />
      </div>

      <LinkPopover
        key={`${linkOpen}-${currentLink}`}
        open={linkOpen}
        initialUrl={currentLink}
        onClose={closeLinkDialog}
        onSubmit={applyLink}
        onRemove={removeLink}
      />
    </>
  );
}

export default function TiptapEditor({
  initialHTML,
  onSave,
  readOnly,
}: TiptapEditorProps) {
  const [saving, setSaving] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3, 4, 5, 6] },
      }),
      Link.configure({
        openOnClick: !!readOnly,
        autolink: true,
        linkOnPaste: true,
        HTMLAttributes: {
          class: "editor-link",
        },
      }),
    ],
    content: initialHTML || "<p></p>",
    autofocus: "end",
    editorProps: { attributes: { class: "pm-root" } },
    immediatelyRender: false,
  });

  useEffect(() => {
    if (!editor) return;
    const html = typeof initialHTML === "string" ? initialHTML : "";
    editor.commands.setContent(html || "<p></p>", { emitUpdate: false });
  }, [editor, initialHTML]);

  useEffect(() => {
    if (!editor) return;
    editor.setEditable(!readOnly);
  }, [editor, readOnly]);

  const handleSaveClick = async () => {
    if (!editor || !onSave) return;
    setSaving(true);
    try {
      await onSave(editor.getHTML());
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-3">
      {!readOnly && <Toolbar editor={editor} />}

      <div className="editor-wrap">
        <EditorContent editor={editor} />
      </div>

      {!readOnly && onSave && (
        <div className="flex justify-end">
          <button
            type="button"
            className="btn"
            onClick={handleSaveClick}
            disabled={saving}
          >
            {saving ? "Enregistrement..." : "Enregistrer ce bloc"}
          </button>
        </div>
      )}
    </div>
  );
}
