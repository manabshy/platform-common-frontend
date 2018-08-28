# GovUkHead

Outputs a document head using https://github.com/nfl/react-helmet. With configuration for a page title.

Note that this is used by the GovUkTemplate to set HTML header tags and does not render anything to the browser. You shoud rarely, if ever, need to directly use this component.

## Usage

```javascript
import { Components as PCFComponents } from 'platform-common-frontend'

<PCFComponents.GovUkHead />
```

## Test status

- [ ] Well covered
- [x] Partial
- [ ] None
- [ ] Unknown

## Notes

This component does not have a storybook as there is nothing to render.
