import { Component, Input, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';
import { MagneticHoverDirective } from '../../../directives/magnetic-hover.directive';
import { CLIENTS_CONSTANTS } from '../../../constants/home/clients.constants';

interface Client {
  name: string;
  logo: string;
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective, ScrollRevealDirective, MagneticHoverDirective],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() header: string = CLIENTS_CONSTANTS.HEADER;
  @Input() content: string = CLIENTS_CONSTANTS.CONTENT;
  @ViewChild('carousel') carousel!: ElementRef;

  clients: Client[] = CLIENTS_CONSTANTS.CLIENTS;
  tripleClients: Client[] = [];
  centerCardIndex: number = 0;
  private animationFrameId?: number;
  private lastUpdateTime: number = 0;
  private updateInterval: number = 50; // Update center card every 50ms for smoother transitions

  ngOnInit(): void {
    // Create triple array for seamless infinite scroll
    this.tripleClients = [...this.clients, ...this.clients, ...this.clients];
    // Start with center card in the middle section
    this.centerCardIndex = this.clients.length + Math.floor(this.clients.length / 2);
  }

  ngAfterViewInit(): void {
    this.startCenterCardTracking();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  private startCenterCardTracking(): void {
    const updateCenterCard = (timestamp: number) => {
      if (timestamp - this.lastUpdateTime >= this.updateInterval) {
        this.updateCenterCard();
        this.lastUpdateTime = timestamp;
      }
      this.animationFrameId = requestAnimationFrame(updateCenterCard);
    };
    
    this.animationFrameId = requestAnimationFrame(updateCenterCard);
  }

  private updateCenterCard(): void {
    if (!this.carousel?.nativeElement) return;

    const carouselElement = this.carousel.nativeElement;
    const cards = carouselElement.querySelectorAll('.client-card');
    const carouselRect = carouselElement.getBoundingClientRect();
    const containerRect = carouselElement.parentElement?.getBoundingClientRect();
    
    if (!containerRect) return;

    const containerCenter = containerRect.left + containerRect.width / 2;
    let closestCard = 0;
    let minDistance = Infinity;

    cards.forEach((card: Element, index: number) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(cardCenter - containerCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestCard = index;
      }
    });

    // Update center card index with smoother transition detection
    const threshold = 50; // Pixels threshold for center detection
    if (this.centerCardIndex !== closestCard && minDistance < threshold) {
      this.centerCardIndex = closestCard;
    }
  }

  isCenterCard(index: number): boolean {
    return index === this.centerCardIndex;
  }
}