import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarTaskComponent } from './criar-task.component';

describe('CriarTaskComponent', () => {
  let component: CriarTaskComponent;
  let fixture: ComponentFixture<CriarTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
