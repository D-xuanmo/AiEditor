import { EditorEvents, Extensions } from '@tiptap/core'
import { Transaction } from '@tiptap/pm/state'
import { DefaultToolbarKey } from '../components/DefaultToolbarKeys.ts'
import { LanguageItem } from '../extensions/CodeBlockExt.ts'
import { BubbleMenuItem } from '../components/bubbles/types.ts'
import { AiGlobalConfig } from '../ai/AiGlobalConfig.ts'
import type { AiEditor } from './AiEditor.ts'

export interface NameAndValue {
  name: string
  value: any
}

export interface AiEditorEventListener {
  onCreate: (props: EditorEvents['create'], options: AiEditorOptions) => void
  onTransaction: (props: EditorEvents['transaction']) => void
  onEditableChange: (editable: boolean) => void
}

export type Uploader = (
  file: File,
  uploadUrl: string,
  headers: Record<string, any>,
  formName: string
) => Promise<Record<string, any>>

export interface UploaderEvent {
  onUploadBefore?: (file: File, uploadUrl: string, headers: Record<string, any>) => void | boolean
  onSuccess?: (file: File, response: any) => any
  onFailed?: (file: File, response: any) => void
  onError?: (file: File, err: any) => void
}

export interface CustomMenu {
  id?: string
  className?: string
  icon?: string
  html?: string
  tip?: string
  onClick?: (event: MouseEvent, editor: AiEditor) => void
  onCreate?: (button: HTMLElement, editor: AiEditor) => void
}

export interface MenuGroup {
  title?: string
  icon?: string
  toolbarKeys: (string | CustomMenu | MenuGroup)[]
}

export interface HtmlPasteConfig {
  pasteAsText?: boolean
  pasteClean?: boolean
  removeEmptyParagraphs?: boolean
  pasteProcessor?: (html: string) => string
}

export type AiEditorOptions = {
  element: string | Element
  content?: string
  contentIsMarkdown?: boolean
  contentRetention?: boolean
  contentRetentionKey?: string
  lang?: string
  editable?: boolean
  i18n?: Record<string, Record<string, string>>
  placeholder?: string
  theme?: 'light' | 'dark'
  onMentionQuery?: (query: string) => any[] | Promise<any[]>
  onCreateBefore?: (editor: AiEditor, extensions: Extensions) => void | Extensions
  onCreated?: (editor: AiEditor) => void
  onChange?: (editor: AiEditor) => void
  onTransaction?: (editor: AiEditor, transaction: Transaction) => void
  onFocus?: (editor: AiEditor) => void
  onBlur?: (editor: AiEditor) => void
  onDestroy?: (editor: AiEditor) => void
  onSave?: (editor: AiEditor) => boolean
  toolbarKeys?: (string | CustomMenu | MenuGroup)[]
  toolbarExcludeKeys?: DefaultToolbarKey[]
  toolbarSize?: 'small' | 'medium' | 'large'
  draggable?: boolean
  htmlPasteConfig?: HtmlPasteConfig
  codeBlock?: {
    languages?: LanguageItem[]
    codeExplainPrompt?: string
    codeCommentsPrompt?: string
  }
  textSelectionBubbleMenu?: {
    enable?: boolean
    elementTagName?: string
    items?: (string | BubbleMenuItem)[]
  }
  link?: {
    autolink?: boolean
    rel?: string
    class?: string
    bubbleMenuItems?: (string | BubbleMenuItem)[]
  }
  uploader?: Uploader
  image?: {
    customMenuInvoke?: (editor: AiEditor) => void
    uploadUrl?: string
    uploadHeaders?: (() => Record<string, any>) | Record<string, any>
    uploadFormName?: string
    uploader?: Uploader
    uploaderEvent?: UploaderEvent
    defaultSize?: number
    allowBase64?: boolean
    bubbleMenuEnable?: boolean
    bubbleMenuItems?: (string | BubbleMenuItem)[]
  }
  video?: {
    customMenuInvoke?: (editor: AiEditor) => void
    uploadUrl?: string
    uploadHeaders?: (() => Record<string, any>) | Record<string, any>
    uploadFormName?: string
    uploader?: Uploader
    uploaderEvent?: UploaderEvent
  }
  attachment?: {
    customMenuInvoke?: (editor: AiEditor) => void
    uploadUrl?: string
    uploadHeaders?: (() => Record<string, any>) | Record<string, any>
    uploadFormName?: string
    uploader?: Uploader
    uploaderEvent?: UploaderEvent
  }
  fontFamily?: {
    values: NameAndValue[]
  }
  fontSize?: {
    defaultValue?: number
    values?: NameAndValue[]
  }
  lineHeight?: {
    values?: string[]
  }
  emoji?: {
    values?: string[]
  }
  textCounter?: (text: string) => number
  ai?: AiGlobalConfig
}
