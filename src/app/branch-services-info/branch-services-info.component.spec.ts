import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchServicesInfoComponent } from './branch-services-info.component';

describe('BranchServicesInfoComponent', () => {
  let component: BranchServicesInfoComponent;
  let fixture: ComponentFixture<BranchServicesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchServicesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchServicesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
