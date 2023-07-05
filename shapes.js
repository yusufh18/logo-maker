// module shapes

export async function Triangle (color) {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`;
}

export async function Square (color) {
    return `<rect x="20" y="20" width="160" height="160" fill="${color}" />`
}

export  async function Circle (color) {
    return `<circle cx="150" cy="100" r="80" fill="${color}"/>`;
}