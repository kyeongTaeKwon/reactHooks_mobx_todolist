import { KeyboardEvent } from "react";

export const onEnterPress = (callback: any) => {
  return (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      callback();
    }
  };
};
