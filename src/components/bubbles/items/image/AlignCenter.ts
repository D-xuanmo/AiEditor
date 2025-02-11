import { BubbleMenuItem } from '../../types.ts'

export const AlignCenter = {
  id: 'AlignCenter',
  title: 'align-center',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM5 19H19V21H5V19ZM3 14H21V16H3V14ZM5 9H19V11H5V9Z"></path></svg>',
  onClick: ({ innerEditor }) => {
    const attrs = innerEditor.getAttributes('image')!
    attrs.align = 'center'
    innerEditor
      .chain()
      .setImage(attrs as any)
      .run()
  }
} as BubbleMenuItem
