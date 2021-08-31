import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-playlist',
  templateUrl: './my-playlist.component.html',
  styleUrls: ['./my-playlist.component.scss'],
})
export class MyPlaylistComponent implements OnInit {
  @Input() myPlaylist!: string[];
  constructor() {}

  ngOnInit(): void {}
}
