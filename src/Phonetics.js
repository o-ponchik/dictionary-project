import React from "react";
import useSound from "use-sound";
import { HiVolumeUp } from "react-icons/hi";

export default function Phonetics(props) {
  const Button = () => {
    const [play] = useSound(props.phonetic.audio);

    if (props.phonetic.audio) {
      return (
        <HiVolumeUp
          color="#0d7e83"
          fontSize="1.5rem"
          onClick={play}
          cursor="pointer"
        />
      );
    } else {
      return null;
    }
  };

  return (
    <div className="Phonetics">
      <Button />
    </div>
  );
}

// BsVolumeDownFill;
