import Link from "next/link";

export default function Header() {
  return (
    <>
      <h1 className="header-title">Platypus Playground</h1>
      <nav className="nav-1">
        <div className="nav-bar">
          <Link href="/">Home</Link>
        </div>
        <div className="nav-bar">
          <Link href="/paddle">Paddle</Link>
        </div>
      </nav>
    </>
  );
}
