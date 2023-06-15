const STORAGE_KEY = 'user_db'
const STORAGE_KEY_LOC = 'loc'

// const user = {
//  email: '',
//  txtColor: '',
//  bgColor: '',
//  DOB: '',
// }

function setUser(user) {
 let userToEdit = getUser()
 userToEdit = { ...userToEdit, ...user }
 saveToStorage(STORAGE_KEY, userToEdit)
}

function getUser() {
 return loadFromStorage(STORAGE_KEY)
}

function saveSelectedPlace(loc) {
 saveToStorage(STORAGE_KEY_LOC, loc)
}

function getSelectedPlace() {
 return loadFromStorage(STORAGE_KEY_LOC)
}

