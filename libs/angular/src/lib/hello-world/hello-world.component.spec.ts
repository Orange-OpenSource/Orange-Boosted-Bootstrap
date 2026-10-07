import { TestBed } from '@angular/core/testing'
import { HelloWorldComponent } from './hello-world.component'

describe('HelloWorldComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HelloWorldComponent],
        }).compileComponents()
    })

    it('renders a greeting with the default name', () => {
        const fixture = TestBed.createComponent(HelloWorldComponent)
        fixture.detectChanges()
        const element: HTMLElement = fixture.nativeElement
        expect(element.querySelector('p')?.textContent).toContain('Hello, world!')
    })
})
