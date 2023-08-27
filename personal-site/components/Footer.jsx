


"use client"

import Link from 'next/link';
import { TwitterLogo, EnvelopeSimple, GithubLogo, LinkedinLogo, FileText } from 'phosphor-react';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <p className="sm:flex sm:justify-center sm:space-x-12 text-center sm:text-[15px] text-[12px]">
          Places you can find me on the internet
        </p>

        <div>
          <ul className="mt-5 flex justify-center space-x-5">
            <li>
              <Link href="#" className="hover-tooltip " title="Twitter">
                <TwitterLogo size={20} color="#99859d" weight="fill"  />
              </Link>
            </li>
            <li>
              <Link href="#" className="hover-tooltip" title="Email">
                <EnvelopeSimple size={20} color="#99859d" weight="fill" />
              </Link>
            </li>
            <li>
              <Link href="#" className="hover-tooltip" title="GitHub">
                <GithubLogo size={20} color="#99859d" weight="fill" />
              </Link>
            </li>
            <li>
              <Link href="#" className="hover-tooltip" title="LinkedIn">
                <LinkedinLogo size={20} color="#99859d" weight="fill" />
              </Link>
            </li>
            <li>
              <Link href="#" className="hover-tooltip" title="Resume">
                <FileText size={20} color="#99859d" weight="fill" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
