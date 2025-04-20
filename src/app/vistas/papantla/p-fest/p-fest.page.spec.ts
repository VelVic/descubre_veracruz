import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PFestPage } from './p-fest.page';

describe('PFestPage', () => {
  let component: PFestPage;
  let fixture: ComponentFixture<PFestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PFestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
