export const site={
  "name": "LG 정보이용료 확인노트",
  "description": "LG U+ 회선에서 콘텐츠 결제와 일반 휴대폰 결제를 구분하고 현재 설정을 확인하는 안내입니다.",
  "editor": "결제노트 편집",
  "updatedAt": "2026-10-30",
  "keyword": "LG정보이용료현금화",
  "slug": "lg-carrier-check",
  "tag": "회선과 스토어",
  "number": "01",
  "answer": "LG정보이용료현금화를 검색했다면 먼저 LG U+ 회선의 콘텐츠 결제 설정과 실제 구매처를 확인하세요. 회선에서 결제가 가능하다는 사실은 외부 상대의 지급 약속이나 환불 승인을 보장하지 않습니다.",
  "intro": "LG U+ 회선에서 콘텐츠 결제와 일반 휴대폰 결제를 구분하고 현재 설정을 확인하는 안내입니다.",
  "steps": [
    {
      "name": "일반 결제와 스토어 결제의 상태 구분",
      "description": "명세서와 공식 앱에서 어떤 항목을 확인하는지 적습니다. 공개된 과거 안내 화면을 현재 메뉴의 확정 경로로 사용하지 않습니다. 화면에 항목이 보이지 않으면 LG U+ 공식 지원에 현재 확인 경로를 물으세요."
    },
    {
      "name": "현재 회선 조건부터 확인",
      "description": "현재 사용액, 결제 제한과 대상 서비스의 지원 여부를 확인합니다. 광고의 최대 금액을 본인 한도로 옮겨 적지 않습니다. 알뜰폰 또는 다른 요금제라면 LG U+ 망 이용 여부만으로 같은 조건이라고 판단하지 않습니다."
    },
    {
      "name": "앱 결제 실패와 외부 지급 문제 나누기",
      "description": "오류 문구와 주문 상태를 보관합니다. Google Play 구매라면 해당 공식 지원 조건도 대조하세요. 구매 승인이 거절된 문제와 외부 상대가 지급하지 않은 문제는 각각 설명해야 문의 범위를 정할 수 있습니다."
    }
  ],
  "accent": "#183b56" ,
  contact: {
    name: '누티켓', phone: '010-8111-1555', kakaoId: 'N1348',
    kakaoUrl: 'https://qr.kakao.com/talk/MBsKvshDmtamG2EuQNKdmPuGFJQ-',
    sourceUrl: 'https://xn--od1b246c0uc.kr', verifiedAt: '2026-10-03'
  }
} as const;
export const topics=[{id:'basics',name:"회선과 스토어",number:'01',description:"LG U+ 회선에서 콘텐츠 결제와 일반 휴대폰 결제를 구분하고 현재 설정을 확인하는 안내입니다."}] as const;
export const phoneHref='tel:'+site.contact.phone.replaceAll('-','');
