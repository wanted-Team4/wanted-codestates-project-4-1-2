import { atom } from "recoil";

export const likedRepoState = atom({
  key: "likedRepoState",
  default: [],
});

export const likedIssueState = atom({
  key: "likedIssueState",
  default: [],
});
