import { BubbleMenuItem } from '../../types.ts'

export const Underline = {
  id: 'underline',
  title: 'underline',
  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 3V12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12V3H18V12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12V3H8ZM4 20H20V22H4V20Z"></path></svg>',
  onClick: ({ innerEditor }) => {
    innerEditor.chain().toggleUnderline().run()
  }
} as BubbleMenuItem
