import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavPrompt } from 'react-router-nav-prompt';

export default () => {
  const [text, setText] = useState('');

  return (
    <div>
      <NavPrompt shouldBlock={Boolean(text)}>
        {({
          blocked,
          hidePrompt,
          navigate,
        }) => (
          blocked
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
              <div><Link to="/">Submit & Back</Link></div>
            </>
          )
        )}
      </NavPrompt>
    </div>
  );
};