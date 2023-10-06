import { ReactNode } from 'react'

interface ILayout {
  children: ReactNode
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-8">
      {children}
    </div>
  )
}

export { Layout }
