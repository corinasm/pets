import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetAddnewComponent } from './pet-addnew.component';

describe('PetAddnewComponent', () => {
  let component: PetAddnewComponent;
  let fixture: ComponentFixture<PetAddnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetAddnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetAddnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
