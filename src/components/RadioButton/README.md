# Radio Button

## Usage

```javascript
import { Components as PCFComponents } from 'platform-common-frontend'

<PCFComponents.RadioButton />
```

## Props

- className: ClassName for the input itself
- labelClassName [string], a lassName to add to the label element
- labelTextClassName [string], a cassName to add to the label text
- wrapperClassName [string], a className to add to the element that wraps the input group
- label [string], the text to add to the radio button label. _This should always be provided_, but can be combined with a class of `visually-hidden` to hide it
- checked [boolean], this Prop controls the checked state of the input
- onChange [function], this function is called once the input changes
- name [string], this Prop is useful for grouping radio element instances

## Development Status

- [x] Ready for use (live)
- [ ] Ready for use (beta)
- [ ] Broken
- [ ] Unknown

## Test status

- [x] Well covered
- [ ] Partial
- [ ] None
- [ ] Unknown
