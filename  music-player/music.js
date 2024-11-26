class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }

  getName() {
    return this.title + " - " + this.singer;
  }
}

const musicList = [
  new Music("Give Me Everything", "Pitbull Feat. Ne-Yo", "1.jpeg", "1.mp3"),
  new Music("This is My Life", "Edward Maya", "2.jpeg", "2.mp3"),
  new Music("Latin Moon", "Mia Martina Ft Massari", "3.jpeg", "3.mp3"),
  new Music("Tonight", "Enrique Iglesias", "4.jpeg", "4.mp3"),
];
