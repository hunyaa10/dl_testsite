"use client"

import { useEffect, useState } from "react"
import SubBanner from "@/components/ui/sub-banner"
import { subBannerData } from "@/data/common/sub-banner-data"
import { productsData } from "@/data/products/products-data"
import { brandColors } from "@/styles/colors"

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function Items() {
  const [activeTab, setActiveTab] = useState('electronics');
  const [currentItems, setCurrentItems] = useState<Product[]>([]);

  const tabs = [
    { id: 'electronics', name: '전자제품' },
    { id: 'fashion', name: '패션' },
    { id: 'home', name: '가구/홈' }
  ];

  // 탭 상태가 변경될 때마다 렌더링할 상품 목록 업데이트
  useEffect(() => {
    switch (activeTab) {
      case 'electronics':
        setCurrentItems(productsData.electronics);
        break;
      case 'fashion':
        setCurrentItems(productsData.fashion);
        break;
      case 'home':
        setCurrentItems(productsData.home);
        break;
      default:
        setCurrentItems([]);
    }
  }, [activeTab]);

  const formatPrice = (price: number): string => {
    return price.toLocaleString('ko-KR') + '원';
  };

  return (
    <>
      <SubBanner {...subBannerData.items} />

      <section className="py-20 text-center">
        준비중
      </section>

      <div className="py-8 px-4 bg-white">
        {/* 탭메뉴 */}
        {/* <div className="flex justify-center mb-16 border-b border-gray-200">
          <div className="flex space-x-16">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-4 text-lg font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'text-black'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab.name}
                {activeTab === tab.id && (
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${brandColors.primary[600]}`}></div>
                )}
              </button>
            ))}
          </div>
        </div> */}
        <div className="max-w-7xl mx-auto mb-16">
          {/* 상품그리드 */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentItems.length > 0 ? (
              currentItems.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="bg-gray-200 aspect-square mb-4 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover opacity-0"
                      onLoad={(e) => {
                        e.currentTarget.style.opacity = '1';
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="text-base font-medium text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-base text-gray-600">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <h1>준비중입니다.</h1>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
}