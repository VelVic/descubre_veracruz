import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PapantlaPage } from './papantla.page';

describe('PapantlaPage', () => {
  let component: PapantlaPage;
  let fixture: ComponentFixture<PapantlaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PapantlaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
