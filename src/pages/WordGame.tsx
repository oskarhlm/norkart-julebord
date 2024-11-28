import { Word, WordGamePanel } from "@components/WordGamePanel";
import { useEffect, useState } from "react";
import BfB from "@assets/bfb_programleder.avif";
import BfB_Piano1 from "@assets/bfb_piano1.avif";
import BfB_Piano2 from "@assets/bfb_piano2.avif";
import { Box } from "@mui/material";
import { useKeyPress } from "@hooks/useKeyPress";
import { MainLayout } from "../MainLayout";
import { useSearchParams } from "react-router-dom";

const WORD_SEQUENCES: Word[][] = [
  [
    { value: "og", isRed: false },
    { value: "at", isRed: false },
    { value: "vintern", isRed: false },
    { value: "e", isRed: true },
    { value: "før", isRed: true },
    { value: "lang", isRed: false },
  ],
  [
    { value: "it", isRed: false },
    { value: "was", isRed: true },
    { value: "christmas", isRed: false },
    { value: "eve", isRed: true },
    { value: "babe", isRed: false },
  ],
];

export const WordGame = () => {
  const [searchParams, _] = useSearchParams();

  const seqNum = Number.parseInt(searchParams.get("sequence")!);

  const [wordSequence, setWordSequence] = useState<Word[]>(
    WORD_SEQUENCES[seqNum]
  );

  const revealNextWord = () => {
    let wordHasBeenOpened = false;

    const nextWord = wordSequence.map((w, i) => {
      if (wordHasBeenOpened || w.visible) {
        return w;
      }

      wordHasBeenOpened = true;
      return { ...w, visible: true };
    });

    setWordSequence(nextWord);
  };

  const goToNextWordGame = () => {};

  useKeyPress([" "], revealNextWord);
  useKeyPress(["n"], goToNextWordGame);

  for (let i = 1; i <= 6; i++) {
    useKeyPress([i.toString()], () =>
      setWordSequence(
        wordSequence.map((word, wordIndex) => {
          if (wordIndex === i - 1) {
            return { ...word, visible: !Boolean(word.visible) };
          }

          return word;
        })
      )
    );
  }

  useEffect(() => {
    console.log(seqNum);
    setWordSequence(WORD_SEQUENCES[seqNum]);
  }, [seqNum]);

  return (
    <MainLayout>
      <WordGamePanel words={wordSequence} />
      <Box component="img" src={BfB} alt="bfb" />
      <Box
        component="img"
        src={BfB_Piano1}
        alt="bfb"
        width="25vw"
        position="absolute"
        left={0}
        bottom={0}
      />
      <Box
        component="img"
        src={BfB_Piano2}
        alt="bfb"
        width="25vw"
        position="absolute"
        right={0}
        bottom={0}
      />
      {/* {!Boolean(wordSequence.filter((word) => !word.visible).length) && (
        <ToScoresButton />
      )} */}
    </MainLayout>
  );
};
