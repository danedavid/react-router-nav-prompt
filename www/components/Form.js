import React, { useState, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useNavPrompt } from 'react-router-nav-prompt';

export default () => {
  const [text, setText] = useState('');
  const history = useHistory();

  const {
    blocked,
    hidePrompt,
    navigate,
  } = useNavPrompt({
    shouldBlock: Boolean(text),
  });

  return (
    <div>
    {blocked
      ? (
        <div>
          <div>
            State your action?
          </div>
          <div>
            <button
              onClick={() => {
                //stay here
                hidePrompt();
              }}
            >
              Stay here, complete the form
            </button>
            <button
              onClick={() => {
                //go
                navigate();
              }}
            >
              No, wanna go back
            </button>
          </div>
        </div>
      ) : (
        <>
          Form
          <div>
            <input
              type="text"
              onChange={ev => setText(ev.target.value)}
              value={text}
            />
          </div>
          <div><Link to="/">Cancel & go back</Link></div>
          <div>
            <a
              onClick={() => {
                setText('');
                setTimeout(() => {
                  history.push('/')
                }, 0);
              }}
            >
              Submit & Back
            </a>
          </div>
        </>
      )}
    </div>
  );
};