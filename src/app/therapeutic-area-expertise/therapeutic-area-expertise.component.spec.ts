import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapeuticAreaExpertiseComponent } from './therapeutic-area-expertise.component';

describe('TherapeuticAreaExpertiseComponent', () => {
  let component: TherapeuticAreaExpertiseComponent;
  let fixture: ComponentFixture<TherapeuticAreaExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TherapeuticAreaExpertiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TherapeuticAreaExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
