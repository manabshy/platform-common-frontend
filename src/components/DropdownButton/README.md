# Dropdown Button

This component provides a dropdown button that allows you to add custom functions for each option. You can also pass in your own components into the options such as Links

## Usage

```javascript
import { Components as PCFComponents } from 'platform-common-frontend'

<PCFComponents.DropdownButton />
```

**Add Custom functions **

```javascript
const customFunction = () => {
  alert("You clicked an Event")
}

<DropdownButton title="Dropdown Events" menu={{content: "Event 1", handler: customFunction}}
```
