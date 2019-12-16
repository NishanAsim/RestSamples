import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeSample2Component } from './tree-sample2.component';

describe('TreeSample2Component', () => {
  let component: TreeSample2Component;
  let fixture: ComponentFixture<TreeSample2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeSample2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeSample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
