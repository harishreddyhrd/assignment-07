import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'assignment07';

  @Input() songsData!: any;
  @Input() data!: any;
  @Input() songsLiked!: any;
  @Input() NumberOfSongsLiked!: any;
}
