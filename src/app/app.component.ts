import {Component, ElementRef, HostBinding, OnInit} from '@angular/core';
import {DownloadService} from './services/download.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @HostBinding('class.root') componentClassName = true;

  constructor(private elRef: ElementRef, private downloadService: DownloadService) {
  }

  ngOnInit(): void {
    this.downloadService.imageElement = this.elRef.nativeElement;
  }
}
