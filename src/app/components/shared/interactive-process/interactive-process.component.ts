import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details?: string[];
  progress?: number;
}

@Component({
  selector: 'app-interactive-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interactive-process.component.html',
  styleUrls: ['./interactive-process.component.scss']
})
export class InteractiveProcessComponent implements OnInit, OnDestroy {
  @Input() header: string = '';
  @Input() subheader: string = '';
  @Input() steps: ProcessStep[] = [];
  @Input() autoProgress: boolean = true;

  activeStep: number = 0;
  private progressInterval?: number;

  ngOnInit() {
    if (this.autoProgress && this.steps.length > 0) {
      this.startAutoProgress();
    }
  }

  ngOnDestroy() {
    this.stopAutoProgress();
  }

  private startAutoProgress() {
    this.progressInterval = window.setInterval(() => {
      this.activeStep = (this.activeStep + 1) % this.steps.length;
    }, 4000);
  }

  private stopAutoProgress() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
  }

  setActiveStep(index: number) {
    this.activeStep = index;
    this.stopAutoProgress();
    
    // Restart auto progress after user interaction
    setTimeout(() => {
      if (this.autoProgress) {
        this.startAutoProgress();
      }
    }, 8000);
  }

  getStepProgress(index: number): number {
    if (index < this.activeStep) return 100;
    if (index === this.activeStep) return this.steps[index]?.progress || 75;
    return 0;
  }

  isStepActive(index: number): boolean {
    return index === this.activeStep;
  }

  isStepCompleted(index: number): boolean {
    return index < this.activeStep;
  }
}