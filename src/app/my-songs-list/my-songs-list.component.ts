import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Song } from '../song.model';

@Component({
  selector: 'my-songs-list',
  templateUrl: './my-songs-list.component.html',
  styleUrls: ['./my-songs-list.component.scss'],
})
export class MySongsListComponent implements OnInit {
  songs: Song[] = [
    { name: 'SONG_01' },
    { name: 'SONG_02' },
    { name: 'SONG_03' },
  ];
  songName!: string;
  myPlaylistSongs!: string[];

  @Output() allSongs: EventEmitter<any> = new EventEmitter();
  @Output() songsTotal: EventEmitter<any> = new EventEmitter();
  @Output() playlist: EventEmitter<any> = new EventEmitter();
  @Output() playlistLength: EventEmitter<any> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {
    // console.log(this.selectedSongs)
    this.sendSongsTotal();
  }

  onSubmit() {
    // console.log(this.songName);
    const newSong = {
      name: this.songName,
    };
    this.songs.push(newSong);
    this.sendSongsTotal();
  }

  sendSongsTotal() {
    this.allSongs.emit(this.songs)
    this.songsTotal.emit(this.songs.length);
  }

  addToPlaylist() {
    // console.log(this.selectedSongs);
    this.myPlaylistSongs = this.selectedSongs;
    this.playlist.emit(this.myPlaylistSongs);
    this.playlistLength.emit(this.myPlaylistSongs.length);
  }

  get selectedSongs() {
    return this.songs
      .filter((song) => song.isSelected)
      .map((song) => song.name);
  }
}
