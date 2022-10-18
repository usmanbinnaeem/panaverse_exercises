function make_album(name, title, track = 0) {
  const value = {
    artistName: name,
    albumTitle: title,
  };
  if (track != 0) value.tracks = track;
  return value;
}

console.log(make_album("arjit", "track1"));
console.log(make_album("ali Zafar", "track2", 20));
