import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Anasayfa</Link>
        </li>
        <li>
          <Link href="/about">Hakkımızda</Link>
        </li>
        <li>
          <Link href="/service-details">Hizmetler</Link>
        </li>

        <li>
          <Link href="/contact">İletişim</Link>
        </li>
      </ul>
    </>
  );
}
