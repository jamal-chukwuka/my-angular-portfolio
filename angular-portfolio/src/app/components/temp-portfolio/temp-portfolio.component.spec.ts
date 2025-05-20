import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempPortfolioComponent } from './temp-portfolio.component';

describe('TempPortfolioComponent', () => {
  let component: TempPortfolioComponent;
  let fixture: ComponentFixture<TempPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempPortfolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
