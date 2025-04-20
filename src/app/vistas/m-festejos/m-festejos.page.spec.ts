import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MFestejosPage } from './m-festejos.page';

describe('MFestejosPage', () => {
  let component: MFestejosPage;
  let fixture: ComponentFixture<MFestejosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MFestejosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
