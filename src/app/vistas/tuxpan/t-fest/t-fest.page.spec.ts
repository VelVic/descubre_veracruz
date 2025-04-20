import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TFestPage } from './t-fest.page';

describe('TFestPage', () => {
  let component: TFestPage;
  let fixture: ComponentFixture<TFestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TFestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
