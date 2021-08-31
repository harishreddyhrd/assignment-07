import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.scss'],
})
export class MyAppComponent implements OnInit {
  showTotalSongs: boolean = true;

  @Input() songs!: any;
  @Input('getSongsTotal') totalNumberOfSongs!: any;
  @Input('playlistTotal') totalNumberOfSongsInPlaylist!: any;

  constructor() {}

  ngOnInit(): void {}
}
