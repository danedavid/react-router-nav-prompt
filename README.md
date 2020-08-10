# react-router-nav-prompt

> Simple component & hook primitives to provide customisable prompt messages when user tries to leave the page in React Router

## Usage

Installation: `npm i --save react-router-nav-prompt`

`useNavPrompt`:
```JSX
import { useNavPrompt } from 'react-router-nav-prompt';
import Modal from 'your-component-library';

const FormComponent () => {
  const [email, setEmail] = useState('');

  const {
    blocked,
    hidePrompt,
    navigate,
  } = useNavPrompt({
    shouldBlock: Boolean(email),
  });

  if (blocked) {
    return (
      <Modal>
        <div>
          Are you sure you want to leave this page?
        </div>
        <button onClick={hidePrompt}>Stay & fill the form</button>
        <button onClick={navigate}>Continue without saving</button>
      </Modal>
    );
  }

  return (
    <div>
      <input
        type="text"
        onChange={(ev) => setEmail(ev.target.value)}
        value={email}
      />
    </div>
  );
};
```


`<NavPrompt />`:
```JSX
import { NavPrompt } from 'react-router-nav-prompt';
import Modal from 'your-component-library';

const FormComponent () => {
  const [email, setEmail] = useState('');

  const {
    blocked,
    hidePrompt,
    navigate,
  } = useNavPrompt({
    shouldBlock: Boolean(email),
  });

  return (
    <NavPrompt>
      {({
        blocked,
        hidePrompt,
        navigate,
      }) => (
        blocked
        ? (
          <Modal>
            <div>Are you sure you want to leave this page?</div>
            <button onClick={hidePrompt}>Stay & fill the form</button>
            <button onClick={navigate}>Continue without saving</button>
          </Modal>
        ) : (
          <div>
            <input
              type="text"
              onChange={(ev) => setEmail(ev.target.value)}
              value={email}
            />
          </div>
        )
      )}
    </NavPrompt>
  );
};
```

## API

*`useNavPrompt`*: React hook to control the visibility of prompt UI.
*`<NavPrompt/>`*: Component with render prop.

  *Parameters/Props (is an `{}` of)*:
  - `shouldBlock (boolean)`: Whether route change should be blocked.

  *Return value/child parameters (is an `{}` of)*:
  - `blocked (boolean)`: Route change is currently blocked. Show the prompt UI.
  - `hidePrompt (function)`: Set `blocked` to false & cancel the route navigation.
  - `navigate (function)`: Unblock & continue to the route to which navigation occurred.

## Implementation Notes

- `history.block` API might change in v5. See [history#690](https://github.com/ReactTraining/history/issues/690)


## Contributing

Find any issues? API/features need improvement? [Create an issue](https://github.com/danedavid/react-router-nav-prompt/issues) or hit me up @ [@this_dane](https://twitter.com/this_dane)!

---

Made with ❤ by [danedavid](https://github.com/danedavid)
