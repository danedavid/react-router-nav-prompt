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
        _navPath.current = location.pathname + location.search;
        // $FlowFixMe - See https://github.com/ReactTraining/history/issues/728
        return false;
      });

      return () => {
        if ( _unblock.current )  {
          _unblock.current();
        }
      };
    }
  }, [shouldBlock]);

  const navigate = () => {
    if ( _unblock.current ) {
      _unblock.current();
      setBlocked(false);
      if ( _navPath.current ) {
        history.push(_navPath.current);
      }
    }
  };

  const hidePrompt = () => {
    setBlocked(false);
  };

  return {
    blocked,
    navigate,
    hidePrompt,
  };
}

export default useNavPrompt;