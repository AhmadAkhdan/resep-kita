"use client";
export default function KontakKami() {
    return (
        <div className="max-w-5xl mx-auto p-8 space-y-10">

            {/* Header & Intro */}
            <div className="text-center space-y-2">
                <h1 className="text-4xl font-bold text-white-800">Hubungi Kami</h1>
                <p className="text-white-600 text-lg">
                    Kami senantiasa siap membantu Anda. Silakan menghubungi kami melalui form di bawah atau informasi kontak yang tersedia.
                </p>
            </div>

            {/* Info Perusahaan */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4 border rounded-lg shadow-sm">
                    <h3 className="font-semibold text-white-700">Alamat</h3>
                    <p className="text-white-500 mt-1">Jl. Melati 1 No.9, Serang, Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17530</p>
                </div>
                <div className="p-4 border rounded-lg shadow-sm">
                    <h3 className="font-semibold text-white-700">Telepon</h3>
                    <p className="text-white-500 mt-1">+62 812-3456-7890</p>
                </div>
                <div className="p-4 border rounded-lg shadow-sm">
                    <h3 className="font-semibold text-white-700">Email</h3>
                    <p className="text-white-500 mt-1">ResepKitolah@rsp.com</p>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
                <form action="#" method="POST" className="space-y-5">
                    <div>
                        <label htmlFor="nama" className="block text-gray-700 font-medium mb-1">
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            id="nama"
                            name="nama"
                            required
                            placeholder="Masukkan nama lengkap Anda"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Masukkan email Anda"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="subjek" className="block text-gray-700 font-medium mb-1">
                            Subjek
                        </label>
                        <input
                            type="text"
                            id="subjek"
                            name="subjek"
                            required
                            placeholder="Judul pesan"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="pesan" className="block text-gray-700 font-medium mb-1">
                            Pesan Anda
                        </label>
                        <textarea
                            id="pesan"
                            name="pesan"
                            rows={5}
                            required
                            placeholder="Tulis pesan Anda di sini"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                        >
                            Kirim Pesan
                        </button>
                    </div>
                </form>
            </div>

            {/* Footer ramah-profesional */}
            <p className="text-white-500 text-center text-sm">
                Kami akan membalas pesan Anda secepatnya. Terima kasih telah menghubungi kami.
            </p>
        </div>
    );
}
