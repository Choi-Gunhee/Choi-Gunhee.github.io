// script.js

// 제출 버튼에 클릭 이벤트 리스너 추가
document.getElementById('submit-btn').addEventListener('click', function() {
    const language = document.getElementById('language-selector').value;
    fetchMenu(language);
});

/**
 * 선택된 언어에 맞는 메뉴 데이터를 가져오는 함수
 * @param {string} language - 선택된 언어 코드
 */
function fetchMenu(language) {
    // 실제 API 호출 대신 가상 데이터 사용
    const menuData = {
        ko: [
            {
                section: "골뱅이",
                items: [
                    {
                        image: "images/ko_golbange_tang.jpg",
                        text: "생 골뱅이탕 - (중) 29,000원 / (대) 39,000원",
                        description: "신선한 골뱅이를 활용한 얼큰한 탕 요리입니다."
                    },
                    {
                        image: "images/ko_baek_golbaengi_tang.png",
                        text: "백 골뱅이탕 - (중) 32,000원 / (대) 43,000원",
                        description: "백골뱅이와 시원한 국물로 준비한 특별한 메뉴입니다."
                    },
                    {
                        image: "images/ko_a_sang_golbaengi_muchim.png",
                        text: "A. 생골뱅이무침 (사리) 26,000원",
                        description: "신선한 골뱅이와 매콤한 양념의 조화!"
                    },
                    {
                        image: "images/ko_a_plus_set.png",
                        text: "A+ 생골뱅이무침 세트 (생골뱅이무침+계란찜+오뎅탕) 29,000원",
                        description: "골뱅이무침과 함께하는 푸짐한 세트입니다."
                    },
                    {
                        image: "images/ko_b_sang_golbaengi_mulhoe.png",
                        text: "B. 생골뱅이 물회 (사리) 29,000원",
                        description: "시원하고 깔끔한 해물 물회!"
                    },
                    {
                        image: "images/ko_c_buljju_ggumi_bokkeum.png",
                        text: "C. 불쭈꾸미 볶음 (사리) 27,000원",
                        description: "매콤한 양념에 볶은 불쭈꾸미!"
                    },
                    {
                        image: "images/ko_d_sukhoe.png",
                        text: "D. 생골뱅이 숙회 29,000원",
                        description: "신선한 골뱅이를 익힌 후 간단하게 쌈 싸먹는 메뉴입니다."
                    }
                ]
            },
            {
                section: "직화닭발/마른안주",
                items: [
                    
                    {
                        image: "images/ko_mubbaedakbal.png",
                        text: "무뼈닭발 - 18,000원",
                        description: "뼈 없는 닭발로 매콤하게 맛을 낸 인기 메뉴입니다."
                    },
                    {
                        image: "images/ko_gukmul_dakbal.png",
                        text: "국물닭발 (통뼈/무뼈) - 18,000원",
                        description: "통뼈 또는 무뼈 닭발을 사용하여 진한 국물과 함께 제공됩니다."
                    },
                    {
                        image: "images/ko_rolling_dakbal.png",
                        text: "롤링닭발 - 18,000원",
                        description: "신선한 닭발을 부드럽게 롤링하여 매콤하게 조리한 메뉴입니다."
                    },
                    {
                        image: "images/ko_tongkkaedeokbal.png",
                        text: "통뼈닭발 - 18,000원",
                        description: "통뼈 닭발로 푸짐하게 즐길 수 있는 메뉴입니다."
                    },
                    {
                        image: "images/ko_bulmakchang.png",
                        text: "불막창 - 18,000원",
                        description: "매콤하게 볶아낸 불막창으로 담백한 맛을 즐겨보세요."
                    },
                    {
                        image: "images/ko_odolppye.png",
                        text: "오돌뼈 - 17,000원",
                        description: "오돌뼈의 쫄깃한 식감과 매콤한 양념의 조화가 일품입니다."
                    },
                    {
                        image: "images/ko_jeyukbokkeum.png",
                        text: "제육볶음 - 17,000원",
                        description: "매콤하게 볶아낸 제육볶음으로 밥과 함께 드세요."
                    },
                    {
                        image: "images/ko_dwaeji_kkeopdyeogi.png",
                        text: "돼지껍데기 - 17,000원",
                        description: "바삭하게 구워낸 돼지껍데기로 술안주로 인기입니다."
                    },
                    {
                        image: "images/ko_bangeujjogo.png",
                        text: "반건조오징어 - 18,000원",
                        description: "부드러운 반건조오징어로 독특한 맛을 경험해보세요."
                    },
                    {
                        image: "images/ko_nogari.png",
                        text: "노가리 - 17,000원",
                        description: "바삭한 노가리로 간편하게 즐기는 안주입니다."
                    },
                    {
                        image: "images/ko_agwipo.png",
                        text: "아귀포 - 17,000원",
                        description: "매콤하고 짭조름한 아귀포로 입맛을 돋워보세요."
                    },
                    {
                        image: "images/ko_meoktae.png",
                        text: "먹태 - 16,000원",
                        description: "부드럽고 쫄깃한 먹태로 고소한 맛을 느껴보세요."
                    },
                    {
                        image: "images/ko_jwipo.png",
                        text: "쥐포 - 16,000원",
                        description: "짭조름한 맛의 쥐포로 술안주로 제격입니다."
                    }
                ]
            },
            {
                section: "추가 메뉴",
                items: [
                    { 
                        image: "images/ko_chuga_golbaengi_tang.png", 
                        text: "추가골뱅이탕 - 22,000원",
                        description: "매콤하고 구수한 골뱅이탕으로, 깊은 맛이 특징입니다."
                    },
                    { 
                        image: "images/ko_kimchi_kal_guksu.png", 
                        text: "김치칼국수사리 - 4,000원",
                        description: "신선한 김치와 함께하는 칼국수로, 매콤한 국물이 일품입니다."
                    },
                    { 
                        image: "images/ko_udong.png", 
                        text: "우동사리 - 4,000원",
                        description: "부드러운 면발의 우동으로, 진한 육수와 잘 어울립니다."
                    },
                    { 
                        image: "images/ko_somyeon.png", 
                        text: "소면사리 - 3,000원",
                        description: "가늘고 부드러운 소면으로, 국물 요리에 잘 어울립니다."
                    },
                    { 
                        image: "images/ko_odongkkochi.png", 
                        text: "오뎅꼬치 (4개) - 5,000원",
                        description: "쫄깃한 오뎅이 꼬치에 꽂혀, 간편하게 즐길 수 있습니다."
                    },
                    { 
                        image: "images/ko_miniodong_tang.png", 
                        text: "미니오뎅탕 - 5,000원",
                        description: "작고 아기자기한 오뎅탕으로, 따뜻하고 담백합니다."
                    },
                    { 
                        image: "images/ko_jumeokbap.png", 
                        text: "주먹밥 - 5,000원",
                        description: "간편하게 먹기 좋은 주먹밥으로, 다양한 맛이 있습니다."
                    },
                    { 
                        image: "images/ko_gyejeanjjim.png", 
                        text: "계란찜 - 5,000원",
                        description: "부드럽고 촉촉한 계란찜으로, 밥과 함께 즐기기 좋습니다."
                    },
                    { 
                        image: "images/ko_janchiguksu.png", 
                        text: "잔치국수 (냉/온) - 6,000원",
                        description: "잔치에 빠질 수 없는 국수로, 시원하거나 따뜻하게 즐길 수 있습니다."
                    },
                    { 
                        image: "images/ko_bibimguksu.png", 
                        text: "비빔국수 - 6,000원",
                        description: "매콤한 양념과 함께 비벼 먹는 국수로, 여름에 특히 인기가 많습니다."
                    },
                    { 
                        image: "images/ko_udong_naong_on.png", 
                        text: "우동 (냉/온) - 6,000원",
                        description: "쫄깃한 우동 면발과 함께 즐기는 국물 요리입니다."
                    }
                ]
            },
            {
                section: "주류",
                items: [
                    { 
                        image: "images/soju.png", 
                        text: "소주 (참이슬, 진로, 새로, 처음처럼) - 5,000원",
                        description: "한국의 전통 술로, 다양한 안주와 잘 어울립니다."
                    },
                    { 
                        image: "images/beer.png", 
                        text: "맥주 (테라, 켈리, 카스) - 5,000원",
                        description: "시원하고 청량감 넘치는 맥주로, 모든 음식과 잘 어울립니다."
                    },
                    { 
                        image: "images/saengmaekju_500cc.png", 
                        text: "생맥주 500cc - 4,500원",
                        description: "신선한 생맥주로, 부드러운 거품이 특징입니다."
                    },
                    { 
                        image: "images/saengmaekju_3000cc.png", 
                        text: "생맥주 3000cc - 25,000원",
                        description: "대용량 생맥주로, 여러 명이 함께 즐기기에 좋습니다."
                    },
                    { 
                        image: "images/makgeolli.png", 
                        text: "막걸리 (장수) - 5,000원",
                        description: "부드럽고 달콤한 맛이 특징인 전통 막걸리입니다."
                    },
                    { 
                        image: "images/cheongha.png", 
                        text: "청하 - 6,000원",
                        description: "상큼하고 청량한 맛이 일품인 청주입니다."
                    },
                    { 
                        image: "images/tonicwater.png", 
                        text: "토닉워터 - 2,000원",
                        description: "상쾌한 맛의 탄산 음료로, 칵테일과 잘 어울립니다."
                    },
                    { 
                        image: "images/drinks.png", 
                        text: "음료수 (사이다, 콜라, 환타) - 2,000원",
                        description: "다양한 맛의 탄산 음료로, 언제든지 즐길 수 있습니다."
                    }
                ]
            }
        ],
        en: [
            // 영어 메뉴 데이터 추가 예정
        ],
        ja: [
            // 일본어 메뉴 데이터 추가 예정
        ]
    };

    const menuItems = menuData[language];
    displayMenu(menuItems);
}

/**
 * 메뉴를 화면에 표시하는 함수
 * @param {Array} menuSections - 메뉴 섹션 배열
 */
function displayMenu(menuSections) {
    const menuDiv = document.getElementById('menu');
    const menuContentDiv = document.getElementById('menu-content');

    menuContentDiv.innerHTML = ''; // 이전 내용 초기화

    menuSections.forEach(section => {
        // 섹션 제목 추가
        if (section.section) {
            const sectionTitle = document.createElement('div');
            sectionTitle.className = 'menu-section';
            sectionTitle.textContent = section.section;
            menuContentDiv.appendChild(sectionTitle);
        }

        // 메뉴 아이템들 추가
        section.items.forEach(item => {
            const menuItemDiv = document.createElement('div');
            menuItemDiv.className = 'menu-item';

            // 이미지 요소 생성
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = "메뉴 이미지";
            img.className = 'menu-image';

            // 텍스트 컨테이너 생성
            const textContainer = document.createElement('div');
            textContainer.className = 'menu-text-container';

            // 텍스트 노드 생성
            const text = document.createElement('span');
            text.className = 'menu-text';
            text.textContent = item.text;

            // 설명 텍스트 추가
            const description = document.createElement('span');
            description.className = 'menu-description';
            description.textContent = item.description;

            // 텍스트와 설명을 텍스트 컨테이너에 추가
            textContainer.appendChild(text);
            textContainer.appendChild(description);

            // 메뉴 아이템에 이미지와 텍스트 컨테이너 추가
            menuItemDiv.appendChild(img);
            menuItemDiv.appendChild(textContainer);

            // 메뉴 콘텐츠에 메뉴 아이템 추가
            menuContentDiv.appendChild(menuItemDiv);
        });
    });

    menuDiv.classList.remove('hidden'); // 메뉴 표시
}

