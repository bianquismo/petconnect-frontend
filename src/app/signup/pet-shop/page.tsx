import Image from 'next/image';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import Link from 'next/link';

export default function SignupPetShopPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className="w-full max-w-md">
                <h1 className={`text-center text-[#BAD36D] font-light text-2xl mb-8`}>
                    CADASTRO DE PET SHOP
                </h1>
                <form className="space-y-6">
                    <Input label='Nome' htmlFor="name" type="text"
                        id="name"
                        name="name" placeholder="Petz - Seu Campeão"
                        required />
                    <Input label='Endereço' htmlFor="address" type="text"
                        id="address"
                        name="address" placeholder="Av Vicente Rao, 1700, CEP.: 04662-003"
                        required />
                    <Input label='Telefone' htmlFor="phoneNumber" type="text"
                        id="phoneNumber"
                        name="phoneNumber" placeholder="(11) 91234-5678"
                        required />
                    <Input label='Horário de Funcionamento' htmlFor="openHours" type="text"
                        id="openHours"
                        name="openHours" placeholder="08:00 às 19:00"
                        required />
                    <Input label='Logotipo da Empresa' htmlFor="petshopLogo" type="file"
                        id="petshopLogo"
                        name="petshopLogo" placeholder="nenhum arquivo selecionado"
                        required />
                    <Button
                        type="submit"
                    >
                        cadastrar
                    </Button>
                </form>
                <div className="flex flex-col items-center mt-4">
                    <Link href="/" className="text-sm font-light text-[#BAD36D] mx-2">início</Link>
                </div>
            </div>
        </div>
    );
}
