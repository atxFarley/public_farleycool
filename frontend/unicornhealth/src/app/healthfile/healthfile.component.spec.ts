import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthfileComponent } from './healthfile.component';

describe('HealthfileComponent', () => {
  let component: HealthfileComponent;
  let fixture: ComponentFixture<HealthfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
