class CookieService {
  cookie(name, value, options) {
    if (typeof value !== "undefined") {
      if (value === false || value === null) {
        return this.setCookie(name, "", { days: -1 })
      } else {
        return this.setCookie(name, value, options)
      }
    } else {
      return this.getCookie(name)
    }
  }

  setCookie(name, value, options) {
    options = options || {}
    let cookieString = name + "=" + value + "; path=/"
    if (options.days) {
      const date = new Date()
      date.setTime(date.getTime() + options.days * 24 * 60 * 60 * 1000)
      cookieString += `; expires= ${date.toGMTString()}`
    }
    if (document.location.protocol === "https:") {
      cookieString += "; Secure"
    }
    document.cookie = cookieString
  }

  getCookie(name) {
    const nameEQ = `${name}=`
    const cookies = document.cookie.split(";")
    let ret = null
    cookies.some(cookie => {
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1, cookie.length)
      }
      if (cookie.indexOf(nameEQ) === 0) {
        ret = decodeURIComponent(cookie.substring(nameEQ.length))
        return true
      }
    })
    return ret
  }
}

export default new CookieService()
