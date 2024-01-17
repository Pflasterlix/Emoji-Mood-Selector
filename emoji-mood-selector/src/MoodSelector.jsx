import React, { useState } from 'react';

const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  }; 

  const getMessage = () => {
    if (selectedMood) {
      const moodMessages = {
        '😄': "You're feeling happy!",
        '😃': "You're feeling joyful!",
        '😀': "You're feeling cheerful!",
        '😊': "You're feeling content!",
        '😅': "You're feeling amused!",
        '😂': "You're feeling laughing!",
        '😆': "You're feeling excited!",
        '😁': "You're feeling delighted!",
        '😍': "You're feeling in love!",
        '🥰': "You're feeling affectionate!",
        '😎': "You're feeling cool!",
        '😋': "You're feeling yummy!",
        '😇': "You're feeling angelic!",
        '😜': "You're feeling mischievous!",
        '🤩': "You're feeling fantastic!",
        '😏': "You're feeling sly!",
        '😌': "You're feeling relieved!",
        '😔': "You're feeling sad!",
        '😢': "You're feeling teary-eyed!",
        '😡': "You're feeling angry!",
        '🥺': "You're feeling pleading!",
        '😱': "You're feeling terrified!",
        '😳': "You're feeling embarrassed!",
        '😬': "You're feeling awkward!",
        '🙄': "You're feeling rolling eyes!",
        '😐': "You're feeling neutral!",
        '😕': "You're feeling confused!",
        '😠': "You're feeling irritated!",
        '🤔': "You're feeling thoughtful!",
        '😤': "You're feeling annoyed!",
        '😓': "You're feeling downcast!",
        '😥': "You're feeling stressed!",
        '😰': "You're feeling anxious!",
        '😭': "You're feeling crying!",
        '😷': "You're feeling sick!",
        '🤢': "You're feeling nauseated!",
        '🤮': "You're feeling vomiting!",
        '🥴': "You're feeling woozy!",
        '🤕': "You're feeling injured!",
        '😨': "You're feeling fearful!",
        '🤯': "You're feeling mind-blown!",
        '😲': "You're feeling astonished!",
        '🥶': "You're feeling freezing!",
        '😵': "You're feeling dizzy!",
        '🤪': "You're feeling goofy!",
        '🤠': "You're feeling cowboy!",
        '🤓': "You're feeling nerd!",
        '😈': "You're feeling devilish!",
        '👿': "You're feeling evil!",
        '💩': "You're feeling poopish!",
      };

      return moodMessages[selectedMood] || "Please select a mood.";
    } else {
      return 'Please select a mood.';
    }
  };

  // Erstelle ein Array mit 50 Emojis
  const emojis = [
    '😄', '😃', '😀', '😊', '😅', '😂', '😆', '😁', '😍', '🥰',
    '😎', '😋', '😇', '😜', '🤩', '😏', '😌', '😔', '😢', '😡',
    '🥺', '😱', '😳', '😬', '🙄', '😐', '😕', '😠', '🤔', '😤',
    '😓', '😥', '😰', '😭', '😷', '🤢', '🤮', '🥴', '🤕', '😨',
    '🤯', '😲', '🥶', '😵', '🤪', '🤠', '🤓', '😈', '👿', '💩',
  ];

  return (
    <div>
      <h1>Emoji Mood Selector</h1>
      <div>
        {emojis.map((emoji, index) => (
          <button key={index} onClick={() => handleMoodSelect(emoji)}>
            {emoji}
          </button>
        ))}
      </div>
      <p>{getMessage()}</p>
    </div>
  );
};

export default MoodSelector;