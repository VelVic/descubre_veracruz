import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MLugaresPage } from './m-lugares.page';

describe('MLugaresPage', () => {
  let component: MLugaresPage;
  let fixture: ComponentFixture<MLugaresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MLugaresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
