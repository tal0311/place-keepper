function initUser() {
 console.log('init user');
 renderUserPrefs()
}

function handleSubmit(ev) {
 ev.preventDefault()
 console.log('ev', ev)
 const elForm = ev.target
 const formData = new FormData(elForm)
 const user = Object.fromEntries(formData)

 setUser(user)
 renderUserPrefs()
}

function renderUserPrefs() {
 const user = getUser()
 if (!user) return
 const { bgColor, txtColor } = user
 console.log('bgColor, textColor:', bgColor, txtColor)
 const elBody = document.querySelector('body')
 elBody.style.backgroundColor = bgColor
 elBody.style.color = txtColor
}