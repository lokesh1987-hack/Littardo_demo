import Link from 'next/link'
import Image from 'next/image';
import { companyLogo } from '@app/Common/ImageUrl';

function LogoLink() {
    return (
      <div className="text-center sm:mb-0">
        <Link href="/">
            <Image src={companyLogo} alt="Logo" width={127} height={56} priority />
        </Link>
      </div>
    );
}
export default LogoLink
