# datepicker-react-vite

A React component provides a reusable inputfield.

![TypeScript](https://img.shields.io/badge/Language-TypeScript-2f74c0)
![React](https://img.shields.io/badge/Framework-React-5ed3f3)
![TailwindCSS](https://img.shields.io/badge/Framework-TailwindCSS-36B6F2)

### Features description :

- **Dynamic Label**: The label props define the content displayed inside the inputfield.

---

---

## Prerequisites

**NodeJS :** (v16.15.0 or later)
**Npm :** (v7.24.0 or later) / **Yarn :** (v1.22.18 or later)

---

---

## Installation

Install with NPM

```bash
npm install datepicker-react-vite
```

Install with YARN

```bash
yarn add datepicker-react-vite
```

---

---

## Usage/Examples

```javascript
import { Datepicker } from 'datepicker-react-vite'

const App = () => {

  return (
    <Datepicker
      label="Birthdate"
    />
  )
}

export default App
```

#### - Props

| Name        | Type                    | Description                              |
| ----------- | ----------------------- | ---------------------------------------- |
| label       | **Required** - string   | Label displayed inside the inputfield    |

---

---

## License

[MIT](https://choosealicense.com/licenses/mit/)
