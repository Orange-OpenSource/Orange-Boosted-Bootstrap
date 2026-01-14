import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLibrary } from './component-library';

describe('ComponentLibrary', () => {
  let component: ComponentLibrary;
  let fixture: ComponentFixture<ComponentLibrary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLibrary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLibrary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
