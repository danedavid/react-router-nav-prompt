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
  const unblock = useRef(null);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    if ( shouldBlock ) {
      unblock.current = history.block(() => {
        // need to use ref?
        setBlocked(true)
        console.log('Blocked');
        return false;
      });

      return () => {
        if ( unblock.current)  {
          unblock.current();
          return false;
        }
      };
    }
  }, [shouldBlock]);

  return blocked;
}

export default useNavPrompt;