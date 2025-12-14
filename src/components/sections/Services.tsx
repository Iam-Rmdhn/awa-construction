export default function Services() {
  // Sample services data
  const services = [
    {
      title: 'Renovasi Rumah',
      description: 'Perbaikan dan pembaruan hunian sesuai kebutuhan dan gaya hidup Anda.'
    },
    {
      title: 'Pembangunan Kantor dan Gedung',
      description: 'Konstruksi gedung perkantoran dan komersial dengan standar terbaik.'
    },
    {
      title: 'Desain Interior dan Eksterior',
      description: 'Solusi desain menyeluruh untuk tampilan dalam dan luar bangunan.'
    },
    {
      title: 'Pengelolaan Proyek Konstruksi',
      description: 'Manajemen proyek konstruksi dari awal hingga akhir dengan efisiensi maksimal.'
    }
  ];

  return (
    <section className="py-20 bg-[#EEEEEE]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16" style={{color: '#222831'}}>Layanan Kami</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{backgroundColor: '#00ADB5'}}
              >
                <span className="text-white text-2xl font-bold">{index + 1}</span>
              </div>

              <h3 className="text-xl font-bold mb-3" style={{color: '#393E46'}}>{service.title}</h3>
              <p className="mb-4" style={{color: '#393E46'}}>{service.description}</p>

              <button
                className="text-[#00ADB5] font-semibold hover:underline"
                style={{color: '#00ADB5'}}
              >
                Pelajari Lebih Lanjut →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}