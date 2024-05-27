import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VodkaPageComponent } from './vodka-page.component';

describe('VodkaPageComponent', () => {
  let component: VodkaPageComponent;
  let fixture: ComponentFixture<VodkaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VodkaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VodkaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
