var playlist={ 
  'Mariah Carey': 'Heartbreaker',
  'Usher': 'Yeah!'
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artist] = song
  return playlist
}
function removeFromPlaylist (playlist, artistName) {
  delete playlist[artist]
  return playlist
}
  
function updatePlaylist(playlist, artist, song) {
  // Remember, because one of this function's arguments
  // is `playlist`, the `playlist` _inside_ the function
  // is not the same as the top-level `playlist` outside
  // the function
  playlist[artist] = song

  return playlist
}
function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}