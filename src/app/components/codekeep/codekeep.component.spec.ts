import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodekeepComponent } from './codekeep.component';

describe('CodekeepComponent', () => {
  let component: CodekeepComponent;
  let fixture: ComponentFixture<CodekeepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodekeepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodekeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
