"use client"

import React from 'react';
import '@/styles/globals.css'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BrandButton from "@/components/ui/brand-button"
import { itemsData } from "@/data/main/items-data"
import Link from "next/link"

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const FeaturedProductsSection: React.FC = () => {
  const products: Product[] = itemsData.items;

  React.useEffect(() => {
    // Swiper CSS 로드
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.min.css';
    document.head.appendChild(link);

    // Swiper JS 로드
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.min.js';
    script.onload = () => {
      // @ts-ignore
      const swiper = new window.Swiper('.product-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
        },
      });
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  const formatPrice = (price: number): string => {
    return price.toLocaleString('ko-KR') + '원';
  };

  return (
    <section className="py-16 bg-gray-50 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-48">
      <div>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            대표 상품
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            00 쇼핑몰의 인기 상품들을 만나보세요.
          </p>
        </div>

        {/* <div className='text-center text-gray-500'>상품섹션 준비중</div> */}

        {/* Swiper 슬라이드 */}
        <div className="relative">
          <div className="swiper product-swiper overflow-hidden">
            <div className="swiper-wrapper">
              {products.map((product) => (
                <div key={product.id} className="swiper-slide">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="font-semibold text-lg text-gray-700 mb-2">
                        {product.name}
                      </h3>
                      <div className="text-xl font-bold text-gray-900 text-right">
                        {formatPrice(product.price)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 화살표 버튼 */}
          <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-red-50 hover:text-red-600 transition-all duration-300 after:content-none">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-red-50 hover:text-red-600 transition-all duration-300 after:content-none">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* 인디케이터 */}
          <div className="mt-12 flex justify-center gap-2">
            <div className="swiper-pagination" />
          </div>
        </div>

        {/* 더보기 버튼 */}
        {/* <div className="text-center mt-4">
          <Link href="/items">
            <BrandButton size="lg" className="px-8 py-4">
              더 많은 상품 보러가기
            </BrandButton>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedProductsSection;