import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZPlacePage } from './z-place.page';

describe('ZPlacePage', () => {
  let component: ZPlacePage;
  let fixture: ComponentFixture<ZPlacePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZPlacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
