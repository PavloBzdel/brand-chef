import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsaltingComponent } from './consalting.component';

describe('ConsaltingComponent', () => {
  let component: ConsaltingComponent;
  let fixture: ComponentFixture<ConsaltingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsaltingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsaltingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
