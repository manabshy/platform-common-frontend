# Table component

Outputs a table based on the data structures passed in. See storybooks for usage.

## Usage

```javascript
import { Components as PCFComponents } from 'platform-common-frontend'

<PCFComponents.Table
    tableHeading={["Heading 1", "Heading 2", "Heading 3"]}
    tableBody={[
    ["Cell 1", "Cell 2", ""],
    ["Cell 4", "Cell 5", "Cell 6 (not empty)"]
    ]}
    tableCaption="My table caption"
/>
```

# Status

- [ ] Ready for use (live)
- [x] Ready for use (beta)
- [ ] Broken
- [ ] Unknown

# Test status

- [x] Well covered
- [ ] Partial
- [ ] None
- [ ] Unknown
