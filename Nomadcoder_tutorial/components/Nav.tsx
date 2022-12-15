import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  return (
    <div>
      <Link href="/">
        <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>HOME</a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === "/about" ? "red" : "blue" }}>
          ABOUT
        </a>
      </Link>
    </div>
  );
};

export default Nav;
