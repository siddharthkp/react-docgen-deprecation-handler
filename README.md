<p align="center">
  <img src="https://raw.githubusercontent.com/siddharthkp/react-docgen-deprecation-handler/master/logo.png" />
  <br><br>
  <b>Add deprecation status in prop types</b>
  <br><br>
  <img src="https://travis-ci.org/siddharthkp/react-docgen-deprecation-handler.svg?branch=master&maxAge=3600"/>
</p>

&nbsp;

#### install

```
npm install react-docgen-deprecation-handler --save-dev
```

&nbsp;

#### what does it do?

You can add `@deprecated` in the leading comments for a prop,
and it will appear in the documentation as a key

```jsx
const Component = () => <div />

Component.propTypes = {
  /** @deprecated dont use this prop */
  old: PropTypes.any,
  /** this isn't deprecated, use it */
  new: PropTypes.any
}

export default Component
```

⬇️

```js
{
  displayName: "Component",
  props: {
    old: {
      type: { name: 'any' },
      required: false,
      description: "dont use this prop",
👉    deprecated: true
    },
    new: {
      type: { name: 'any' },
      required: false,
      description: "this isn't deprecated, use it"
    }
  }
}
```

&nbsp;

#### usage

```js
const repo = require("react-docgen-deprecation-handler")

const handlers = docgen.defaultHandlers.concat(deprecationHandler)

const data = docgen.parse(code, null, handlers)
```

&nbsp;

#### like it?

:star: this repo

&nbsp;

#### license

MIT © [siddharthkp](https://github.com/siddharthkp)
