import React from "react"
import Dropzone from 'react-dropzone'
import PropTypes from 'prop-types'
import uuid from 'uuid'

import './ImportFile.scss'

const ImportFile = ({
    id,
    className, 
    maxSize, 
    multiple, 
    onDropAccepted, 
    onDropRejected, 
    children,
    disabled,
    disablePreview,
    preventDropOnDocument,
    inputProps,
    minSize,
    activeClassName,
    acceptClassName,
    rejectClassName,
    disabledClassName,
    onDrop,
    onFileDialogCancel,
    disableClick
}) => (
    <Dropzone
        id={id}
        className={className}
        maxSize={maxSize}
        multiple={multiple}
        onDropAccepted={onDropAccepted}
        onDropRejected={onDropRejected} 
        disableClick={disableClick}
        disabled={disabled}
        disablePreview={disablePreview}
        preventDropOnDocument={preventDropOnDocument}
        inputProps={inputProps}
        minSize={minSize}
        activeClassName={activeClassName}
        acceptClassName={acceptClassName}
        rejectClassName={rejectClassName}
        disabledClassName={disabledClassName}
        onDrop={onDrop}
        onFileDialogCancel={onFileDialogCancel}
    >
        <div>
            {children}
        </div>
    </Dropzone>
)

ImportFile.propTypes = {
    className: PropTypes.string,
    maxSize: PropTypes.number,
    multiple: PropTypes.bool,
    onDropAccepted: PropTypes.func,
    onDropRejected: PropTypes.func,
    disabled: PropTypes.bool,
    disablePreview: PropTypes.bool,
    preventDropOnDocument: PropTypes.bool,
    inputProps: PropTypes.object,
    minSize: PropTypes.number,
    activeClassName: PropTypes.string,
    acceptClassName: PropTypes.string,
    rejectClassName: PropTypes.string,
    disabledClassName: PropTypes.string,
    onDrop: PropTypes.func,
    onFileDialogCancel: PropTypes.func,
    disableClick: PropTypes.bool,
    id: PropTypes.string
}

ImportFile.defaultProps = {
   multiple: false,
   className: 'dropzone',
   id: `Import-File-${uuid.v4()}`
}

export default ImportFile