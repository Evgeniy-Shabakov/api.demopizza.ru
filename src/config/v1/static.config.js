import path from 'node:path'

export const staticConfig = {
   root: path.join(process.cwd(), 'storage/public'),
   prefix: '/',
   decorateReply: false,
   dotfiles: 'deny'
}
