import { AbstractMenuButton } from '../AbstractMenuButton.ts'
import { Editor } from '@tiptap/core'

export class Todo extends AbstractMenuButton {
  constructor() {
    super()
    this.template = `
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path></svg>
        </div>
        `
    this.registerClickListener()
  }

  // @ts-ignore
  onClick(commands) {
    commands.toggleTaskList()
  }

  onActive(editor: Editor): boolean {
    return editor.isActive('taskList')
  }
}
