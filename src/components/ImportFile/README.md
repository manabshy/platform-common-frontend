# Import File

## Usage

```javascript
import { Components as PCFComponents } from 'platform-common-frontend'

<PCFComponents.ImportFile />
```

## Props

- className: string, ClassName for the input itself
- multiple: boolean, allow dropping multiple files
- disableClick: boolean, remove the ability to click to search for files
- disabled: boolean,
- disablePreview: boolean, disable preview generation
- preventDropOnDocument: boolean, If false, allow dropped items to take over the current browser window
- inputProps: object, Pass additional attributes to the input tag
- maxSize: number, Maximum file size (in bytes)
- minSize: number, Minimum file size (in bytes)
- activeClassName: string, className to apply when drag is active
- acceptClassName: string, className to apply when drop will be accepted
- rejectClassName: string, className to apply when drop will be rejected
- disabledClassName: string, className to apply when dropzone is disabled
- onDrop: DropFilesEventHandler,
- onDropAccepted: DropFileEventHandler,
- onDropRejected: DropFileEventHandler,
- onFileDialogCancel: onFileDialogEventHandler, Provide a callback on clicking the cancel button of the file dialog

## Development Status

- [X] Ready for use (live)
- [ ] Ready for use (beta)
- [ ] Broken
- [ ] Unknown

## Test status

- [X] Well covered
- [ ] Partial
- [ ] None
- [ ] Unknown
