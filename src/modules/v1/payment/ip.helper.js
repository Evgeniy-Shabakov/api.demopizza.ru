import ipaddr from 'ipaddr.js'

export function isAllowedIp(ip, allowedIpList) {
   try {
      const addr = ipaddr.parse(ip)

      return allowedIpList.some(item => {
         if (item.includes('/')) {
            const cidr = ipaddr.parseCIDR(item)
            return addr.match(cidr)
         }
         const allowedAddr = ipaddr.parse(item)
         return addr.toString() === allowedAddr.toString()
      })
   } catch {
      return false
   }
}

