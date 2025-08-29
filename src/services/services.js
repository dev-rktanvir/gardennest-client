export const myApplicationPromiss = (email) => {
    return fetch(`http://localhost:5000/tips?email=${email}`).then(res => res.json())
}