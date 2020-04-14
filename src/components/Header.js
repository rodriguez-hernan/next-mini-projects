import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/currency">
        <a>Currency</a>
      </Link>
      <style jsx>{`
        a {
          margin-right: 15px;
        }
      `}</style>
    </div>
  )
}
