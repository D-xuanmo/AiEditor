import { AbstractMenuButton } from '../AbstractMenuButton.ts'

export class Divider extends AbstractMenuButton {
  constructor() {
    super()
    this.template = `<div no-hover style="width: 1px;display: flex"><div class="aie-menu-divider" /></div>`
  }
}
