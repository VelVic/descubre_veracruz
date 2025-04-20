import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TPlacePage } from './t-place.page';

describe('TPlacePage', () => {
  let component: TPlacePage;
  let fixture: ComponentFixture<TPlacePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TPlacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
