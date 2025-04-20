import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TecolutlaPage } from './tecolutla.page';

describe('TecolutlaPage', () => {
  let component: TecolutlaPage;
  let fixture: ComponentFixture<TecolutlaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TecolutlaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
