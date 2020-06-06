import React, { useState, ChangeEvent } from "react";

interface Props {
  onButtonClick: (value: string) => void;
}

// setVideoSource (file) {
//   const previewReader = new FileReader();
//   previewReader.readAsDataURL(file);
//   previewReader.onloadend = () => {
//    const dataUri = previewReader.result;
//    const blob = dataURItoBlob(dataUri);
//    const videoSource = URL.createObjectURL(blob);
//    this.setState({ videoSource });
//   };
//  }

export const SrcInput = (props: Props) => {
  const [src, setSrc] = useState("");

  const handleClick = () => {
    props.onButtonClick(src);
  };

  return (
    <>
      <input
        type="file"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (e.target.files!.length) {
            setSrc(URL.createObjectURL(e.target.files![0]));
          }
        }}
      />
      <input
        value={src}
        onChange={(e) => {
          setSrc(e.currentTarget.value);
        }}
      />
      <button onClick={handleClick}>set Src</button>
    </>
  );
};
