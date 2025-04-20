import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PPlacePage } from './p-place.page';

describe('PPlacePage', () => {
  let component: PPlacePage;
  let fixture: ComponentFixture<PPlacePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PPlacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
