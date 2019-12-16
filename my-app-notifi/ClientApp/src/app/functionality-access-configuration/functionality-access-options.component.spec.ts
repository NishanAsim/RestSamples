import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccessOptionComponent } from './functionality-access-options.component';

describe('UserAccessOptionComponent', () => {
  let component: UserAccessOptionComponent;
  let fixture: ComponentFixture<UserAccessOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAccessOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccessOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
