/**
 * 목까시한우 - 상품/선물/매거진 데이터
 */
const MOKKASI_DATA = {
  products: [
    {
      id: 1,
      name: '1++ 한우 등심 (구이용)',
      desc: '부드러운 식감과 풍부한 마블링의 정수',
      price: 89000,
      originalPrice: 98000,
      weight: '300g',
      image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&w=800&q=80',
      badge: 'BEST',
      detail: '1++ 등급 한우의 정수, 등심 부위입니다. 풍부한 마블링과 부드러운 식감이 특징이며, 구이용으로 최적화된 두께로 제공됩니다. 직화구이, 팬구이 모두 완벽합니다.'
    },
    {
      id: 2,
      name: '1++ 한우 채끝 (스테이크용)',
      desc: '쫄깃한 식감이 일품인 스테이크 부위',
      price: 79000,
      originalPrice: 85000,
      weight: '300g',
      image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=800&q=80',
      badge: 'NEW',
      detail: '채끝은 등심과 안심 사이에 위치한 부위로, 적당한 지방과 쫄깃한 식감이 조화를 이룹니다. 스테이크로 조리 시 풍미가 극대화됩니다.'
    },
    {
      id: 3,
      name: '1++ 한우 안심 (스테이크용)',
      desc: '가장 부드러운 프리미엄 부위',
      price: 125000,
      originalPrice: null,
      weight: '300g',
      image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?auto=format&fit=crop&w=800&q=80',
      badge: null,
      detail: '한우에서 가장 부드러운 부위인 안심. 지방이 적고 고소한 맛이 특징입니다. 미디엄 레어로 구워 드시면 최고의 맛을 경험하실 수 있습니다.'
    },
    {
      id: 4,
      name: '1++ 한우 꽃갈비 (구이용)',
      desc: '풍미 가득한 갈비의 정석',
      price: 99000,
      originalPrice: 110000,
      weight: '600g',
      image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80',
      badge: '10%',
      detail: '갈비뼈를 제거한 꽃갈비는 구이용으로 인기 있는 부위입니다. 풍부한 육즙과 쫄깃한 식감, 깊은 풍미가 일품입니다.'
    }
  ],
  gifts: [
    {
      id: 1,
      name: '프리미엄 한우 세트',
      desc: '등심 + 채끝 + 안심 구성',
      price: 298000,
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=80',
      tag: '명절 추천',
      detail: '1++ 등심 300g, 채끝 300g, 안심 300g이 포함된 프리미엄 구성입니다. 명절 선물, 감사 인사에 최적화된 세트입니다.'
    },
    {
      id: 2,
      name: '스페셜 등심 세트',
      desc: '1++ 등심 600g x 2팩',
      price: 178000,
      image: 'https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&w=800&q=80',
      tag: '베스트',
      detail: '인기 부위 등심만 모은 스페셜 세트. 600g x 2팩으로 가족 모임, 소규모 모임에 적합합니다.'
    },
    {
      id: 3,
      name: 'VIP 종합 선물세트',
      desc: '전 부위 최상급 구성',
      price: 498000,
      image: 'https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?auto=format&fit=crop&w=800&q=80',
      tag: 'VIP',
      detail: '등심, 채끝, 안심, 꽃갈비 전 부위가 포함된 최고급 선물세트. VIP 고객, 중요한 분께 드리는 선물로 추천합니다.'
    }
  ],
  magazines: [
    {
      id: 1,
      title: '안심의 숨겨진 매력, 아시나요?',
      desc: '부드러울 뿐 아니라 쫄깃 쫀득한 식감까지',
      category: 'MEAT GUIDE',
      image: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=1200&q=80',
      content: '안심은 한우에서 가장 부드러운 부위로 알려져 있습니다. 하지만 단순히 부드럽기만 한 것이 아닙니다. 적절한 조리법을 적용하면 쫄깃하고 쫀득한 식감까지 즐기실 수 있습니다. 미디엄 레어(55~60도)로 구우시면 최상의 맛을 경험하실 수 있습니다.'
    },
    {
      id: 2,
      title: '셰프가 말하는 한우의 차이',
      desc: '다채로운 변화, 한우 요리의 세계',
      category: 'INTERVIEW',
      image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=1200&q=80',
      content: '프로 셰프들이 말하는 1++ 한우의 차이점. 부위별 특성, 최적의 조리 온도, 소스 페어링까지. 한우 요리의 세계를 셰프의 시선으로 들여다봅니다.'
    },
    {
      id: 3,
      title: '갈비 vs 채끝, 당신의 선택은?',
      desc: '찐 고기 러버가 좋아한다는 이 부위',
      category: 'MEAT GUIDE',
      image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&w=1200&q=80',
      content: '갈비와 채끝, 둘 다 인기 부위이지만 성격이 다릅니다. 갈비는 풍부한 육즙과 깊은 풍미, 채끝은 쫄깃한 식감과 균형 잡힌 맛이 특징입니다. 어떤 상황에 어떤 부위를 선택할지 가이드합니다.'
    },
    {
      id: 4,
      title: '등심의 모든 것 - 부위별 가이드',
      desc: '당신은 어떤 등심을 좋아하시나요?',
      category: 'MEAT GUIDE',
      image: 'https://images.unsplash.com/photo-1558030137-a56c1b004fa3?auto=format&fit=crop&w=1200&q=80',
      content: '등심은 크게 꽃등심, 살치살, 꼬리등심 등으로 나뉩니다. 부위별로 마블링, 식감, 맛이 미묘하게 다릅니다. 자신에게 맞는 등심을 찾는 가이드입니다.'
    }
  ]
};
