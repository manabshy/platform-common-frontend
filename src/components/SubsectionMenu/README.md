# SubsectionMenu

## Usage

```javascript
import { Components as PCFComponents } from 'platform-common-frontend'

<PCFComponents.SubsectionMenu />
```

## Props

- selected: [boolean], changed upon whether the button is selected or not
- onClickHandler: [function], a function passed into to component to change selected / other action the application needs e.g. change page state or call dispatch
- title: [string], the title of the button
- index: [number], passed into the component as to what position the button is in the menu e.g. 5th button down

## Function example

- Set up a function that sets this.state.selected

```js
setSelected = index => {
    this.setState({
        selected: index
    })
}
```

- Have this.state.selected and setSelected function passed into the component

```js
list.map((item, index) => (
    <SubsectionButton
        selected={this.state.selected === index}
        onClickHandler={() => this.setSelected(index)}
        title="example"
    />
)
```

- This will update the selected button

## Development Status

- [ ] Ready for use (live)
- [X] Ready for use (beta)
- [ ] Broken
- [ ] Unknown

## Test status

- [ ] Well covered
- [X] Partial
- [ ] None
- [ ] Unknown