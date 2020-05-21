// @flow
export type NavPromptConfig = {
  blocked: boolean,
  unblock: () => void,
  stay: () => void,
};

export type NavPromptParams = {
  shouldBlock: boolean,
};

export type NavPromptProps = {
  shouldBlock: boolean,
  children: (NavPromptConfig) => Node,
};