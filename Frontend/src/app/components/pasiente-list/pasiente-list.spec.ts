import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasienteList } from './pasiente-list';

describe('PasienteList', () => {
  let component: PasienteList;
  let fixture: ComponentFixture<PasienteList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasienteList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasienteList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
