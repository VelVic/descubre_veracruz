import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZozocolcoPage } from './zozocolco.page';

describe('ZozocolcoPage', () => {
  let component: ZozocolcoPage;
  let fixture: ComponentFixture<ZozocolcoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZozocolcoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
