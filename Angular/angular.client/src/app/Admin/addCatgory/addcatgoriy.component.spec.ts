import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcatgoriyComponent } from './addcatgoriy.component';

describe('AddcatgoriyComponent', () => {
  let component: AddcatgoriyComponent;
  let fixture: ComponentFixture<AddcatgoriyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddcatgoriyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcatgoriyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
