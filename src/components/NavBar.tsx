import Link from "next/link";
import { Connect } from "./Connect";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          dHedge
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Connect />
          </li>
        </ul>
      </div>
    </div>
  );
}
