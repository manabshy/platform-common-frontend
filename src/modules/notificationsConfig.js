var defaultWidth = 350
var defaultColors = {
  success: {
    dismiss: "#00823B",
    border: "#004F2A",
    rgba: "199,224,213,0.96",
    shadow: "0, 0, 0, 0.5"
  },
  error: {
    dismiss: "#B10E1E",
    border: "#920A17",
    rgba: "239,224,225,0.96",
    shadow: "0, 0, 0, 0.5"
  },
  warning: {
    dismiss: "#ffbf47",
    border: "#ffbf47",
    rgba: "252,248,227,0.96",
    shadow: "0, 0, 0, 0.5"
  },
  info: {
    dismiss: "#005ea5",
    border: "#005ea5",
    rgba: "217,237,247,0.96",
    shadow: "0, 0, 0, 0.5"
  }
}

var style = {
  Containers: {
    DefaultStyle: {
      fontFamily: "inherit",
      position: "fixed",
      width: defaultWidth,
      padding: "0 10px 10px 10px",
      zIndex: 9998,
      WebkitBoxSizing: "border-box",
      MozBoxSizing: "border-box",
      boxSizing: "border-box",
      height: "auto"
    }
  },
  NotificationItem: {
    DefaultStyle: {
      position: "relative",
      width: "100%",
      cursor: "pointer",
      borderRadius: "2px",
      fontSize: "13px",
      margin: "10px 0px 0 -10px",
      padding: "10px",
      display: "block",
      WebkitBoxSizing: "border-box",
      MozBoxSizing: "border-box",
      boxSizing: "border-box",
      opacity: 0,
      transition: "0.3s ease-in-out",
      WebkitTransform: "translate3d(0, 0, 0)",
      transform: "translate3d(0, 0, 0)",
      willChange: "transform, opacity",

      isHidden: {
        opacity: 0
      },

      isVisible: {
        opacity: 1
      }
    },

    success: {
      borderTop: "0px",
      borderBottom: "4px solid " + defaultColors.success.border,
      backgroundColor: "rgba(" + defaultColors.success.rgba + ")",
      WebkitBoxShadow: "0 0 1px rgba(" + defaultColors.success.shadow + ")",
      MozBoxShadow: "0 0 1px rgba(" + defaultColors.success.shadow + ")",
      boxShadow: "0 0 1px rgba(" + defaultColors.success.shadow + ")"
    },

    error: {
      borderTop: "0px",
      borderBottom: "4px solid " + defaultColors.error.border,
      backgroundColor: "rgba(" + defaultColors.error.rgba + ")",
      WebkitBoxShadow: "0 0 1px rgba(" + defaultColors.error.shadow + ")",
      MozBoxShadow: "0 0 1px rgba(" + defaultColors.error.shadow + ")",
      boxShadow: "0 0 1px rgba(" + defaultColors.error.shadow + ")"
    },

    warning: {
      borderTop: "0px",
      borderBottom: "4px solid " + defaultColors.warning.border,
      backgroundColor: "rgba(" + defaultColors.warning.rgba + ")",
      WebkitBoxShadow: "0 0 1px rgba(" + defaultColors.warning.shadow + ")",
      MozBoxShadow: "0 0 1px rgba(" + defaultColors.warning.shadow + ")",
      boxShadow: "0 0 1px rgba(" + defaultColors.warning.shadow + ")"
    },

    info: {
      borderTop: "0px",
      borderBottom: "4px solid " + defaultColors.info.border,
      backgroundColor: "rgba(" + defaultColors.info.rgba + ")",
      WebkitBoxShadow: "0 0 1px rgba(" + defaultColors.info.shadow + ")",
      MozBoxShadow: "0 0 1px rgba(" + defaultColors.info.shadow + ")",
      boxShadow: "0 0 1px rgba(" + defaultColors.info.shadow + ")"
    }
  },
  Title: {
    DefaultStyle: {
      fontSize: "16px",
      margin: "0 35px 5px 0",
      padding: 0,
      fontWeight: "bold",
      lineheight: "20px",
      color: "#0B0C0C"
    }
  },
  MessageWrapper: {
    DefaultStyle: {
      fontSize: "16px",
      lineheight: "20px",
      margin: "0 35px 0 0",
      color: "#0B0C0C",
      padding: 0
    }
  },
  Dismiss: {
    DefaultStyle: {
      fontFamily: "Arial",
      fontSize: "30px",
      position: "absolute",
      top: "0px",
      right: "0px",
      lineHeight: "30px",
      backgroundColor: "#dededf",
      color: "#ffffff",
      borderRadius: "0%",
      width: "35px",
      height: "30px",
      fontWeight: "bold",
      textAlign: "center"
    },

    success: {
      color: "#f0f5ea",
      backgroundColor: defaultColors.success.dismiss
    },

    error: {
      color: "#f0f5ea",
      backgroundColor: defaultColors.error.dismiss
    },

    warning: {
      color: "#f0f5ea",
      backgroundColor: defaultColors.warning.dismiss
    },

    info: {
      color: "#f0f5ea",
      backgroundColor: defaultColors.info.dismiss
    }
  }
}

let notificationConfig = {
  position: "tr",
  autoDismiss: 10
}

export { style, notificationConfig }
