class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this.initPlugins();
  }
  private initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }
  play() {
    this.media.play();
  }
  mute() {
    this.media.muted = true;
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    if (this.media.paused) this.play();
    else this.pause();
  }
}

export default MediaPlayer;
