import { Layout } from '@/components/Layout'
import { Fragment } from 'react'
import { useUsers } from '../../api'

function Landing() {
  const { data } = useUsers({ userKey: 'woen4' })

  return (
    <Layout>
      <Fragment>
        <h1 className="text-3xl font-bold leading-relaxed text-zinc-100">
          React Template with
        </h1>
        <h1 className="text-5xl font-bold leading-relaxed text-zinc-100">
          Vite + Tailwind + NextUI
        </h1>
        <h1 className="mt-20 text-3xl font-bold leading-relaxed text-zinc-100">
          Made with ❤️ by{' '}
          <a className="underline" href={data?.html_url}>
            {data?.login}
          </a>
        </h1>
      </Fragment>
    </Layout>
  )
}

export { Landing }
