// @flow
import {
  useState,
  useRef,
  useEffect,
} from 'react';
import { useHistory } from 'react-router-dom';

import type { NavPromptConfig, NavPromptParams } from './types';
import type { Location } from 'react-router-dom';

const useNavPrompt = ({
  shouldBlock,
}: NavPromptParams): NavPromptConfig  => {
  const history = useHistory();

  const _unblock = useRef<null | () => void>(null);
  const _navPath = useRef<null | string>(null);

  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    if ( shouldBlock ) {
      _unblock.current = history.block((location: Location) => {
        // need to use ref?
        setBlocked(true);
        _navPath.current = location.pathname;
      });

      return () => {
        if ( _unblock.current )  {
          _unblock.current();
        }
      };
    }
  }, [shouldBlock]);

  const unblock = () => {
    if ( _unblock.current ) {
      _unblock.current();
      setBlocked(false);
      _navPath.current && history.push(_navPath.current);
    }
  };

  const stay = () => {
    setBlocked(false);
  };

  return {
    blocked,
    unblock,
    stay,
  };
}

export default useNavPrompt;