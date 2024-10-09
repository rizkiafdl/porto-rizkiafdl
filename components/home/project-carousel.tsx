"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Modal from "@/components/ui/modal"; // Import Modal

interface CardData {
    category: string;
    title: string;
    src: string;
    content: React.ReactNode; // Define content as a ReactNode
}

export function ProjectCarousel() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-20">
            <h2 className="max-w-7xl pl-4 mx-auto text-5xl md:text-5xl font-bold text-neutral-200 dark:text-neutral-200 font-sans">
                List Of My Project
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const data: CardData[] = [
    {
        category: "Website Development",
        title: "NETFLIX Clone MERN Stack",
        src: "/Project/Netflix.png",
        content: (
            <Modal
                title="NETFLIX Clone MERN Stack"
                description="Project ini merupakan implementasi full-stack yang memanfaatkan berbagai teknologi untuk membangun aplikasi web secara menyeluruh. React digunakan untuk membangun antarmuka pengguna yang interaktif, sementara Express.js berfungsi sebagai backend untuk menangani logika server, seperti fitur favorit film dan manajemen pengguna. Firebase diintegrasikan untuk autentikasi dan otorisasi, memastikan manajemen pengguna yang aman dan efisien. Data yang dihasilkan, seperti informasi film dan link video, diambil dari TMDB Movie API dan disimpan dalam MongoDB, yang dipilih karena fleksibilitasnya dalam menangani data tanpa skema yang kaku. Semua data pengguna, yang diidentifikasi melalui Firebase, juga disimpan di MongoDB, memungkinkan manajemen informasi yang efisien. Proyek ini memberikan pemahaman menyeluruh tentang pengembangan aplikasi web dari sisi front-end hingga back-end, termasuk keamanan dan praktik terbaik dalam pengelolaan data."
                imageSrc="/Project/Netflix.png"
            />
        ),
    },
    {
        category: "Website Development",
        title: "World Country Information Hub",
        src: "/Project/WorldCountry.png",
        content: (
            <Modal
                title="World Country Information Hub"
                description="Project ini merupakan sebuah aplikasi web yang menampilkan informasi dari REST API World Country dengan menggunakan React sebagai framework front-end. Aplikasi ini dirancang dengan tampilan yang menarik dan interaktif, di mana pengguna dapat dengan mudah menjelajahi dan mencari informasi tentang berbagai negara. Visualisasi globe yang interaktif dan fitur pencarian dengan filter dirancang untuk memberikan pengalaman yang intuitif dan mudah dipahami. Melalui project ini, user memperdalam pemahaman tentang penggunaan TypeScript, sekaligus meningkatkan keterampilan dalam merancang antarmuka yang user-friendly dan interaktif."
                imageSrc="/Project/WorldCountry.png"
            />
        ),
    },
    {
        category: "Data Science",
        title: "Diabetes Prediction Website Application",
        src: "/Project/DiabetesPredict.png",
        content: (
            <Modal
                title="Diabetes Prediction Website Application"
                description="Berdasarkan penelitian saya, diabetes merupakan salah satu penyakit yang paling banyak diderita di Indonesia. Penyebabnya sangat beragam, tetapi saya ingin fokus pada dua masalah utama, yaitu aksesibilitas dan biaya yang tinggi untuk pengecekan rutin. Hal ini menginspirasi saya untuk menciptakan solusi yang lebih terjangkau dan mudah diakses oleh masyarakat luas, yaitu sebuah aplikasi berbasis web yang dapat membantu masyarakat dalam melakukan diagnosa awal penyakit diabetes. Aplikasi ini memanfaatkan teknologi pengolahan data dan machine learning untuk menganalisis data yang diberikan oleh pengguna, seperti riwayat kesehatan, BMI, aktivitas fisik, dan faktor risiko lainnya.."
                imageSrc="/Project/DiabetesPredict.png"
            />
        ),
    },
    {
        category: "Data Science",
        title: "Indonesia Visitor Visualization",
        src: "/Project/DataScience_indo.png",
        content: (
            <Modal
                title="Indonesia Visitor Visualization"
                description="Project ini merupakan bagian dari tugas mata kuliah Data Mining & Visualisasi, di mana saya dan tim menggunakan data dari https://data.aseanstats.org/. Kami melakukan pre-processing pada data agar lebih mudah diinterpretasi, lalu memvisualisasikannya menggunakan bahasa pemrograman R di R Studio. Setelah itu, kami mengumpulkan berbagai insight yang diperoleh dari proses analisis dan menyajikannya dalam format poster untuk dipresentasikan. Melalui project ini, saya belajar pentingnya kolaborasi, mulai dari menentukan topik penelitian, mencari data yang relevan, mempersiapkan data sesuai kebutuhan, hingga memvisualisasikannya secara efektif."
                imageSrc="/Project/DataScience_indo.png"
            />
        ),
    },
    {
        category: "UI/UX",
        title: "Biodiverse",
        src: "/Project/Biodiverse.png",
        content: (
            <Modal
                title="Biodiverse"
                description="Sebagai UI/UX Designer dalam proyek ini, saya ditugaskan untuk merancang desain aplikasi yang akan menjadi salah satu media dan navigator bagi pengguna selama menjalani pameran ini. Pameran ini bertujuan untuk mengembangkan sifat entrepreuner pada peserta melalui berbagai media interaktif seperti tebak visual, tebak aroma, tebak suara dan penggunaan indra lainnya. Tantangan yang saya rasakan adalah memastikan bahwa pengalaman pengguna tetap intuitif dan menyenangkan, sehingga mereka dapat dengan mudah menavigasi berbagai kegiatan dan media yang disediakan. Untuk memahami kebutuhan pengguna, saya melakukan survei pengguna, studi kasus dan kolaborasi antar team, lalu saya menemukan kesimpulan yaitu design harus mudah di navigasi, merangsang, dan pemberian informasi yang jelas, oleh karena itu saya memilih warna yang kontras lalu text yang minim tetapi dengan hirarki design yang jelas dan gambar-gambar pendukung yang membantu merepresentasikan sebuah informasi  yang ingin disampaikan."
                imageSrc="/Project/Biodiverse.png"
            />
        ),
    },

];
