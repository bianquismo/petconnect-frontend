import Image from 'next/image';

export default function HomePage() {
    const primaryGreen = "#BAD36D"

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className="w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <Image src="/assets/brand.png" alt="Brand Logo" width={100} height={100} />
                </div>
                <h1 className={`text-center text-[${primaryGreen}] font-light text-2xl mb-8`}>
                    LOGIN
                </h1>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-[#353535] py-3">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none text-lg placeholder-[#BFBFBF] border-[#BAD36D] text-[#949494]`}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-[#353535] py-3">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={`mb-16
                             mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none text-lg placeholder-[#BFBFBF] border-[#BAD36D] text-[#949494]`}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className={`w-full bg-[#BAD36D] text-black font-bold py-2 px-4 rounded-md focus:outline-none`}
                        >
                            entrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
