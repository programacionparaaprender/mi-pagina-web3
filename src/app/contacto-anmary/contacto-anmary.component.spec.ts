import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoAnmaryComponent } from './contacto-anmary.component';

describe('ContactoAnmaryComponent', () => {
  let component: ContactoAnmaryComponent;
  let fixture: ComponentFixture<ContactoAnmaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoAnmaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoAnmaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
