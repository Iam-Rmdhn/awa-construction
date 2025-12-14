export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center text-gray-500">
              Gambar Tim/Kantor
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-[#222831]" style={{color: '#222831'}}>Tentang Kami</h2>

            <p className="text-lg mb-6" style={{color: '#393E46'}}>
              Kami adalah perusahaan konstruksi yang telah berpengalaman lebih dari 10 tahun dalam renovasi rumah dan bangunan komersial.
              Tim ahli kami siap membantu merancang dan membangun ruang impian Anda.
            </p>

            <div className="bg-[#EEEEEE] p-6 rounded-lg mb-6">
              <p className="italic" style={{color: '#393E46'}}>&quot;Pengerjaan tepat waktu, kualitas terjamin, dan harga kompetitif adalah komitmen kami.&quot;</p>
              <p className="mt-2 font-semibold" style={{color: '#393E46'}}>- Klien Terpuaskan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}