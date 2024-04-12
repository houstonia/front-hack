export const types = [
    {
        key: "easy",
        value: "Easy"
    },
    {
        key: "normal",
        value: "Normal"
    },
    {
        key: "hard",
        value: "Hard"
    },
    {
        key: "very hard",
        value: "Very hard"
    },
]
export const modules = [
    {
        key: "reverse",
        value: "Реверс"
    },
    {
        key: "cryptography",
        value: "Криптография"
    },
    {
        key: "steganoraphy",
        value: "Стеганография"
    },
    {
        key: "web",
        value: "Web"
    },
    {
        key: "forensic",
        value: "Forensic"
    },
]

export function checkObject(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === '') {
            return true; // Если найдено пустое свойство, вернуть false
        }
    }
    return false; 
}