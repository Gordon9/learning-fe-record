import myVideo from "../website-homepage-main-video.mp4";

export default function Main() {
  return (
    <main>
      <video width="100%" height="100%" autoPlay loop muted playsinline>
        <source src={myVideo} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
      <h1 className="main-title">Everyday moments of joy</h1>
    </main>
  );
}
