import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'

export const MenuItemPCNormal = props => {
  const { link } = props
  const router = useRouter()
  const selected = router.pathname === link.href || router.asPath === link.href
  if (!link || !link.show) {
    return null
  }

  return (
    <SmartLink
      key={`${link.id}-${link.slug}`}
      title={link.name}


      /* 👇👇👇 === 核心修改在这里 (原第16行) === 👇👇👇 */
      /* 逻辑：如果 link.href 等于 '/'，就跳转去主站；否则去它该去的地方 */
      href={link.href === '/' ? 'https://www.xiaoweihome.cn' : link.href}
      /* 👆👆👆 === 修改结束 === 👆👆👆 */



      className={
        'px-2 duration-300 text-sm justify-between dark:text-gray-300 cursor-pointer flex flex-nowrap items-center ' +
        (selected
          ? 'bg-green-600 text-white hover:text-white'
          : 'hover:text-green-600')
      }>
      <div className='items-center justify-center flex '>
        <i className={link.icon} />
        <div className='ml-2 whitespace-nowrap'>{link.name}</div>
      </div>
      {link.slot}
    </SmartLink>
  )
}
