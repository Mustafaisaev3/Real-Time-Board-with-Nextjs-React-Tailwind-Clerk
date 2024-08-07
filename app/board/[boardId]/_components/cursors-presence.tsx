"use client";

import { memo } from "react";
import { shallow } from "@liveblocks/client";

import { 
  useOthersConnectionIds, 
  useOthersMapped
} from "@/liveblocks.config";
import { colorToCss } from "@/lib/utils";

import { Cursor } from "./cursor";

const Cursors = () => {
  const ids = useOthersConnectionIds();

  return (
    <>
      {ids.map((connectionId) => (
        <Cursor
          key={connectionId}
          connectionId={connectionId}
        />
      ))}
    </>
  );
};

export const CursorsPresence = memo(() => {
  return (
    <>
      <Cursors />
    </>
  );
});

CursorsPresence.displayName = "CursorsPresence";