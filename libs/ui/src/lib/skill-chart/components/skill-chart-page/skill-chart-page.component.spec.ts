import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillChartPageComponent } from './skill-chart-page.component';

describe('SkillChartPage', () => {
  let component: SkillChartPageComponent;
  let fixture: ComponentFixture<SkillChartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillChartPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillChartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
