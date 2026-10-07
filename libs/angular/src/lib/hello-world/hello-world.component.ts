import { Component } from '@angular/core'

@Component({
    selector: 'orange-hello-world',
    standalone: true,
    template: `<p>Hello, {{ name }}!</p>`,
})
export class HelloWorldComponent {
    name = 'world'
}
