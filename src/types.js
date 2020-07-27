// @flow
export type NavPromptConfig = {
  blocked: boolean,
  navigate: () => void,
  hidePrompt: () => void,
};

export type NavPromptParams = {
  shouldBlock: boolean,
};

export type NavPromptProps = {
  shouldBlock: boolean,
  children: (NavPromptConfig) => Node,
};