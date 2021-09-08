import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinTheJourrneyComponent } from './join-the-jourrney.component';

describe('JoinTheJourrneyComponent', () => {
  let component: JoinTheJourrneyComponent;
  let fixture: ComponentFixture<JoinTheJourrneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinTheJourrneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinTheJourrneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
