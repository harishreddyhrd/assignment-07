import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyAppComponent } from './my-app/my-app.component';
import { MyPlaylistComponent } from './my-playlist/my-playlist.component';
import { MySongsListComponent } from './my-songs-list/my-songs-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAppComponent,
    MyPlaylistComponent,
    MySongsListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
