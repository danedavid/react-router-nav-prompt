import {
  useState,
  useRef,
  useEffect,
} from 'react';
import { useHistory } from 'react-router-dom';

const useNavPrompt = ({
  shouldBlock,
}) => {
  const history = useHistory();

  const _unblock = useRef(null);
  const _navPath = useRef(null);

  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    if ( shouldBlock ) {
      _unblock.current = history.block((location) => {
        // need to use ref?
        setBlocked(true);
        _navPath.current = location.pathname;
        return false;
      });

      return () => {
        if ( _unblock.current)  {
          _unblock.current();
        }
      };
    }
  }, [shouldBlock]);

  const unblock = () => {
    if ( _unblock.current ) {
      setBlocked(false);
      _unblock.current();
      history.push(_navPath.current);
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