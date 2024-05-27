import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MartiniPageComponent } from './martini-page.component';

describe('MartiniPageComponent', () => {
  let component: MartiniPageComponent;
  let fixture: ComponentFixture<MartiniPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MartiniPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MartiniPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
