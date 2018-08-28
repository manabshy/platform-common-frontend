import React from "react"
import { shallow } from "enzyme"
import ImportFile from "./ImportFile"

/* global test, expect */

it("Should render correctly", () => {
  const tree = shallow(
    <ImportFile
      id="test"
      className={"dropzone"}
      maxSize={1000}
      multiple={true}
      onDropAccepted={jest.fn()}
      onDropRejected={jest.fn()}
      disableClick={false}
      disabled={false}
      disablePreview={false}
      preventDropOnDocument={true}
      minSize={100}
      onDrop={jest.fn()}
      onFileDialogCancel={jest.fn()}
    >
      <div>
        Drag and drop a .txt file here
        <br />
        Alternatively <a className="link">browse</a> for a .txt file
      </div>
    </ImportFile>
  )
  expect(tree).toMatchSnapshot()
})

it("Should render correctly with no children", () => {
  const tree = shallow(<ImportFile id="test" />)
  expect(tree).toMatchSnapshot()
})
