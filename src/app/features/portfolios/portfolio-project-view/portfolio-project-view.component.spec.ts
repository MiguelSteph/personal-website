import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProjectViewComponent } from './portfolio-project-view.component';

describe('PortfolioProjectViewComponent', () => {
  let component: PortfolioProjectViewComponent;
  let fixture: ComponentFixture<PortfolioProjectViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioProjectViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioProjectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
