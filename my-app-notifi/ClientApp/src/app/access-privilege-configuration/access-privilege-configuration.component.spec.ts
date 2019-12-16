import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccessItemComponent } from './access-privilege-configuration.component';

describe('UserAccessItemComponent', () => {
  let component: UserAccessItemComponent;
  let fixture: ComponentFixture<UserAccessItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAccessItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccessItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
