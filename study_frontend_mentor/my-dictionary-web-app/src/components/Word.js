const Word = ({ word, phonetic }) => {
  return (
    <div className="word__container">
      <div id="word" className="word__title">
        {word}
      </div>
      <div id="phonetic" className="word__phonetic">
        {phonetic}
      </div>
      <div id="play" className="word__audio icon-icon_play"></div>
    </div>
  );
};

export default Word;
