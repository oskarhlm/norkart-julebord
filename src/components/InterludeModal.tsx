import { Modal } from "@mui/material";
import videoSrc from "@assets/Beat for Beat intro mix NRK.mp4";
import { useState } from "react";
import { useKeyPress } from "@hooks/useKeyPress";

export const InterludeModal = () => {
  const [open, setOpen] = useState(false);

  useKeyPress(["p"], () => setOpen((prev) => !prev));

  return (
    <Modal open={open}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {videoSrc && (
          <video controls autoPlay style={{ width: "50vw", height: "auto" }}>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </Modal>
  );
};
