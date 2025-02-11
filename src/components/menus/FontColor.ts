import { AbstractColorsMenuButton } from '../AbstractColorsMenuButton.ts'
import { Editor } from '@tiptap/core'

export class FontColor extends AbstractColorsMenuButton {
  constructor() {
    super()
    this.historyColorsKey = 'fontHistoryColors'
    this.iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.55446 22H3.40039L11.0004 3H13.0004L20.6004 22H18.4463L16.0463 16H7.95446L5.55446 22ZM8.75446 14H15.2463L12.0004 5.88517L8.75446 14Z"></path></svg>`
    this.onDefaultColorClick = () => {
      this.editor?.chain().focus().unsetColor().run()
    }
    this.onColorItemClick = (color) => {
      this.editor?.chain().focus().setColor(color).run()
    }
  }

  onActive(editor: Editor): boolean {
    return editor.isActive('textStyle')
  }
}
