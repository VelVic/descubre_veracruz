import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TtFestPage } from './tt-fest.page';

describe('TtFestPage', () => {
  let component: TtFestPage;
  let fixture: ComponentFixture<TtFestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TtFestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
