import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallphotoComponent } from './viewallphoto.component';

describe('ViewallphotoComponent', () => {
  let component: ViewallphotoComponent;
  let fixture: ComponentFixture<ViewallphotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallphotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
