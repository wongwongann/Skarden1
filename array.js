const dataArray = [
  {
    id: 1,
    nama: "Brokoli",
    deskripsi:
      "Brokoli segar pilihan dengan warna hijau cerah, kaya akan serat, vitamin C, dan antioksidan. Cocok untuk berbagai hidangan sehat seperti sup, tumisan, atau salad.",
    harga: 30000,
    diskon: 60000,
    gambar:
      "https://static.vecteezy.com/system/resources/previews/029/721/159/non_2x/broccoli-transparent-background-png.png",
    gambarBawah: [
      "https://www.acquagarden.co.uk/cdn/shop/files/acquagarden-broccoli-green-magic-37943660150939.jpg?v=1725036308",
      "https://healthycoursemeals.com/wp-content/uploads/Steamed-Broccoli-600x600.webp",
      "https://flavorgod.com/cdn/shop/files/43809595588803.png?v=1744135765",
      "https://bakeitwithlove.com/wp-content/uploads/2021/04/Microwave-Steamed-Broccoli-lg-600x600.jpg.webp",
    ],
    jenis: "Sayuran",
    berat: "500g",
    manfaat: "Kaya akan vitamin C, serat dan antioksidan.",
    qna: [
      {
        tanya: "Apa manfaat brokoli?",
        jawab: "Brokoli kaya vitamin C dan antioksidan.",
      },
      {
        tanya: "Bagaimana memasak brokoli?",
        jawab: "Dikukus, direbus, atau ditumis.",
      },
      {
        tanya: "ok untuk diet?",
        jawab: "Ya, rendah kalori dan menyehatkan.",
      },
      {
        tanya: "Bagaimana menyimpan brokoli?",
        jawab: "Simpan di kulkas agar tetap segar.",
      },
    ],
    namaKomen: ["Dewi Lestari", "Andi Prasetyo", "Lina Kartika"],
    isiKomen: [
      "Segar dan renyah.",
      "Warna hijau cerah.",
      "Cocok untuk sup dan salad.",
    ],
  },
  {
    id: 2,
    nama: "Wortel",
    deskripsi:
      "Wortel segar dengan warna oranye cerah, manis alami dan enak buat sup, jus, atau tumisan.",
    harga: 25000,
    diskon: 50000,
    gambar:
      "https://wallpapers.com/images/featured/carrot-png-7crm54jnhoaaa46f.jpg",
    gambarBawah: [
      "https://cdn.rri.co.id/berita/Semarang/o/1726731126765-Foto_Artikel_18_-_Ilustrasi_Wortel_dalam_Keranjang_(Foto_Pixabay)/uihvw2tp6qi5jxm.jpeg",
      "https://cdn.rri.co.id/berita/Semarang/o/1726730108872-Foto_Artikel_17_-_Ilustrasi_Wortel_(Foto_Pixabay)/nts1xh408j866la.jpeg",
      "https://image.made-in-china.com/202f0j00IUhRSMEwHKzD/Fresh-Red-Carrot-with-Small-Size.webp",
      "https://image.idntimes.com/post/20240401/1000044192-8f4726724a317a02dc11c1cc59fa734c-f50d94cd28bd827b94375d0f0e6d5177.jpg?tr=w-1200,f-webp,q-75&width=1200&format=webp&quality=75",
    ],
    jenis: "Sayuran",
    berat: "500g",
    manfaat: "Menjaga kesehatan mata, baik untuk kulit, dan kaya antioksidan.",
    qna: [
      {
        tanya: "Apa manfaat wortel?",
        jawab: "Wortel kaya vitamin A dan baik untuk mata.",
      },
      {
        tanya: "Bagaimana memasak wortel?",
        jawab: "Dikukus, direbus, atau ditumis.",
      },
      { tanya: "Cocok untuk diet?", jawab: "Ya, rendah kalori dan sehat." },
      {
        tanya: "Bagaimana menyimpan wortel?",
        jawab: "Simpan di kulkas agar tetap segar.",
      },
    ],
    namaKomen: ["Dewi Lestari", "Andi Prasetyo", "Lina Kartika"],
    isiKomen: ["Segar dan manis.", "Cocok untuk sup.", "Pengiriman cepat."],
  },
  {
    id: 3,
    nama: "Bayam",
    deskripsi:
      "Daun bayam hijau segar, lembut, cocok buat sayur bening atau smoothies sehat.",
    harga: 20000,
    diskon: 40000,
    gambar: "https://pngimg.com/d/spinach_PNG33.png",
    gambarBawah: [
      "https://pasarsegar.co.id/wp-content/uploads/2022/06/image_picker530363931585168106-1.jpg",
      "https://parto.id/asset/foto_produk/Gambar_Bayam_jpg_171505819382.jpg",
      "https://cdn.rri.co.id/berita/Nunukan/o/1752614341604-49B3FAEC-9F39-4234-BA81-64156953858D/fko47cyat5dfciq.jpeg",
      "https://www.astronauts.id/blog/wp-content/uploads/2022/08/Tidak-Cepat-Layu-Ini-Cara-Menyimpan-Sayur-Bayam-Di-Kulkas.jpg",
    ],
    jenis: "Sayuran",
    berat: "600g",
    manfaat: "Membantu pencernaan, menyehatkan tulang, dan tinggi antioksidan.",
    qna: [
      {
        tanya: "Apa manfaat bayam?",
        jawab: "Bayam kaya zat besi dan antioksidan.",
      },
      {
        tanya: "Bagaimana memasak bayam?",
        jawab: "Dikukus atau dibuat sayur bening.",
      },
      { tanya: "Cocok untuk diet?", jawab: "Ya, rendah kalori dan sehat." },
      {
        tanya: "Bagaimana menyimpan bayam?",
        jawab: "Simpan di kulkas agar tetap segar.",
      },
    ],
    namaKomen: ["Dewi Lestari", "Andi Prasetyo", "Lina Kartika"],
    isiKomen: [
      "Segar dan lembut.",
      "Warna hijau cerah.",
      "Cocok untuk smoothies atau sayur.",
    ],
  },
  {
    id: 4,
    nama: "Kubis keriting",
    deskripsi:
      "Daunnya hijau bergelombang, segar, kaya serat dan vitamin. Cocok untuk lalapan, sup, atau tumisan.",
    harga: 23000,
    diskon: 46000,
    gambar:
      "https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/512/512/true/eyJpZCI6IjQ5MWFhZDBmZjFmNjI2MmM3NjRlNTA1NWVkZWYyNTRmLmpwZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=64ccfa2c9d19ea8ef3f38992c7ca4869d3058c8227947079ff7af3007907ca35",
    gambarBawah: [
      "https://media.istockphoto.com/id/491901806/id/video/kale-segar-dari-dekat.jpg?s=640x640&k=20&c=PWafz0b2RLOI_qA2wY1bKa-PCi-BlmeKs2C8KpwbEZo=",
      "https://cdn.pixabay.com/photo/2013/02/21/19/01/cabbage-84456_1280.jpg",
      "https://healthybelly.s3.amazonaws.com/gambar_sampul/gambar_sampul_1694790946.webp",
      "https://png.pngtree.com/thumb_back/fh260/background/20240614/pngtree-curled-edges-of-curly-leaf-kale-leaf-cabbage-image_15754880.jpg",
    ],
    jenis: "Sayuran",
    berat: "500g",
    manfaat: "Kaya vitamin K, serat, dan antioksidan.",
    qna: [
      {
        tanya: "Manfaat kubis keriting?",
        jawab: "Kaya vitamin K dan antioksidan.",
      },
      {
        tanya: "Bagaimana mengolahnya?",
        jawab: "Dikukus, ditumis, atau salad.",
      },
      { tanya: "Cocok untuk diet?", jawab: "Ya, rendah kalori dan sehat." },
      { tanya: "Cara menyimpan?", jawab: "Simpan di kulkas agar tetap segar." },
    ],
    namaKomen: ["Dewi Lestari", "Andi Prasetyo", "Lina Kartika"],
    isiKomen: [
      "Segar dan renyah.",
      "Warna hijau cerah.",
      "Cocok untuk salad atau tumisan.",
    ],
  },
  {
    id: 5,
    nama: "Timun",
    deskripsi:
      "Bagian dalamnya segar berair dengan rasa ringan, pas untuk lalapan, acar, atau jus.",
    harga: 18000,
    diskon: 36000,
    gambar:
      "https://purepng.com/public/uploads/large/purepng.com-cucumbercucumbervegetablespicklegreenfoodhealthycucumbers-481522161925n6wbx.png",
    gambarBawah: [
      "https://awsimages.detik.net.id/community/media/visual/2022/02/09/mentimun_169.jpeg?w=600&q=90",
      "https://cdn-brilio-net.akamaized.net/news/2025/02/06/319738/750xauto-kenali-ciri-cirinya-ini-5-trik-memilih-timun-segar-dan-bebas-rasa-pahit-250206g.jpg",
      "https://asset.kompas.com/crops/fiGOAc-9jTMkC7s0BnKHhhyStCo=/0x22:612x430/1200x800/data/photo/2023/10/04/651d5a4cac565.jpeg",
      "https://cms.soulofjakarta.id/uploads/article/2024-02-20/d2faf0f81d32932526f005156c628d5c.jpeg",
    ],
    jenis: "Sayuran",
    berat: "500g",
    manfaat: "Menjaga hidrasi dan kesehatan kulit.",
    qna: [
      {
        tanya: "Apa manfaat timun?",
        jawab: "Timun kaya akan air dan vitamin, baik untuk hidrasi dan kulit.",
      },
      {
        tanya: "Bagaimana cara menyimpan timun?",
        jawab: "Simpan timun di kulkas agar tetap segar.",
      },
      {
        tanya: "Apakah timun cocok untuk diet?",
        jawab: "Ya, timun rendah kalori dan cocok untuk diet.",
      },
      {
        tanya: "Bagaimana cara mengolah timun?",
        jawab: "Timun bisa dimakan mentah, dijadikan salad atau acar.",
      },
    ],
    namaKomen: ["Dewi Lestari", "Andi Prasetyo", "Lina Kartika"],
    isiKomen: [
      "Segar dan renyah.",
      "Warna hijau cerah.",
      "Cocok untuk salad atau jus.",
    ],
  },
  {
    id: 6,
    nama: "Paprika",
    deskripsi:
      "Warna cerah dengan rasa manis segar, kaya vitamin C, cocok untuk salad, tumis, maupun panggangan.",
    harga: 30000,
    diskon: 60000,
    gambar:
      "https://png.pngtree.com/png-clipart/20210530/original/pngtree-sweet-pepper-red-food-png-image_6343595.jpg",
    gambarBawah: [
      "https://mudeverse.mudev.id/wp-content/uploads/2025/01/say-025M_750x.webp",
      "https://www.masakapahariini.com/wp-content/uploads/2018/08/paprika-merah-1-1024x683.jpg",
      "https://memorymorsels.org/wp-content/uploads/2022/07/Untitled-design-2-1.jpg",
      "https://image.astronauts.cloud/product-images/2024/5/1Cover65_af2da715-c27f-4ad8-849f-1a871c250cce_900x900.png",
    ],
    jenis: "Sayuran",
    berat: "500g",
    manfaat: "Kaya vitamin C dan antioksidan.",
    qna: [
      {
        tanya: "Apa manfaat paprika?",
        jawab: "Paprika kaya vitamin C dan antioksidan.",
      },
      {
        tanya: "Bagaimana memasak paprika?",
        jawab: "Dikukus, ditumis, atau dijadikan salad.",
      },
      { tanya: "Cocok untuk diet?", jawab: "Ya, rendah kalori dan sehat." },
      {
        tanya: "Bagaimana menyimpan paprika?",
        jawab: "Simpan di kulkas agar tetap segar.",
      },
    ],
    namaKomen: ["Dewi Lestari", "Andi Prasetyo", "Lina Kartika"],
    isiKomen: ["Segar dan manis.", "Warna cerah.", "Cocok untuk tumisan."],
  },
  {
    id: 7,
    nama: "Kembang kol",
    deskripsi:
      "Berbentuk padat putih bersih, lembut setelah dimasak, sumber serat dan vitamin.",
    harga: 26000,
    diskon: 52000,
    gambar:
      "https://static.vecteezy.com/system/resources/thumbnails/029/720/262/small_2x/cauliflower-transparent-background-png.png",
    gambarBawah: [
      "https://sayurbox-blog-stage.s3.amazonaws.com/uploads/2020/03/cauliflower-318152_1920.jpg",
      "https://pasarsegar.co.id/wp-content/uploads/2022/02/image_picker6889073895692397703-1.jpg",
      "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/31/2024/12/18/kembang-kol-90787639.jpg",
      "https://cdn0-production-images-kly.akamaized.net/cKWIuUBJhDrEwHFYcSrkLGTTuwI=/500x281/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3116564/original/087974600_1588242360-kembang-kol-1219731.jpg",
    ],
    jenis: "Sayuran",
    berat: "500g",
    manfaat: "Kaya vitamin C dan serat.",
    qna: [
      { tanya: "Manfaat kembang kol?", jawab: "Kaya vitamin C dan serat." },
      {
        tanya: "Bagaimana memasak?",
        jawab: "Dikukus, direbus, atau panggang.",
      },
      { tanya: "Cocok untuk diet?", jawab: "Ya, rendah kalori dan sehat." },
      {
        tanya: "cara menyimpan?",
        jawab: "Simpan di kulkas agar tetap segar.",
      },
    ],
    namaKomen: ["Dewi Lestari", "Andi Prasetyo", "Lina Kartika"],
    isiKomen: [
      "Segar dan renyah.",
      "Cocok untuk sup dan tumisan.",
      "Warna putih bersih.",
    ],
  },
  {
    id: 8,
    nama: "Tomat",
    deskripsi:
      "Isi merah segar dengan rasa manis-asam, kaya likopen, enak dimakan langsung atau untuk masakan.",
    harga: 19000,
    diskon: 38000,
    gambar:
      "https://thumbs.dreamstime.com/b/tomatoes-half-tomato-isolated-white-png-file-transparent-background-tomatoes-half-tomato-isolated-white-136961939.jpg",
    gambarBawah: [
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-174657223/hasilsumberalam_hasilsumberalam_buah_sayur_segar_tomat_merah_red_tomato_500_gram_full03_b9djxa9a.jpg",
      "https://res.cloudinary.com/dk0z4ums3/image/upload/v1629681328/attached_image/9-manfaat-tomat-buah-yang-disangka-sayur.jpg",
      "https://png.pngtree.com/png-clipart/20250309/original/pngtree-fresh-red-tomatoes-with-green-stems-png-image_20617034.png",
      "https://images.unsplash.com/photo-1741517287380-cf3a9ef75be1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    jenis: "Sayuran",
    berat: "500g",
    manfaat: "Kaya vitamin C dan lycopene.",
    qna: [
      { tanya: "Manfaat tomat?", jawab: "Kaya vitamin C dan lycopene." },
      {
        tanya: "Bagaimana memasak tomat?",
        jawab: "Bisa dimakan mentah, sup, atau saus.",
      },
      {
        tanya: "Cocok untuk diet?",
        jawab: "Ya, rendah kalori dan menyehatkan.",
      },
      {
        tanya: "Bagaimana menyimpan tomat?",
        jawab: "Simpan di suhu ruang untuk rasa maksimal.",
      },
    ],
    namaKomen: ["Dewi Lestari", "Andi Prasetyo", "Lina Kartika"],
    isiKomen: [
      "Segar dan manis.",
      "Cocok untuk salad dan saus.",
      "Warna merah cerah.",
    ],
  },
  {
    id: 9,
    nama: "Terong",
    deskripsi:
      "Berwarna ungu mengkilap, teksturnya lembut setelah dimasak, pas untuk digoreng, dibakar, atau ditumis.",
    harga: 21000,
    diskon: 42000,
    gambar:
      "https://www.pngplay.com/wp-content/uploads/10/Brinjal-Download-Free-PNG.png",
    gambarBawah: [
      "https://img.lovepik.com/photo/20211119/medium/lovepik-fresh-purple-eggplant-picture_500177124.jpg",
      "https://png.pngtree.com/thumb_back/fh260/background/20230201/pngtree-fresh-eggplant-vegetable-with-stem-aubergine-ravaya-brinjal-background-healthy-photo-image_49576268.jpg",
      "https://cdn1-production-images-kly.akamaized.net/hd4fApNBCtbuUSB-JPwKS1Ka5Vc=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2846708/original/003711300_1562485637-iStock-512525678.jpg",
      "https://cdn1-production-images-kly.akamaized.net/iDc7oCJPoci2YMyEVURkJQkhAew=/95x0:1464x1369/1200x1200/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3062835/original/099217800_1582859537-shutterstock_663081289.jpg",
    ],
    jenis: "Sayuran",
    berat: "500g",
    manfaat: "Kaya serat dan antioksidan.",
    qna: [
      { tanya: "Manfaat terong?", jawab: "Kaya serat dan antioksidan." },
      {
        tanya: "Bagaimana memasak terong?",
        jawab: "Dibakar, ditumis, atau sup.",
      },
      { tanya: "Cocok untuk diet?", jawab: "Ya, rendah kalori." },
      { tanya: "Cara menyimpan?", jawab: "Simpan di kulkas atau suhu ruang." },
    ],
    namaKomen: ["Dewi Lestari", "Andi Prasetyo", "Lina Kartika"],
    isiKomen: [
      "Segar dan lembut.",
      "Cocok untuk tumisan.",
      "Warna ungu cerah.",
    ],
  },
  {
    id: 10,
    nama: "Selada",
    deskripsi:
      "Daunnya hijau segar dan lembut, kaya serat, cocok untuk salad, lalapan, atau isi sandwich.",
    harga: 16000,
    diskon: 32000,
    gambar:
      "https://static.vecteezy.com/system/resources/previews/022/149/260/non_2x/green-lettuce-isolated-png.png",
    gambarBawah: [
      "https://img2.beritasatu.com/cache/beritasatu/480x310-3/1381733240.jpg",
      "https://asset.kompas.com/crops/MgSndutHjHYAmTVXhGzXTuj11Zk=/22x18:990x663/1200x800/data/photo/2023/02/24/63f7ad16bc1c6.jpg",
      "https://akcdn.detik.net.id/visual/2019/10/25/018d8f99-30bb-4e74-806d-afe085ebbe80_43.jpeg?w=720&q=90",
      "https://img.lovepik.com/photo/60248/4203.jpg_wh860.jpg",
    ],
    jenis: "Sayuran",
    berat: "500g",
    manfaat: "Kaya serat dan vitamin.",
    qna: [
      {
        tanya: "Manfaat selada?",
        jawab: "Kaya serat dan vitamin, baik untuk pencernaan.",
      },
      {
        tanya: "Bagaimana menyimpan selada?",
        jawab: "Simpan di kulkas agar tetap segar.",
      },
      { tanya: "Cocok untuk diet?", jawaban: "Ya, rendah kalori dan sehat." },
      {
        tanya: "Bagaimana mengolah selada?",
        jawab: "Dimakan mentah atau salad.",
      },
    ],
    namaKomen: ["Dewi Lestari", "Andi Prasetyo", "Lina Kartika"],
    isiKomen: ["Segar dan hijau.", "Cocok untuk salad.", "Rasa renyah."],
  },
  {
    id: 11,
    nama: "Bawang merah",
    deskripsi:
      "Aromanya khas, memberi rasa gurih-manis pada masakan, bisa ditumis atau jadi bawang goreng.",
    harga: 17000,
    diskon: 34000,
    gambar:
      "https://www.pngmart.com/files/1/Red-Onion-PNG-Transparent-Image.png",
    gambarBawah: [
      "https://img.lovepik.com/photo/60248/4203.jpg_wh860.jpg",
      "https://cdn.rri.co.id/berita/Lhokseumawe/o/1752161395951-Bawang_Merah/g86bf8lfmbstx06.jpeg",
      "https://pasarsegar.co.id/wp-content/uploads/2021/02/bawang-merah.jpeg",
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/11/7/24289076-6210-45bf-9b08-c692d0d6b73f.jpg",
    ],
    jenis: "Sayuran",
    berat: "500g",
    manfaat: "Meningkatkan imun dan rasa masakan.",
    qna: [
      {
        tanya: "Manfaat bawang merah?",
        jawab: "Meningkatkan imun dan memberikan rasa pada masakan.",
      },
      {
        tanya: "Bagaimana menyimpan bawang merah?",
        jawab: "Simpan di tempat kering dan sejuk.",
      },
      {
        tanya: "Cocok untuk diet?",
        jawab: "Ya, rendah kalori dan menyehatkan.",
      },
      {
        tanya: "Bagaimana mengolah?",
        jawab: "Ditumis, sup, atau bumbu masak.",
      },
    ],
    namaKomen: ["Dewi Lestari", "Andi Prasetyo", "Lina Kartika"],
    isiKomen: [
      "Segar dan aromatik.",
      "Warna merah cerah.",
      "Cocok untuk bumbu masakan.",
    ],
  },
  {
    id: 12,
    nama: "Bawang putih",
    deskripsi:
      "Beraroma tajam, kaya manfaat kesehatan, digunakan sebagai bumbu dasar hampir semua masakan.",
    harga: 17000,
    diskon: 34000,
    gambar: "https://pngimg.com/d/garlic_PNG12765.png",
    gambarBawah: [
      "https://doktersehat.com/wp-content/uploads/2017/07/manfaat-makan-bawang-putih-mentah-doktersehat.jpg",
      "https://res.cloudinary.com/dk0z4ums3/image/upload/v1677132536/attached_image/6-manfaat-makan-bawang-putih-mentah-yang-jarang-diketahui.jpg",
      "https://sanufoods.com/images/fresh/garlic.jpg",
      "https://png.pngtree.com/png-clipart/20250501/original/pngtree-natural-fresh-garlic-png-image_20913192.png",
    ],
    jenis: "Sayuran",
    berat: "500g",
    manfaat: "Meningkatkan imun dan menambah aroma masakan.",
    qna: [
      {
        tanya: "Manfaat bawang putih?",
        jawab: "Meningkatkan imun dan aroma masakan.",
      },
      {
        tanya: "Bagaimana menyimpan?",
        jawab: "Simpan di tempat kering dan sejuk.",
      },
      {
        tanya: "Cocok untuk diet?",
        jawab: "Ya, rendah kalori dan menyehatkan.",
      },
      {
        tanya: "Bagaimana mengolah?",
        jawab: "Ditumis, sup, atau bumbu masak.",
      },
    ],
    namaKomen: ["Dewi Lestari", "Andi Prasetyo", "Lina Kartika"],
    isiKomen: [
      "Segar dan wangi.",
      "Cocok untuk bumbu masak.",
      "Memberi rasa khas.",
    ],
  },
  {
    id: 13,
    nama: "Kentang",
    deskripsi:
      "Umbi berisi lembut dengan rasa gurih, bisa diolah jadi gorengan, rebusan, atau mashed potato.",
    harga: 18000,
    diskon: 36000,
    gambar: "https://www.freeiconspng.com/uploads/potato-png-0.png",
    gambarBawah: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kq4H9YV43mSrxgVGov18RgyWlgqFOp8Ftg&s",
      "https://arengaindonesia.com/wp-content/uploads/2021/10/Mengenal-kentang-lebih-dekat.jpg",
      "https://img-cdn.medkomtek.com/LXKDVRM2jItuSkti8vvnMc3Q_dU=/0x0/smart/filters:quality(100):format(webp)/article/Pm7YvaUzlJ_Szcx8DE8ia/original/079980300_1547360960-Makan-Kentang-Mentah-ini-Bahayanya-By-success863-Shutterstock.jpg",
      "https://res.cloudinary.com/dk0z4ums3/image/upload/v1702638498/attached_image/7-manfaat-kentang-dan-cara-tepat-mengolahnya.jpg",
    ],
    jenis: "Sayuran",
    berat: "500g",
    manfaat: "Sumber energi dan serat.",
    qna: [
      {
        tanya: "Manfaat kentang?",
        jawab: "Sumber energi, kaya karbohidrat dan serat.",
      },
      {
        tanya: "Bagaimana menyimpan?",
        jawab: "Simpan di tempat kering dan sejuk.",
      },
      {
        tanya: "Cocok untuk diet?",
        jawab: "Ya, dikonsumsi dengan cara sehat.",
      },
      {
        tanya: "Bagaimana mengolah?",
        jawab: "Direbus, digoreng, atau panggang.",
      },
    ],
    namaKomen: ["Dewi Lestari", "Andi Prasetyo", "Lina Kartika"],
    isiKomen: [
      "Segar dan sehat.",
      "Cocok untuk berbagai masakan.",
      "Warna coklat bersih.",
    ],
  },
  {
    id: 14,
    nama: "Buncis",
    deskripsi:
      "Polong hijau segar dengan rasa gurih, kaya serat, cocok untuk tumisan atau sup.",
    harga: 14000,
    diskon: 28000,
    gambar: "https://www.pngarts.com/files/5/Green-Beans-PNG-Free-Download.png",
    gambarBawah: [
      "https://cdn.grid.id/crop/0x0:0x0/360x240/photo/2024/01/11/buncis-1-1jpg-20240111094850.jpg",
      "https://asset.kompas.com/crops/jaQapRXumBFbqbaSz_S2kU_-jJQ=/0x0:1920x1280/1200x800/data/photo/2020/04/11/5e911d3ed9018.jpg",
      "https://asset.kompas.com/crops/Kls4eAATWnnczmiASILmV-9aeJI=/128x137:1152x819/1200x800/data/photo/2021/01/31/60163ea77cf91.jpg",
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/104/MTA-111439688/no-brand_no-brand_full01.jpg",
    ],
    jenis: "Sayuran",
    berat: "500g",
    manfaat: "Kaya protein nabati dan serat.",
    qna: [
      {
        tanya: "Manfaat kacang hijau?",
        jawab: "Kaya protein nabati, serat, dan vitamin.",
      },
      {
        tanya: "Bagaimana menyimpan?",
        jawab: "Simpan di tempat kering dan sejuk.",
      },
      { tanya: "Cocok untuk diet?", jawab: "Ya, rendah kalori dan sehat." },
      {
        tanya: "Bagaimana mengolah?",
        jawab: "Direbus, dibuat bubur atau salad.",
      },
    ],
    namaKomen: ["Dewi Lestari", "Andi Prasetyo", "Lina Kartika"],
    isiKomen: [
      "Segar dan hijau.",
      "Cocok untuk bubur atau salad.",
      "Rasa manis alami.",
    ],
  },
  {
    id: 15,
    nama: "Ubi jalar ungu",
    deskripsi:
      "Isinya ungu manis alami, kaya antioksidan, enak direbus, dikukus, atau dijadikan camilan.",
    harga: 16000,
    diskon: 32000,
    gambar:
      "https://static.vecteezy.com/system/resources/previews/029/711/105/non_2x/sweet-potato-transparent-background-png.png",
    gambarBawah: [
      "https://thumb.viva.id/vivabanyuwangi/1265x711/2025/02/21/67b78ccc3e32c-ubi-ungu-bikin-sehat_banyuwangi.jpg",
      "https://advancedfoodintolerancelabs.com/cdn/shop/articles/Japanese_Sweet_Potato_Nutrition_The_Purple_Superfood.jpg?v=1750253155&width=480",
      "https://asset.kompas.com/crops/9dpkzmTujrruRQHoAW1oIPQzZ0Q=/0x0:1000x667/1200x800/data/photo/2023/07/06/64a6690a8b7d2.jpg",
      "https://cdn.rri.co.id/berita/Banda_Aceh/o/1718237896673-foto_ubi_ungu/lwj1qqqtk8t99kv.avif",
    ],
    jenis: "Sayuran",
    berat: "500g",
    manfaat: "Sumber karbohidrat sehat dan serat.",
    qna: [
      {
        tanya: "Manfaat ubi jalar?",
        jawab: "Sumber karbohidrat sehat dan kaya serat.",
      },
      {
        tanya: "Bagaimana menyimpan?",
        jawab: "Simpan di tempat kering dan sejuk.",
      },
      { tanya: "Cocok untuk diet?", jawab: "Ya, baik untuk diet seimbang." },
      {
        tanya: "Bagaimana mengolah?",
        jawab: "Dikukus, dipanggang, atau direbus.",
      },
    ],
    namaKomen: ["Dewi Lestari", "Andi Prasetyo", "Lina Kartika"],
    isiKomen: [
      "Segar dan manis.",
      "Cocok untuk rebusan atau panggang.",
      "Warna oranye cerah.",
    ],
  },
];

function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

if (!localStorage.getItem("dataFarm")) {
  localStorage.setItem("dataFarm", JSON.stringify(dataArray));
}

const container = document.getElementById("products-scroll");

const produk = JSON.parse(localStorage.getItem("dataFarm")) || [];

produk.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `<img src="${product.gambar}" alt="${
    product.nama
  }" /> <div class="product-info">
    <h3>${product.nama}</h3>
    <p data-price="${product.harga}">${formatRupiah(product.harga)}</p>
   </div>
   <button class="buy-button">Beli Sekarang</button>`;
  container.appendChild(card);
});

const detailProduk = [];

document.querySelectorAll(".buy-button").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".product-card");

    const data = {
      id: produk[index].id,
      nama: card.querySelector("h3").textContent,
      deskripsi: produk[index].deskripsi,
      harga: card.querySelector("p").dataset.price,
      gambar: card.querySelector("img").src,
      gambarBawah: produk[index].gambarBawah,
      diskon: produk[index].diskon,
      jenis: produk[index].jenis,
      manfaat: produk[index].manfaat,
      namaKomen: produk[index].namaKomen,
      isiKomen: produk[index].isiKomen,
      tanya: produk[index].qna.map((item) => item.tanya),
      jawab: produk[index].qna.map((item) => item.jawab),
    };

    detailProduk.push(data);

    localStorage.setItem("detailProduk", JSON.stringify(detailProduk));

    window.location.href =
      "/skarden_main/app/UI/productHtml/protoproductpurchase.html?id=" +
      data.id;
  });
});
