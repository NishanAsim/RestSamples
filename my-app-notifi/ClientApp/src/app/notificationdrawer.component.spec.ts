import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationdrawerComponent } from './notificationdrawer.component';

describe('NotificationdrawerComponent', () => {
  let component: NotificationdrawerComponent;
  let fixture: ComponentFixture<NotificationdrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationdrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationdrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
