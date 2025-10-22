// app/kontak/page.js
import KontakKami from '../components/KontakComp'; // Impor di sini

export default function KontakPage() {
    return (
        <div>
            <KontakKami
                headerTitle="Hubungi Kami"
                introMessage="Kami siap membantu Anda! Silakan isi formulir di bawah ini atau gunakan informasi kontak kami untuk menghubungi tim layanan pelanggan kami."
            />
        </div>
    );
}