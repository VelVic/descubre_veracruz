import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZFestPage } from './z-fest.page';

describe('ZFestPage', () => {
  let component: ZFestPage;
  let fixture: ComponentFixture<ZFestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZFestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
