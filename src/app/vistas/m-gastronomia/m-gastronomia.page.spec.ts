import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MGastronomiaPage } from './m-gastronomia.page';

describe('MGastronomiaPage', () => {
  let component: MGastronomiaPage;
  let fixture: ComponentFixture<MGastronomiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MGastronomiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
