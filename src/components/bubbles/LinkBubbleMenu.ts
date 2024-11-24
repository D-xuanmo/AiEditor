import { AbstractBubbleMenu } from '../AbstractBubbleMenu.ts'
import { EditorEvents } from '@tiptap/core'
import { AllLinkMenuItems } from './items/link/AllLinkMenuItems.ts'
import { AiEditorOptions } from '../../core/types.ts'

export class LinkBubbleMenu extends AbstractBubbleMenu {
  constructor() {
    super()
  }

  onCreate(event: EditorEvents['create'], options: AiEditorOptions) {
    super.onCreate(event, options)
    this.initItemsByOptions(AllLinkMenuItems, options?.link?.bubbleMenuItems)
    this.activeOnClick = false
  }
}
