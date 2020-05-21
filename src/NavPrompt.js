// @flow
import React from 'react'
import useNavPrompt from './useNavPrompt';

import type { Node } from 'react';
import type { NavPromptConfig, NavPromptProps } from './types';

const NavPrompt = ({
  shouldBlock,
  children,
}: NavPromptProps) => {
  const config: NavPromptConfig = useNavPrompt({ shouldBlock });

  return children(config);
};

export default NavPrompt;