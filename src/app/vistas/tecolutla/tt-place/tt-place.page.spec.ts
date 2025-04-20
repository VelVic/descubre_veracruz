import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TtPlacePage } from './tt-place.page';

describe('TtPlacePage', () => {
  let component: TtPlacePage;
  let fixture: ComponentFixture<TtPlacePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TtPlacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
