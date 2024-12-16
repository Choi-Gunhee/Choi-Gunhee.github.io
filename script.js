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
    const menuData = {
        ko: [
            {
                section: "골뱅이",
                items: [
                    {
                        image: "images/golbange_tang.jpg",
                        text: "생 골뱅이 모듬탕 - (중) 29,000원 / (대) 39,000원",
                        description: "통골뱅이와 백골뱅이가 들어간 얼큰한 탕 요리입니다."
                    },
                    {
                        image: "images/baek_golbaengi_tang.jpg",
                        text: "백 골뱅이탕 - (중) 32,000원 / (대) 43,000원",
                        description: "백골뱅이와 시원한 국물로 준비한 탕 요리입니다."
                    },
                    {
                        image: "images/a_sang_golbaengi_muchim.jpg",
                        text: "A. 생골뱅이무침 (사리) 26,000원",
                        description: "신선한 백골뱅이와 매콤한 양념의 조화!"
                    },
                    {
                        image: "images/a_plus_set.jpg",
                        text: "A+ 생골뱅이무침 세트 (생골뱅이무침+계란찜+오뎅탕) 29,000원",
                        description: "골뱅이무침과 계란찜, 오뎅탕이 함께 제공되는 푸짐한 세트입니다."
                    },
                    {
                        image: "images/b_sang_golbaengi_mulhoe.jpg",
                        text: "B. 생골뱅이 물회 (사리) 29,000원",
                        description: "시원하고 깔끔한 해물 물회!"
                    },
                    {
                        image: "images/c_buljju_ggumi_bokkeum.jpg",
                        text: "C. 불쭈꾸미 볶음 (사리) 27,000원",
                        description: "매콤한 양념에 볶은 불쭈꾸미!"
                    },
                    {
                        image: "images/d_sukhoe.jpg",
                        text: "D. 생골뱅이 숙회 29,000원",
                        description: "신선한 골뱅이를 익혀서 제공하는 메뉴입니다."
                    }
                ]
            },
            {
                section: "직화닭발/마른안주",
                items: [
                    
                    {
                        image: "images/mubbaedakbal.jpg",
                        text: "무뼈닭발 - 18,000원",
                        description: "직화로 매콤하게 맛을 낸 뼈 없는 닭발입니다."
                    },
                    {
                        image: "images/gukmul_dakbal.jpg",
                        text: "국물닭발 (통뼈/무뼈) - 18,000원",
                        description: "통뼈 또는 무뼈 닭발을 사용하여 진한 국물과 함께 제공됩니다."
                    },
                    {
                        image: "images/rolling_dakbal.jpg",
                        text: "튤립닭발 - 18,000원",
                        description: "무뼈닭발과 통뼈닭발의 매력을 함께 느낄 수 있습니다."
                    },
                    {
                        image: "images/ko_tongkkaedeokbal.png",
                        text: "통뼈닭발 - 18,000원",
                        description: "직화로 매콤하게 맛을 낸 뼈 있는 닭발입니다."
                    },
                    {
                        image: "images/bulmakchang.jpg",
                        text: "불막창 - 18,000원",
                        description: "매콤하게 볶아낸 불막창입니다."
                    },
                    {
                        image: "images/ko_odolppye.png",
                        text: "오돌뼈 - 17,000원",
                        description: "오돌뼈의 쫄깃한 식감과 매콤한 양념의 조화가 일품입니다."
                    },
                    {
                        image: "images/ko_jeyukbokkeum.png",
                        text: "제육볶음 - 17,000원",
                        description: "매콤하게 볶아낸 제육볶음은 술안주로 좋습니다."
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
                        description: "쥐포 보다 고급진 식감의 아귀포는 인기입니다."
                    },
                    {
                        image: "images/ko_meoktae.png",
                        text: "먹태 - 16,000원",
                        description: "바삭한 먹태로 고소한 맛을 느껴보세요."
                    },
                    {
                        image: "images/ko_jwipo.png",
                        text: "쥐포 - 16,000원",
                        description: "짭조름한 맛의 쥐포로 술안주로 제격입니다."
                    }
                ]
            },
            {
                section: "추가 메뉴(추가 메뉴만 주문은 안됩니다)",
                items: [
                    { 
                        image: "images/ko_chuga_golbaengi_tang.png", 
                        text: "추가골뱅이탕 - 22,000원",
                        description: "매콤하고 구수한 골뱅이탕으로, 깊은 맛이 특징입니다."
                    },
                    { 
                        image: "images/ko_kimchi_kal_guksu.png", 
                        text: "김치칼국수사리 - 4,000원",
                        description: "김치와 함께하는 칼국수로, 골뱅이탕에 추가하는 사리입니다."
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
                        description: "탕에 추가하는 오뎅꼬치로 간편하게 즐길 수 있습니다."
                    },
                    { 
                        image: "images/ko_miniodong_tang.png", 
                        text: "미니오뎅탕 - 5,000원",
                        description: "작고 아기자기한 오뎅탕으로, 따뜻하고 담백합니다."
                    },
                    { 
                        image: "images/jumeokbap.jpg", 
                        text: "주먹밥 - 5,000원",
                        description: "간편하게 먹기 좋은 주먹밥입니다."
                    },
                    { 
                        image: "images/ko_gyejeanjjim.png", 
                        text: "계란찜 - 5,000원",
                        description: "부드럽고 촉촉한 계란찜입니다."
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
                        description: "쫄깃한 우동 면발과 함께 즐기는 국물 요리입니다. 냉과 온을 선택할 수 있습니다."
                    }
                ]
            },
            {
                section: "주류",
                items: [
                    { 
                        image: "images/soju.png", 
                        text: "소주 (참이슬, 진로, 새로, 처음처럼) - 5,000원",
                        description: "한국의 대중적인 술로, 다양한 안주와 잘 어울립니다."
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
            {
                section: "Seafood",
                items: [
                    {
                        image: "images/golbange_tang.jpg",
                        text: "Live Sea Snail Soup - (Medium) 29,000 KRW / (Large) 39,000 KRW",
                        description: "A spicy soup made with live sea snails and white sea snails."
                    },
                    {
                        image: "images/baek_golbaengi_tang.jpg",
                        text: "White Sea Snail Soup - (Medium) 32,000 KRW / (Large) 43,000 KRW",
                        description: "A refreshing soup prepared with white sea snails."
                    },
                    {
                        image: "images/a_sang_golbaengi_muchim.jpg",
                        text: "A. Live Sea Snail Salad (Noodle) 26,000 KRW",
                        description: "A perfect harmony of fresh white sea snails and spicy seasoning!"
                    },
                    {
                        image: "images/a_plus_set.jpg",
                        text: "A+ Live Sea Snail Salad Set (Live Sea Snail Salad + Steamed Egg + Fish Cake Soup) 29,000 KRW",
                        description: "A hearty set featuring sea snail salad."
                    },
                    {
                        image: "images/b_sang_golbaengi_mulhoe.jpg",
                        text: "B. Live Sea Snail Cold Soup (Noodle) 29,000 KRW",
                        description: "A cool and refreshing seafood cold soup!"
                    },
                    {
                        image: "images/c_buljju_ggumi_bokkeum.jpg",
                        text: "C. Stir-fried Baby Octopus (Noodle) 27,000 KRW",
                        description: "Stir-fried baby octopus in a spicy sauce!"
                    },
                    {
                        image: "images/d_sukhoe.jpg",
                        text: "D. Live Sea Snail Sashimi 29,000 KRW",
                        description: "Freshly prepared live sea snails served raw."
                    }
                ]
            },
            {
                section: "Grilled Chicken Feet/Dried Snacks",
                items: [
                    {
                        image: "images/en_mubbaedakbal.png",
                        text: "Boneless Grilled Chicken Feet - 18,000 KRW",
                        description: "Spicy boneless chicken feet grilled over an open flame."
                    },
                    {
                        image: "images/en_gukmul_dakbal.png",
                        text: "Soup Chicken Feet (Bone-in/Boneless) - 18,000 KRW",
                        description: "Served with hearty broth using bone-in or boneless chicken feet."
                    },
                    {
                        image: "images/en_rolling_dakbal.png",
                        text: "Tulip Chicken Feet - 18,000 KRW",
                        description: "Experience the charm of both boneless and bone-in chicken feet."
                    },
                    {
                        image: "images/en_tongkkaedeokbal.png",
                        text: "Bone-in Grilled Chicken Feet - 18,000 KRW",
                        description: "Spicy grilled chicken feet with bones."
                    },
                    {
                        image: "images/en_bulmakchang.png",
                        text: "Spicy Grilled Pork Intestines - 18,000 KRW",
                        description: "Spicy grilled pork intestines."
                    },
                    {
                        image: "images/en_odolppye.png",
                        text: "Pork Skin - 17,000 KRW",
                        description: "A delightful combination of chewy pork skin and spicy seasoning."
                    },
                    {
                        image: "images/en_jeyukbokkeum.png",
                        text: "Stir-fried Pork - 17,000 KRW",
                        description: "Spicy stir-fried pork, perfect as a drinking snack."
                    },
                    {
                        image: "images/en_dwaeji_kkeopdyeogi.png",
                        text: "Grilled Pork Rind - 17,000 KRW",
                        description: "Crispy grilled pork rind, popular as a drinking snack."
                    },
                    {
                        image: "images/en_bangeujjogo.png",
                        text: "Semi-dried Squid - 18,000 KRW",
                        description: "Enjoy the unique taste of soft semi-dried squid."
                    },
                    {
                        image: "images/en_nogari.png",
                        text: "Dried Pollack - 17,000 KRW",
                        description: "Crispy dried pollack, perfect for a quick snack."
                    },
                    {
                        image: "images/en_agwipo.png",
                        text: "Skate Jerky - 17,000 KRW",
                        description: "A premium texture of skate jerky, highly popular."
                    },
                    {
                        image: "images/en_meoktae.png",
                        text: "Dried Pollack - 16,000 KRW",
                        description: "Crunchy dried pollack with a savory flavor."
                    },
                    {
                        image: "images/en_jwipo.png",
                        text: "Dried Fish - 16,000 KRW",
                        description: "A salty dried fish, perfect as a drinking snack."
                    }
                ]
            },
            {
                section: "Additional Menu (Additional menu items cannot be ordered alone)",
                items: [
                    {
                        image: "images/en_chuga_golbaengi_tang.png",
                        text: "Extra Sea Snail Soup - 22,000 KRW",
                        description: "Spicy and savory sea snail soup with a deep flavor."
                    },
                    {
                        image: "images/en_kimchi_kal_guksu.png",
                        text: "Kimchi Noodle (Noodle) - 4,000 KRW",
                        description: "Noodles served with kimchi, a perfect addition to the sea snail soup."
                    },
                    {
                        image: "images/en_udong.png",
                        text: "Udon Noodles - 4,000 KRW",
                        description: "Soft udon noodles that pair well with rich broth."
                    },
                    {
                        image: "images/en_somyeon.png",
                        text: "Thin Noodles - 3,000 KRW",
                        description: "Thin and soft noodles that complement soup dishes."
                    },
                    {
                        image: "images/en_odongkkochi.png",
                        text: "Fish Cake Skewers (4 pieces) - 5,000 KRW",
                        description: "Easy-to-enjoy fish cake skewers that can be added to the soup."
                    },
                    {
                        image: "images/en_miniodong_tang.png",
                        text: "Mini Fish Cake Soup - 5,000 KRW",
                        description: "A small and cute fish cake soup that is warm and light."
                    },
                    {
                        image: "images/en_jumeokbap.png",
                        text: "Rice Balls - 5,000 KRW",
                        description: "Convenient and delicious rice balls."
                    },
                    {
                        image: "images/en_gyejeanjjim.png",
                        text: "Steamed Egg - 5,000 KRW",
                        description: "Soft and moist steamed egg."
                    },
                    {
                        image: "images/en_janchiguksu.png",
                        text: "Celebration Noodles (Cold/Hot) - 6,000 KRW",
                        description: "Noodles that are essential for celebrations, served cold or hot."
                    },
                    {
                        image: "images/en_bibimguksu.png",
                        text: "Spicy Mixed Noodles - 6,000 KRW",
                        description: "Noodles mixed with spicy seasoning, especially popular in summer."
                    },
                    {
                        image: "images/en_udong_naong_on.png",
                        text: "Udon (Cold/Hot) - 6,000 KRW",
                        description: "Noodle soup with chewy udon noodles, available in cold or hot."
                    }
                ]
            },
            {
                section: "Alcoholic Beverages",
                items: [
                    {
                        image: "images/en_soju.png",
                        text: "Soju (Cham Isul, Jinro, Saero, Chuhamyeon) - 5,000 KRW",
                        description: "A popular Korean liquor that pairs well with various snacks."
                    },
                    {
                        image: "images/en_beer.png",
                        text: "Beer (Terra, Kelly, Cass) - 5,000 KRW",
                        description: "Refreshing and crisp beer that goes well with all foods."
                    },
                    {
                        image: "images/en_saengmaekju_500cc.png",
                        text: "Draft Beer 500cc - 4,500 KRW",
                        description: "Fresh draft beer with smooth foam."
                    },
                    {
                        image: "images/en_saengmaekju_3000cc.png",
                        text: "Draft Beer 3000cc - 25,000 KRW",
                        description: "Large draft beer, perfect for sharing with friends."
                    },
                    {
                        image: "images/en_makgeolli.png",
                        text: "Makgeolli (Jangsu) - 5,000 KRW",
                        description: "A traditional rice wine known for its smooth and sweet taste."
                    },
                    {
                        image: "images/en_cheongha.png",
                        text: "Cheongha - 6,000 KRW",
                        description: "A refreshing and crisp traditional Korean rice wine."
                    },
                    {
                        image: "images/en_tonicwater.png",
                        text: "Tonic Water - 2,000 KRW",
                        description: "A refreshing carbonated drink that pairs well with cocktails."
                    },
                    {
                        image: "images/en_drinks.png",
                        text: "Soft Drinks (Soda, Cola, Fanta) - 2,000 KRW",
                        description: "Various flavored carbonated drinks that can be enjoyed anytime."
                    }
                ]
            }
        ],
        ja: [
            {
                section: "ゴルベンイ",
                items: [
                    {
                        image: "images/golbange_tang.jpg",
                        text: "生ゴルベンイ盛り合わせスープ - (中) 29,000ウォン / (大) 39,000ウォン",
                        description: "通ゴルベンイと白ゴルベンイが入った辛いスープ料理です。"
                    },
                    {
                        image: "images/baek_golbaengi_tang.jpg",
                        text: "白ゴルベンイスープ - (中) 32,000ウォン / (大) 43,000ウォン",
                        description: "白ゴルベンイとさっぱりしたスープで準備した料理です。"
                    },
                    {
                        image: "images/a_sang_golbaengi_muchim.jpg",
                        text: "A. 生ゴルベンイ和え (サリ) 26,000ウォン",
                        description: "新鮮な白ゴルベンイと辛い調味料の調和！"
                    },
                    {
                        image: "images/a_plus_set.jpg",
                        text: "A+ 生ゴルベンイ和えセット (生ゴルベンイ和え+卵蒸し+オデンスープ) 29,000ウォン",
                        description: "ゴルベンイ和えと一緒に楽しむボリューム満点のセットです。"
                    },
                    {
                        image: "images/b_sang_golbaengi_mulhoe.jpg",
                        text: "B. 生ゴルベンイ冷麺 (サリ) 29,000ウォン",
                        description: "さっぱりしていて、清潔感のある海鮮冷麺！"
                    },
                    {
                        image: "images/c_buljju_ggumi_bokkeum.jpg",
                        text: "C. プルチュッミ炒め (サリ) 27,000ウォン",
                        description: "辛い調味料で炒めたプルチュッミ！"
                    },
                    {
                        image: "images/d_sukhoe.jpg",
                        text: "D. 生ゴルベンイ刺身 29,000ウォン",
                        description: "新鮮なゴルベンイを茹でて提供するメニューです。"
                    }
                ]
            },
            {
                section: "直火鶏足/乾燥おつまみ",
                items: [
                    {
                        image: "images/ja_mubbaedakbal.png",
                        text: "骨なし鶏足 - 18,000ウォン",
                        description: "直火で辛く味付けした骨のない鶏足です。"
                    },
                    {
                        image: "images/ja_gukmul_dakbal.png",
                        text: "スープ鶏足 (骨あり/骨なし) - 18,000ウォン",
                        description: "骨ありまたは骨なしの鶏足を使用し、濃厚なスープと共に提供されます。"
                    },
                    {
                        image: "images/ja_rolling_dakbal.png",
                        text: "チューリップ鶏足 - 18,000ウォン",
                        description: "骨なし鶏足と骨あり鶏足の魅力を一緒に感じることができます。"
                    },
                    {
                        image: "images/ja_tongkkaedeokbal.png",
                        text: "骨あり鶏足 - 18,000ウォン",
                        description: "直火で辛く味付けした骨のある鶏足です。"
                    },
                    {
                        image: "images/ja_bulmakchang.png",
                        text: "辛い豚の腸 - 18,000ウォン",
                        description: "辛く炒めた豚の腸です。"
                    },
                    {
                        image: "images/ja_odolppye.png",
                        text: "オドゥルピ - 17,000ウォン",
                        description: "オドゥルピのコリコリした食感と辛い調味料の調和が絶品です。"
                    },
                    {
                        image: "images/ja_jeyukbokkeum.png",
                        text: "豚肉炒め - 17,000ウォン",
                        description: "辛く炒めた豚肉炒めはお酒のおつまみに最適です。"
                    },
                    {
                        image: "images/ja_dwaeji_kkeopdyeogi.png",
                        text: "豚皮 - 17,000ウォン",
                        description: "パリッと焼き上げた豚皮はお酒のおつまみに人気です。"
                    },
                    {
                        image: "images/ja_bangeujjogo.png",
                        text: "半乾燥イカ - 18,000ウォン",
                        description: "柔らかい半乾燥イカで独特の味を体験してください。"
                    },
                    {
                        image: "images/ja_nogari.png",
                        text: "ノガリ - 17,000ウォン",
                        description: "パリッとしたノガリを手軽に楽しめるおつまみです。"
                    },
                    {
                        image: "images/ja_agwipo.png",
                        text: "アギポ - 17,000ウォン",
                        description: "スジコよりも高級な食感のアギポは人気です。"
                    },
                    {
                        image: "images/ja_meoktae.png",
                        text: "メクテ - 16,000ウォン",
                        description: "パリッとしたメクテで香ばしい味を感じてください。"
                    },
                    {
                        image: "images/ja_jwipo.png",
                        text: "イカの干物 - 16,000ウォン",
                        description: "塩味のイカの干物はお酒のおつまみに最適です。"
                    }
                ]
            },
            {
                section: "追加メニュー（追加メニューのみの注文はできません）",
                items: [
                    {
                        image: "images/ja_chuga_golbaengi_tang.png",
                        text: "追加ゴルベンイスープ - 22,000ウォン",
                        description: "辛くて深い味わいのゴルベンイスープです。"
                    },
                    {
                        image: "images/ja_kimchi_kal_guksu.png",
                        text: "キムチうどん（サリ） - 4,000ウォン",
                        description: "キムチと一緒に楽しむうどんで、ゴルベンイスープに追加するサリです。"
                    },
                    {
                        image: "images/ja_udong.png",
                        text: "うどん（サリ） - 4,000ウォン",
                        description: "柔らかい麺のうどんで、濃厚なスープとよく合います。"
                    },
                    {
                        image: "images/ja_somyeon.png",
                        text: "細麺（サリ） - 3,000ウォン",
                        description: "細くて柔らかい麺で、スープ料理にぴったりです。"
                    },
                    {
                        image: "images/ja_odongkkochi.png",
                        text: "おでん串（4本） - 5,000ウォン",
                        description: "スープに追加するおでん串で、手軽に楽しめます。"
                    },
                    {
                        image: "images/ja_miniodong_tang.png",
                        text: "ミニおでんスープ - 5,000ウォン",
                        description: "小さくてかわいいおでんスープで、温かくてあっさりしています。"
                    },
                    {
                        image: "images/ja_jumeokbap.png",
                        text: "おにぎり - 5,000ウォン",
                        description: "手軽に食べられるおにぎりです。"
                    },
                    {
                        image: "images/ja_gyejeanjjim.png",
                        text: "卵蒸し - 5,000ウォン",
                        description: "柔らかくてしっとりした卵蒸しです。"
                    },
                    {
                        image: "images/ja_janchiguksu.png",
                        text: "お祝いそば（冷/温） - 6,000ウォン",
                        description: "お祝いに欠かせないそばで、冷たくても温かくても楽しめます。"
                    },
                    {
                        image: "images/ja_bibimguksu.png",
                        text: "ビビンヌードル - 6,000ウォン",
                        description: "辛い調味料と一緒に混ぜて食べるヌードルで、特に夏に人気です。"
                    },
                    {
                        image: "images/ja_udong_naong_on.png",
                        text: "うどん（冷/温） - 6,000ウォン",
                        description: "もちもちのうどんと一緒に楽しむスープ料理です。冷たいものと温かいものから選べます。"
                    }
                ]
            },
            {
                section: "アルコール飲料",
                items: [
                    {
                        image: "images/ja_soju.png",
                        text: "焼酎（チャムイスル、ジンロ、セロ、初めてのように） - 5,000ウォン",
                        description: "韓国の人気のお酒で、さまざまなおつまみとよく合います。"
                    },
                    {
                        image: "images/ja_beer.png",
                        text: "ビール（テラ、ケリー、カス） - 5,000ウォン",
                        description: "さっぱりとしたビールで、すべての料理とよく合います。"
                    },
                    {
                        image: "images/ja_saengmaekju_500cc.png",
                        text: "生ビール500cc - 4,500ウォン",
                        description: "新鮮な生ビールで、滑らかな泡が特徴です。"
                    },
                    {
                        image: "images/ja_saengmaekju_3000cc.png",
                        text: "生ビール3000cc - 25,000ウォン",
                        description: "大容量の生ビールで、みんなで楽しむのに最適です。"
                    },
                    {
                        image: "images/ja_makgeolli.png",
                        text: "マッコリ（長壽） - 5,000ウォン",
                        description: "滑らかで甘い味が特徴の伝統的なマッコリです。"
                    },
                    {
                        image: "images/ja_cheongha.png",
                        text: "清河 - 6,000ウォン",
                        description: "さっぱりとしていて爽快な味わいの清酒です。"
                    },
                    {
                        image: "images/ja_tonicwater.png",
                        text: "トニックウォーター - 2,000ウォン",
                        description: "爽やかな味の炭酸飲料で、カクテルとよく合います。"
                    },
                    {
                        image: "images/ja_drinks.png",
                        text: "ソフトドリンク（サイダー、コーラ、ファンタ） - 2,000ウォン",
                        description: "さまざまな味の炭酸飲料で、いつでも楽しめます。"
                    }
                ]
            }
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

