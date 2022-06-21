const bcrypt = require('bcrypt')
const saltRounds = 12

export const hashPassword: (password: string)=>Promise<string> = async (password) => {
    return await bcrypt.hash(password, saltRounds)
}
export const verifyPassword: (password: string, passwordHash: string) => Promise<boolean> = async (password, passwordHash) => {
    return await bcrypt.compare(password, passwordHash)
}
