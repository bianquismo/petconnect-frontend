import Image from 'next/image';
import { Button } from '../../components/Button';
import Link from 'next/link';

export default function SignupPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className="w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <Image src="/assets/brand.png" alt="Brand Logo" width={100} height={100} />
                </div>
                <div className="space-y-6">
                    <Button
                        type="button"
                    >
                        <Link href='/signup/user'>
                            Cadastro Usuário
                        </Link>
                    </Button>
                    <Button
                        type="button"
                    >
                        <Link href='/signup/pet-shop'>
                            Cadastro Pet Shop
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
