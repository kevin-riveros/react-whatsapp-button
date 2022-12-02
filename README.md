# React Whatsapp floating button

A simple react component to show a Whatsapp floating button.

![With a custom style](http://url/to/img.png)

**Content**

- [React Whatsapp floating button](#react-whatsapp-floating-button)
  - [Features ✨](#features-)
  - [Install 🐙](#install-)
  - [Usage 💡](#usage-)
  - [Examples 🖍](#examples-)
    - [With an animation](#with-an-animation)
    - [With a custom style](#with-a-custom-style)
  - [Props 🤖](#props-)
  - [Contributing 🍰](#contributing-)
  - [Maintainers 👷](#maintainers-)
  - [License ⚖️](#license-️)

## Features ✨
* Fast.
* Lightweight.
* Easy to use.
* Good for all kind of projects.

## Install 🐙

You can install react-whatsapp-button by entering this command
```
npm i react-whatsapp-button
```

## Usage 💡

```javascript

import React from "react";
import ReactWhatsappButton from "react-whatsapp-button";

function App() {
  return (
    <div className="App">
      <ReactWhatsappButton
        countryCode="51"
        phoneNumber="987654321"
      />
    </div>
  )
}

export default App;

```

## Examples 🖍
### With an animation

![With an animation](http://url/to/img.png)

```javascript

import React from "react";
import ReactWhatsappButton from "react-whatsapp-button";

function App() {
  return (
    <div className="App">
      <ReactWhatsappButton
        countryCode="51"
        phoneNumber="987654321"
        animated
      />
    </div>
  )
}

export default App;

```

### With a custom style

![With a custom style](http://url/to/img.png)


```javascript

import React from "react";
import ReactWhatsappButton from "react-whatsapp-button";

function App() {
  return (
    <div className="App">
      <ReactWhatsappButton
        countryCode="51"
        phoneNumber="987654321"
        style={{
            backgroundColor: "#00a4f5",
            right: "unset",
            left: "10px",
        }}
      />
    </div>
  )
}

export default App;

```


You can try all the variations here: https://react-whatsapp-button.vercel.app/?path=/story/whatsapp-button--default

## Props 🤖

| Attribute      |     Type     |  Default  |  Required  | Description                                                                                              |
| :------------- | :----------: | :-------: | :-------: | :------------------------------------------------------------------------------------------------------- |
| countryCode    |   `string`   |    ""     |   yes     | country code without +. Example: 51   |
| phoneNumber    |   `string`   |    ""     |   yes     | Phone Number                          |
| message        |   `string`   |    ""     |   no      | Custom message                          |
| animated       |   `boolean`  |  `false`  |   no      | Add an animation to the button                          |
| callback       |   `function` | `() => {}`|   no      | Add a callback function to the button                          |
| style          |   `object`   |   `{}`    |   no      | Modify the default style with a custom object                          |

## Contributing 🍰
Feel free to add a new pull request to improve this amazing package.

Thank you to all the people who already contributed to this project!

## Maintainers 👷

<table>
  <tr>
    <td align="center"><a href="https://kevinriveros.com/"><img src="https://avatars.githubusercontent.com/u/31625572?v=4" width="100px;" alt="Kevin Riveros"/><br /><sub><b>Kevin Riveros</b></sub></a><br /><a href="#" title="Code">💻</a></td>
  </tr>
</table>

## License ⚖️
MIT