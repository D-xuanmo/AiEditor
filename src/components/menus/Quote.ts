import { AbstractMenuButton } from '../AbstractMenuButton.ts'
import { Editor } from '@tiptap/core'

export class Quote extends AbstractMenuButton {
  constructor() {
    super()
    this.template = `
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.58341 17.3211C3.55316 16.2275 3 15 3 13.0104C3 9.51092 5.45651 6.37372 9.03059 4.82324L9.92328 6.20085C6.58804 8.00545 5.93618 10.3461 5.67564 11.8221C6.21263 11.5444 6.91558 11.4467 7.60471 11.5106C9.40908 11.6778 10.8312 13.1591 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0096 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2275 13 15 13 13.0104C13 9.51092 15.4565 6.37372 19.0306 4.82324L19.9233 6.20085C16.588 8.00545 15.9362 10.3461 15.6756 11.8221C16.2126 11.5444 16.9156 11.4467 17.6047 11.5106C19.4091 11.6778 20.8312 13.1591 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0096 14.5834 17.3211Z"></path></svg>
        </div>
        `
    this.registerClickListener()
  }

  // @ts-ignore
  onClick(commands) {
    commands.toggleBlockquote()
  }

  onActive(editor: Editor): boolean {
    return editor.isActive('blockquote')
  }
}
