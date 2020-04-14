import Header from './Header'

export default function Layout(props) {
  return (
    <>
      <div className="main">
        <Header />
        {props.children}
      </div>
      <style jsx>{`
        .main {
          margin: 20px;
          padding: 20px;
          border: 1px solid #DDD;
        }
      `}</style>
    </>
  )
}
