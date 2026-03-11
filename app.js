// ====================================
// 직장인 타로 - 전체 78장 카드 데이터
// ====================================

const tarotData = {
  major: [
    {
      id: 0,
      name: "THE FOOL",
      korean: "신입사원",
      summary: "아무것도 모르지만 그게 용기",
      traditional: "새로운 시작, 순수함, 자유로운 영혼. 절벽 끝에 서 있지만 두려워하지 않는 모습.",
      workplace: "새 회사, 새 프로젝트, 새 업무에 뛰어드는 순간. 경험은 없지만 열정만큼은 가득한 상태.",
      upright: {
        meaning: "🎉 **새로운 시작, 순수한 열정, 도전 정신**",
        situation: "• 새 회사 첫 출근\n• 완전히 새로운 업무 시작\n• 경력 전환",
        emotion: "喜(기쁨): 새 출발에 대한 설렘"
      },
      reversed: {
        meaning: "⚠️ **무모함, 준비 부족, 생각 없는 행동**",
        situation: "• 계획 없는 퇴사\n• 준비 안 된 프레젠테이션\n• 충동적인 결정",
        emotion: "哀(슬픔): 실수로 인한 후회"
      },
      examples: [
        "새 회사 첫 출근 - 설레지만 두려움도 있음",
        "신규 프로젝트 리더 임명 - 경험 없지만 도전",
        "완전히 다른 직군으로 이직 결심"
      ],
      advice: {
        upright: "두려워하지 말고 시작하세요. 실수는 배움의 일부입니다.",
        reversed: "최소한의 준비는 필요합니다. 무모함과 용기는 다릅니다."
      },
      combinations: "The Magician과 함께 나오면 '실력 있는 신입', The Tower와 함께면 '무모한 도전'"
    },
    {
      id: 1,
      name: "THE MAGICIAN",
      korean: "프로젝트 리더",
      summary: "가진 것 총동원해서 해내는 사람",
      traditional: "창조력, 능력, 실행력. 네 가지 원소(완드, 컵, 소드, 펜타클)를 모두 다루는 마법사.",
      workplace: "프로젝트를 실제로 '해내는' 사람. 자원을 모아 결과물을 만들어내는 실행자.",
      upright: {
        meaning: "💪 **능력 발휘, 실행력, 창조**",
        situation: "• 프로젝트 리더 선정\n• 중요한 발표 성공\n• 실력 인정받음",
        emotion: "喜(기쁨): 능력을 인정받는 순간"
      },
      reversed: {
        meaning: "🎭 **말만 번지르르, 실행력 부족**",
        situation: "• 계획만 거창하고 실행 안 함\n• 포장만 잘하는 사람\n• 능력 없이 허세",
        emotion: "怒(분노): 겉만 번지르한 사람에 대한 불만"
      },
      examples: [
        "프로젝트 리더로 선정되어 팀을 이끎",
        "클라이언트 미팅에서 완벽한 프레젠테이션",
        "여러 부서 협업을 성공적으로 조율"
      ],
      advice: {
        upright: "지금이 실행할 때입니다. 당신은 할 수 있습니다.",
        reversed: "실력이 없으면 포장도 소용없습니다. 기본기를 다지세요."
      },
      combinations: "The Fool과 함께 나오면 '새 프로젝트 시작', Justice와 함께면 '능력에 합당한 평가'"
    },
    {
      id: 2,
      name: "THE HIGH PRIESTESS",
      korean: "회사 고인물",
      summary: "말 안 해도 다 아는 사람",
      traditional: "직관, 내면의 지혜, 비밀. 표면 아래 숨겨진 진실을 아는 사람.",
      workplace: "오래 있어서 회사 내부 사정을 다 아는 사람. 분위기 읽기의 달인.",
      upright: {
        meaning: "🔮 **직관력, 분위기 읽기, 경험에서 나오는 지혜**",
        situation: "• 회사 분위기 정확히 읽음\n• 말 안 해도 상황 파악\n• 경험으로 문제 해결",
        emotion: "樂(즐거움): 자신의 경험과 직관이 맞을 때"
      },
      reversed: {
        meaning: "🤐 **정보 독점, 소통 부족, 배타적 태도**",
        situation: "• 정보 공유 안 함\n• 신입에게 불친절\n• 자기만 아는 척",
        emotion: "怒(분노): 정보를 공유하지 않는 선배에 대한 불만"
      },
      examples: [
        "구조조정 소문을 미리 알아채고 대비",
        "상사의 기분을 정확히 읽고 대처",
        "회사 정치 구도를 꿰뚫고 있음"
      ],
      advice: {
        upright: "당신의 직관을 믿으세요. 분위기가 이상하다면 이유가 있습니다.",
        reversed: "정보를 독점하면 외톨이가 됩니다. 나눌 줄 알아야 합니다."
      },
      combinations: "The Hermit과 함께 나오면 '고립된 고인물', The Magician과 함께면 '경험 많은 실력자'"
    },
    {
      id: 3,
      name: "THE EMPRESS",
      korean: "팀의 엄마",
      summary: "챙기고 키워주는 사람",
      traditional: "풍요, 양육, 창조. 모성적 에너지, 돌봄과 성장.",
      workplace: "팀원들을 챙기고 키워주는 따뜻한 리더. 후배 양성의 달인.",
      upright: {
        meaning: "🤱 **팀 케어, 후배 양성, 따뜻한 리더십**",
        situation: "• 신입 교육 담당\n• 팀원 멘탈 케어\n• 따뜻한 분위기 조성",
        emotion: "樂(즐거움): 팀원이 성장하는 모습을 볼 때"
      },
      reversed: {
        meaning: "😫 **과보호, 간섭, 번아웃**",
        situation: "• 지나치게 챙겨서 부담\n• 본인 일은 못하고 남 챙김\n• 감정 소진",
        emotion: "哀(슬픔): 자신을 돌보지 못한 채 지쳐감"
      },
      examples: [
        "신입이 적응할 때까지 세심하게 챙김",
        "팀원의 고민 상담을 들어주고 조언",
        "팀 분위기를 따뜻하게 만드는 중심"
      ],
      advice: {
        upright: "당신의 따뜻함이 팀을 살립니다. 계속하세요.",
        reversed: "본인도 챙겨야 합니다. 모두를 구할 순 없어요."
      },
      combinations: "The Emperor와 함께 나오면 '균형 잡힌 리더십', Death와 함께면 '번아웃으로 퇴사'"
    },
    {
      id: 4,
      name: "THE EMPEROR",
      korean: "진짜 상사",
      summary: "책임지고 결정하는 사람",
      traditional: "권위, 질서, 리더십. 아버지 같은 존재, 구조와 규칙.",
      workplace: "제대로 된 상사. 책임지고 결정하며, 팀을 지키는 리더.",
      upright: {
        meaning: "👔 **리더십, 책임감, 명확한 결정**",
        situation: "• 팀을 책임지는 팀장\n• 중요한 결정을 내림\n• 팀원을 보호",
        emotion: "喜(기쁨): 좋은 상사를 만났을 때의 안도감"
      },
      reversed: {
        meaning: "👿 **독재, 권위주의, 융통성 없음**",
        situation: "• 꼰대 상사\n• 일방적 지시만 내림\n• 권위로만 누름",
        emotion: "怒(분노): 독재적 상사에 대한 반감"
      },
      examples: [
        "팀원 실수를 본인이 책임지고 해결",
        "중요한 결정을 빠르고 명확하게 내림",
        "팀 이익을 위해 윗선과 협상"
      ],
      advice: {
        upright: "리더는 인기투표가 아닙니다. 책임지고 결정하세요.",
        reversed: "권위는 존경에서 나옵니다. 두려움이 아닙니다."
      },
      combinations: "The Empress와 함께 나오면 '이상적 리더십', The Devil과 함께면 '권력 남용'"
    },
    {
      id: 5,
      name: "THE HIEROPHANT",
      korean: "회사 매뉴얼",
      summary: "정석대로 하는 사람",
      traditional: "전통, 가르침, 정석. 스승, 교육, 관습.",
      workplace: "회사 규정, 업무 매뉴얼을 정확히 따르는 사람. 신입 교육 담당.",
      upright: {
        meaning: "📖 **멘토링, 교육, 정석적 방법**",
        situation: "• 신입 교육 담당\n• 업무 가이드 제공\n• 회사 문화 전수",
        emotion: "樂(즐거움): 제대로 된 교육을 받을 때"
      },
      reversed: {
        meaning: "📜 **융통성 없음, 고리타분, 형식주의**",
        situation: "• 매뉴얼만 고집\n• 새로운 방법 거부\n• 꼰대식 사고",
        emotion: "怒(분노): 시대착오적 방식에 대한 답답함"
      },
      examples: [
        "신입에게 업무 매뉴얼을 차근차근 알려줌",
        "회사 규정을 정확히 지킴",
        "검증된 방법으로 안정적으로 일함"
      ],
      advice: {
        upright: "전통에는 이유가 있습니다. 먼저 배우세요.",
        reversed: "매뉴얼은 가이드지 절대 진리가 아닙니다. 사고 정지는 독입니다."
      },
      combinations: "The Fool과 함께 나오면 '신입 교육', The Tower와 함께면 '시스템 붕괴'"
    },
    {
      id: 6,
      name: "THE LOVERS",
      korean: "선택의 기로",
      summary: "이것도 좋고 저것도 좋은데",
      traditional: "선택, 관계, 가치관. 중요한 결정의 순간.",
      workplace: "두 가지 이상의 좋은 선택지가 있을 때. 이직 vs 남기, 프로젝트 A vs B.",
      upright: {
        meaning: "🤔 **중요한 선택, 가치관 정립**",
        situation: "• 두 회사 중 선택\n• 프로젝트 우선순위 결정\n• 커리어 방향 선택",
        emotion: "哀(고민): 중요한 선택 앞의 고민"
      },
      reversed: {
        meaning: "😵 **우유부단, 선택 회피, 후회**",
        situation: "• 결정을 못 내림\n• 기회를 놓침\n• 잘못된 선택 후회",
        emotion: "哀(슬픔): 기회를 놓친 후회"
      },
      examples: [
        "두 회사에서 동시 합격, 어디 갈지 고민",
        "연봉 vs 워라밸 무엇을 선택할지",
        "현재 팀 vs 새 팀 이동 고민"
      ],
      advice: {
        upright: "가치관을 정리하세요. 무엇이 더 중요한지 알면 답이 보입니다.",
        reversed: "우유부단함은 독입니다. 결정하지 않는 것도 하나의 결정입니다."
      },
      combinations: "Justice와 함께 나오면 '공정한 선택', The Devil과 함께면 '유혹에 빠진 선택'"
    },
    {
      id: 7,
      name: "THE CHARIOT",
      korean: "프로젝트 질주",
      summary: "일단 지르고 보는 사람",
      traditional: "승리, 추진력, 의지. 두 마리 말을 제어하며 앞으로 나아가는 전차.",
      workplace: "프로젝트 데드라인 앞에서 미친 듯이 달리는 상태. 추진력 MAX.",
      upright: {
        meaning: "🏎️ **추진력, 목표 달성, 승리**",
        situation: "• 프로젝트 데드라인 질주\n• 목표 달성\n• 경쟁에서 승리",
        emotion: "喜(기쁨): 목표를 향해 달릴 때의 쾌감"
      },
      reversed: {
        meaning: "🔥 **통제 불능, 번아웃, 과속**",
        situation: "• 과로로 쓰러짐\n• 너무 빨리 가다 실수\n• 방향 잃고 헤맴",
        emotion: "哀(슬픔): 번아웃으로 지쳐 쓰러짐"
      },
      examples: [
        "한 달 남은 프로젝트 마감을 향해 질주",
        "경쟁 PT에서 승리",
        "목표 매출 달성을 위해 전력 질주"
      ],
      advice: {
        upright: "지금은 달릴 때입니다. 주저하지 마세요.",
        reversed: "속도를 줄이세요. 쓰러지면 끝입니다."
      },
      combinations: "Strength와 함께 나오면 '지속 가능한 추진력', The Tower와 함께면 '번아웃 붕괴'"
    },
    {
      id: 8,
      name: "STRENGTH",
      korean: "멘탈 갑",
      summary: "버티는 게 이기는 거",
      traditional: "내면의 힘, 인내, 용기. 사자를 부드럽게 다루는 여인.",
      workplace: "힘든 상황에서도 버티는 정신력. 감정 조절의 달인.",
      upright: {
        meaning: "🦁 **인내심, 침착함, 멘탈 관리**",
        situation: "• 힘든 프로젝트 버티기\n• 어려운 팀원 대처\n• 스트레스 관리 성공",
        emotion: "樂(즐거움): 어려움을 이겨낸 뿌듯함"
      },
      reversed: {
        meaning: "💢 **멘탈 붕괴, 참다 폭발, 통제 실패**",
        situation: "• 참다 참다 폭발\n• 스트레스 조절 실패\n• 감정 폭발",
        emotion: "怒(분노): 한계를 넘어 폭발"
      },
      examples: [
        "어려운 고객을 침착하게 대응",
        "힘든 프로젝트를 끝까지 완수",
        "팀 내 갈등을 부드럽게 중재"
      ],
      advice: {
        upright: "버티는 것도 능력입니다. 당신은 강합니다.",
        reversed: "한계를 인정하는 것도 용기입니다. 쉬어가세요."
      },
      combinations: "The Chariot과 함께 나오면 '지속 가능한 추진력', The Tower와 함께면 '한계 도달 후 붕괴'"
    },
    {
      id: 9,
      name: "THE HERMIT",
      korean: "혼밥러",
      summary: "나만의 시간이 필요해",
      traditional: "고독, 성찰, 내면의 빛. 등불을 들고 홀로 산을 오르는 현자.",
      workplace: "혼자만의 시간이 필요한 순간. 재충전, 성찰, 고민.",
      upright: {
        meaning: "🕯️ **성찰, 재충전, 혼자만의 시간**",
        situation: "• 재택근무로 재충전\n• 커리어 고민\n• 자기 계발 시간",
        emotion: "樂(즐거움): 혼자만의 시간으로 재충전"
      },
      reversed: {
        meaning: "😔 **고립, 외로움, 소통 단절**",
        situation: "• 팀에서 고립됨\n• 사회성 부족\n• 도움 요청 못 함",
        emotion: "哀(슬픔): 외롭고 고립된 느낌"
      },
      examples: [
        "재택근무로 혼자 집중해서 일함",
        "퇴근 후 커리어에 대해 깊이 고민",
        "회사 밖에서 자기 계발 시간"
      ],
      advice: {
        upright: "혼자만의 시간이 필요합니다. 재충전하세요.",
        reversed: "고독과 고립은 다릅니다. 소통이 필요합니다."
      },
      combinations: "The High Priestess와 함께 나오면 '깊은 성찰', The Devil과 함께면 '고립된 상태'"
    },
    {
      id: 10,
      name: "WHEEL OF FORTUNE",
      korean: "운빨",
      summary: "인생은 타이밍",
      traditional: "운명, 순환, 변화. 돌아가는 바퀴, 운명의 수레바퀴.",
      workplace: "운이 좋을 때와 나쁠 때가 있음. 타이밍의 중요성.",
      upright: {
        meaning: "🎰 **행운, 기회, 좋은 타이밍**",
        situation: "• 우연한 기회로 승진\n• 타이밍 좋게 프로젝트 성공\n• 운 좋게 위기 회피",
        emotion: "喜(기쁨): 운이 좋을 때의 기쁨"
      },
      reversed: {
        meaning: "😭 **불운, 타이밍 안 좋음, 악재**",
        situation: "• 운 나쁘게 짤림\n• 타이밍 안 좋아 실패\n• 악재 연속",
        emotion: "哀(슬픔): 불운에 대한 억울함"
      },
      examples: [
        "회사가 갑자기 성장해 함께 승승장구",
        "프로젝트가 우연히 대박 남",
        "타이밍 좋게 좋은 팀으로 이동"
      ],
      advice: {
        upright: "기회가 왔을 때 잡으세요. 행운은 준비된 자에게 옵니다.",
        reversed: "불운도 영원하지 않습니다. 버티세요."
      },
      combinations: "Justice와 함께 나오면 '실력 + 운', The Tower와 함께면 '불운한 타이밍의 위기'"
    },
    {
      id: 11,
      name: "JUSTICE",
      korean: "평가 시즌",
      summary: "한 만큼 받는다",
      traditional: "공정함, 균형, 인과응보. 저울과 칼을 든 정의의 여신.",
      workplace: "인사 평가, 성과급. 한 만큼 받는(혹은 못 받는) 순간.",
      upright: {
        meaning: "⚖️ **공정한 평가, 합당한 보상**",
        situation: "• 정당한 인사 평가\n• 능력에 맞는 연봉\n• 공정한 승진",
        emotion: "喜(기쁨): 노력을 인정받을 때"
      },
      reversed: {
        meaning: "😡 **불공정, 부당한 대우, 억울함**",
        situation: "• 불공정한 평가\n• 노력에 비해 낮은 보상\n• 부당한 인사",
        emotion: "怒(분노): 불공정에 대한 분노"
      },
      examples: [
        "1년간 열심히 일한 결과 좋은 평가",
        "성과에 맞는 성과급 지급",
        "능력을 인정받아 승진"
      ],
      advice: {
        upright: "정직하게 일하세요. 결국 인정받습니다.",
        reversed: "불공정하다면 목소리 내세요. 참는 건 해결이 아닙니다."
      },
      combinations: "The Magician과 함께 나오면 '능력에 합당한 평가', The Devil과 함께면 '부정한 방법으로 이득'"
    },
    {
      id: 12,
      name: "THE HANGED MAN",
      korean: "대기 발령",
      summary: "참고 기다리는 시간",
      traditional: "희생, 관점의 전환, 정체. 거꾸로 매달린 사람.",
      workplace: "대기 발령, 프로젝트 대기, 승진 대기. 아무것도 할 수 없는 답답한 시간.",
      upright: {
        meaning: "⏸️ **대기, 휴식, 관점 전환**",
        situation: "• 프로젝트 사이 대기\n• 휴가로 재충전\n• 새로운 관점 얻음",
        emotion: "樂(즐거움): 강제 휴식으로 재충전"
      },
      reversed: {
        meaning: "😤 **무의미한 대기, 방치, 답답함**",
        situation: "• 대기 발령 상태\n• 일 못하고 대기만\n• 승진 누락",
        emotion: "怒(분노): 방치된 느낌에 대한 분노"
      },
      examples: [
        "프로젝트 끝나고 다음 배정 대기",
        "승진 후보였지만 결국 누락",
        "부서 이동 전 어정쩡한 상태"
      ],
      advice: {
        upright: "멈춤도 필요합니다. 이 시간을 활용하세요.",
        reversed: "무의미한 대기는 독입니다. 상황을 바꾸세요."
      },
      combinations: "The Hermit과 함께 나오면 '의미 있는 휴식', Death와 함께면 '끝나지 않는 대기 후 퇴사'"
    },
    {
      id: 13,
      name: "DEATH",
      korean: "퇴사",
      summary: "끝이자 시작",
      traditional: "끝과 시작, 변화, 재탄생. 죽음은 끝이 아니라 변화.",
      workplace: "퇴사. 하나의 끝이자 새로운 시작.",
      upright: {
        meaning: "🔄 **끝과 시작, 변화, 재탄생**",
        situation: "• 퇴사 후 새 회사\n• 부서 이동\n• 커리어 전환",
        emotion: "喜(기쁨): 새 시작에 대한 기대"
      },
      reversed: {
        meaning: "😨 **끝내지 못함, 집착, 질질 끌기**",
        situation: "• 퇴사 못하고 버팀\n• 실패한 프로젝트 못 놓음\n• 변화 거부",
        emotion: "哀(슬픔): 놓지 못해 고통스러움"
      },
      examples: [
        "퇴사를 결심하고 새 회사로 이직",
        "실패한 프로젝트를 정리하고 새 시작",
        "오래된 업무 방식을 버리고 새로운 방법 시도"
      ],
      advice: {
        upright: "끝낼 용기를 내세요. 새로운 시작이 기다립니다.",
        reversed: "질질 끄는 건 독입니다. 깔끔하게 정리하세요."
      },
      combinations: "The Fool과 함께 나오면 '퇴사 후 새 출발', The Tower와 함께면 '강제 퇴사'"
    },
    {
      id: 14,
      name: "TEMPERANCE",
      korean: "워라밸",
      summary: "일과 삶의 균형",
      traditional: "절제, 균형, 조화. 두 잔 사이에 물을 옮기는 천사.",
      workplace: "일과 삶의 균형. 적절한 조율과 중도.",
      upright: {
        meaning: "⚖️ **균형, 조화, 워라밸**",
        situation: "• 일과 삶의 균형\n• 팀 내 조율\n• 적절한 업무량",
        emotion: "樂(즐거움): 균형 잡힌 삶"
      },
      reversed: {
        meaning: "⚠️ **불균형, 극단, 과로 혹은 태만**",
        situation: "• 워라밸 붕괴\n• 극단적 선택\n• 업무 과다 혹은 너무 적음",
        emotion: "哀(슬픔): 균형 잃고 지침"
      },
      examples: [
        "정시 퇴근하며 취미 생활 유지",
        "업무와 개인 시간을 잘 분배",
        "팀 내에서 업무를 공정하게 분배"
      ],
      advice: {
        upright: "균형을 유지하세요. 지속 가능해야 합니다.",
        reversed: "극단은 독입니다. 중도를 찾으세요."
      },
      combinations: "Strength와 함께 나오면 '지속 가능한 일', The Devil과 함께면 '중독적 야근'"
    },
    {
      id: 15,
      name: "THE DEVIL",
      korean: "열정페이",
      summary: "못 벗어나는 굴레",
      traditional: "속박, 중독, 유혹. 사슬에 묶인 남녀, 하지만 사슬은 느슨함.",
      workplace: "열정페이, 야근 중독, 회사에 묶인 느낌. 하지만 사실 벗어날 수 있음.",
      upright: {
        meaning: "⛓️ **착취, 중독, 벗어날 수 없는 느낌**",
        situation: "• 열정페이 강요\n• 야근 중독\n• 회사에 묶인 느낌",
        emotion: "怒(분노): 착취당한다는 느낌"
      },
      reversed: {
        meaning: "🔓 **해방, 깨달음, 벗어남**",
        situation: "• 퇴사 결심\n• 착취 거부\n• 자유 찾음",
        emotion: "喜(기쁨): 벗어난 후의 해방감"
      },
      examples: [
        "야근 수당 없는 무한 야근",
        "'열정'이라는 이름의 무보수 노동",
        "그만두고 싶지만 못 그만두는 상태"
      ],
      advice: {
        upright: "사슬은 생각보다 느슨합니다. 벗어날 수 있습니다.",
        reversed: "벗어났다면 축하합니다. 다시 돌아가지 마세요."
      },
      combinations: "The Hanged Man과 함께 나오면 '대기 중 착취', Death와 함께면 '벗어남(퇴사)'"
    },
    {
      id: 16,
      name: "THE TOWER",
      korean: "구조조정",
      summary: "갑자기 무너지는 순간",
      traditional: "갑작스러운 변화, 붕괴, 충격. 번개 맞은 탑.",
      workplace: "구조조정, 갑작스러운 해고, 회사 위기. 예상치 못한 충격.",
      upright: {
        meaning: "⚡ **갑작스러운 붕괴, 충격, 위기**",
        situation: "• 구조조정 통보\n• 갑작스러운 해고\n• 프로젝트 엎어짐",
        emotion: "哀(슬픔): 갑작스러운 충격에 대한 슬픔"
      },
      reversed: {
        meaning: "🛡️ **최악 피함, 재건, 회복**",
        situation: "• 구조조정 면함\n• 위기 넘김\n• 다시 시작",
        emotion: "喜(기쁨): 최악을 피한 안도감"
      },
      examples: [
        "갑작스러운 구조조정 통보",
        "프로젝트가 갑자기 엎어짐",
        "회사가 갑자기 문 닫음"
      ],
      advice: {
        upright: "무너진 곳에 새로 지을 수 있습니다. 포기하지 마세요.",
        reversed: "최악을 피했다면 다행입니다. 재건하세요."
      },
      combinations: "Death와 함께 나오면 '강제 퇴사 후 재기', The Star와 함께면 '위기 후 희망'"
    },
    {
      id: 17,
      name: "THE STAR",
      korean: "이직 성공",
      summary: "드디어 보이는 희망",
      traditional: "희망, 영감, 치유. 별빛 아래 물을 붓는 여인.",
      workplace: "드디어 찾아온 기회. 이직 성공, 새로운 희망.",
      upright: {
        meaning: "⭐ **희망, 치유, 새로운 기회**",
        situation: "• 이직 성공\n• 좋은 기회 찾음\n• 재충전 후 복귀",
        emotion: "喜(기쁨): 희망이 보이는 기쁨"
      },
      reversed: {
        meaning: "😞 **희망 상실, 실망, 지침**",
        situation: "• 이직 실패\n• 기회 놓침\n• 희망 없어 보임",
        emotion: "哀(슬픔): 희망을 잃은 허탈함"
      },
      examples: [
        "오랜 준비 끝에 이직 성공",
        "번아웃 후 재충전하고 복귀",
        "드디어 원하는 프로젝트 배정"
      ],
      advice: {
        upright: "당신의 노력은 헛되지 않았습니다. 계속하세요.",
        reversed: "희망을 잃지 마세요. 아직 끝나지 않았습니다."
      },
      combinations: "The Tower와 함께 나오면 '위기 후 희망', The Fool과 함께면 '새로운 시작의 희망'"
    },
    {
      id: 18,
      name: "THE MOON",
      korean: "불안",
      summary: "뭔가 불안한 느낌",
      traditional: "불안, 착각, 불명확. 달빛 아래 개 짖는 밤.",
      workplace: "회사 분위기가 이상함. 뭔가 불안하지만 정확히 모르겠음.",
      upright: {
        meaning: "🌙 **불안, 불명확, 의심**",
        situation: "• 회사 분위기 이상\n• 소문만 무성\n• 불안한 느낌",
        emotion: "哀(슬픔): 불안에 대한 두려움"
      },
      reversed: {
        meaning: "💡 **진실 드러남, 명확해짐**",
        situation: "• 소문이 사실로 확인\n• 상황 명확해짐\n• 불안 해소",
        emotion: "樂(즐거움): 진실을 알게 된 안도감"
      },
      examples: [
        "구조조정 소문이 도는데 확실하지 않음",
        "상사가 이상하게 행동해 불안",
        "프로젝트 방향이 불명확해 혼란"
      ],
      advice: {
        upright: "불안을 무시하지 마세요. 이유가 있습니다.",
        reversed: "진실이 드러났다면 이제 대처하세요."
      },
      combinations: "The High Priestess와 함께 나오면 '직관적 불안', The Tower와 함께면 '불안이 현실로'"
    },
    {
      id: 19,
      name: "THE SUN",
      korean: "승진",
      summary: "모든 게 잘 되는 날",
      traditional: "성공, 기쁨, 명확함. 태양 아래 말 타는 아이.",
      workplace: "승진, 성공, 모든 게 잘 풀리는 시기.",
      upright: {
        meaning: "☀️ **성공, 승진, 기쁨**",
        situation: "• 승진 확정\n• 프로젝트 대성공\n• 모든 게 잘 풀림",
        emotion: "喜(기쁨): 성공의 기쁨"
      },
      reversed: {
        meaning: "⛅ **지연, 과도한 낙관, 눈부심**",
        situation: "• 승진 지연\n• 과신으로 실수\n• 너무 낙관적",
        emotion: "哀(슬픔): 기대에 못 미친 실망"
      },
      examples: [
        "드디어 승진 확정",
        "프로젝트 대박으로 보너스",
        "모든 것이 순조롭게 진행"
      ],
      advice: {
        upright: "축하합니다! 당신의 노력이 빛났습니다.",
        reversed: "과도한 낙관은 주의하세요. 겸손함을 잃지 마세요."
      },
      combinations: "Justice와 함께 나오면 '합당한 승진', The Devil과 함께면 '성공에 중독'"
    },
    {
      id: 20,
      name: "JUDGEMENT",
      korean: "커리어 전환점",
      summary: "인생 결정할 때",
      traditional: "부활, 판단, 소명. 나팔 소리에 일어나는 사람들.",
      workplace: "커리어의 중요한 전환점. 지금까지의 평가와 앞으로의 방향.",
      upright: {
        meaning: "📣 **중요한 결정, 커리어 전환, 평가**",
        situation: "• 이직 vs 남기 결정\n• 커리어 방향 전환\n• 중요한 평가 시점",
        emotion: "哀(고민): 중요한 결정 앞의 진지함"
      },
      reversed: {
        meaning: "🚫 **판단 미루기, 회피, 후회**",
        situation: "• 결정 못 내림\n• 기회 놓침\n• 과거 집착",
        emotion: "哀(슬픔): 결정하지 못한 후회"
      },
      examples: [
        "이직할지 남을지 중요한 결정의 순간",
        "커리어를 완전히 바꿀지 고민",
        "지금까지의 커리어를 돌아보는 시점"
      ],
      advice: {
        upright: "결정하세요. 당신은 이미 알고 있습니다.",
        reversed: "미루는 것도 하나의 결정입니다. 책임지세요."
      },
      combinations: "The Lovers와 함께 나오면 '중요한 선택의 순간', Death와 함께면 '전환점에서의 결단'"
    },
    {
      id: 21,
      name: "THE WORLD",
      korean: "프로젝트 완성",
      summary: "드디어 완성!",
      traditional: "완성, 성취, 순환의 끝. 화환에 둘러싸인 춤추는 여인.",
      workplace: "프로젝트 완성, 목표 달성, 한 사이클의 완료.",
      upright: {
        meaning: "🎉 **완성, 성취, 성공**",
        situation: "• 프로젝트 완성\n• 목표 달성\n• 한 단계 완료",
        emotion: "喜(기쁨): 완성의 기쁨"
      },
      reversed: {
        meaning: "🔄 **미완성, 아쉬움, 마지막 단계**",
        situation: "• 거의 다 했는데 미완\n• 마지막 단계에서 막힘\n• 아쉬운 결과",
        emotion: "哀(슬픔): 미완성에 대한 아쉬움"
      },
      examples: [
        "1년 프로젝트 드디어 완성",
        "목표 매출 달성",
        "자격증 취득 완료"
      ],
      advice: {
        upright: "축하합니다! 이제 새로운 여정을 시작하세요.",
        reversed: "마지막 한 걸음입니다. 포기하지 마세요."
      },
      combinations: "The Sun과 함께 나오면 '대성공', The Fool과 함께면 '완성 후 새 시작'"
    }
  ],
  minor: {
    wands: [
      { id: 1, name: "Ace of Wands", korean: "신규 프로젝트", summary: "시작!", upright: "새 프로젝트 시작, 열정, 기회", reversed: "시작 못함, 열정 부족" },
      { id: 2, name: "Two of Wands", korean: "계획 수립", summary: "다음은?", upright: "계획, 미래 구상", reversed: "계획 없음, 우유부단" },
      { id: 3, name: "Three of Wands", korean: "진행 중", summary: "기다리는 중", upright: "진행 중, 기대", reversed: "지연, 답답함" },
      { id: 4, name: "Four of Wands", korean: "팀 회식", summary: "축하!", upright: "축하, 팀워크", reversed: "분위기 어색, 형식적" },
      { id: 5, name: "Five of Wands", korean: "팀 내 경쟁", summary: "의견 충돌", upright: "경쟁, 갈등", reversed: "협력, 갈등 해소" },
      { id: 6, name: "Six of Wands", korean: "프로젝트 성공", summary: "인정받음", upright: "성공, 인정", reversed: "자만, 실패" },
      { id: 7, name: "Seven of Wands", korean: "방어", summary: "버티기", upright: "방어, 고수", reversed: "포기, 압도됨" },
      { id: 8, name: "Eight of Wands", korean: "급속 진행", summary: "빠르게!", upright: "속도, 진전", reversed: "지연, 혼란" },
      { id: 9, name: "Nine of Wands", korean: "거의 다 왔다", summary: "마지막 힘", upright: "인내, 끝", reversed: "지침, 포기" },
      { id: 10, name: "Ten of Wands", korean: "과부하", summary: "너무 많아", upright: "과부하, 책임", reversed: "위임, 짐 덜기" },
      { id: 11, name: "Page of Wands", korean: "신입의 열정", summary: "새로운 소식", upright: "열정, 소식", reversed: "불안정, 미숙" },
      { id: 12, name: "Knight of Wands", korean: "실행력 있는 사람", summary: "행동파", upright: "추진력, 행동", reversed: "무모, 충동" },
      { id: 13, name: "Queen of Wands", korean: "카리스마 리더", summary: "자신감", upright: "리더십, 자신감", reversed: "독선, 오만" },
      { id: 14, name: "King of Wands", korean: "비전 제시자", summary: "비전 리더", upright: "비전, 리더십", reversed: "독재, 폭군" }
    ],
    cups: [
      { id: 1, name: "Ace of Cups", korean: "새로운 인연", summary: "새 팀원", upright: "새 관계, 감정", reversed: "관계 단절, 감정 부족" },
      { id: 2, name: "Two of Cups", korean: "좋은 파트너", summary: "협업", upright: "파트너십, 협력", reversed: "불화, 갈등" },
      { id: 3, name: "Three of Cups", korean: "팀 화합", summary: "축하 회식", upright: "축하, 우정", reversed: "과음, 어색" },
      { id: 4, name: "Four of Cups", korean: "무기력", summary: "지루함", upright: "무관심, 지루", reversed: "새 기회 발견" },
      { id: 5, name: "Five of Cups", korean: "실망", summary: "후회", upright: "실망, 후회", reversed: "회복, 앞으로" },
      { id: 6, name: "Six of Cups", korean: "옛 동료", summary: "추억", upright: "과거, 향수", reversed: "과거 집착" },
      { id: 7, name: "Seven of Cups", korean: "선택 과다", summary: "뭘 할까?", upright: "선택지 많음, 환상", reversed: "현실로, 결정" },
      { id: 8, name: "Eight of Cups", korean: "이직", summary: "떠남", upright: "떠남, 포기", reversed: "남기, 회귀" },
      { id: 9, name: "Nine of Cups", korean: "만족", summary: "소원 성취", upright: "만족, 행복", reversed: "과욕, 불만" },
      { id: 10, name: "Ten of Cups", korean: "워라밸 성공", summary: "완벽한 조화", upright: "행복, 조화", reversed: "불화, 불균형" },
      { id: 11, name: "Page of Cups", korean: "감성적 신입", summary: "좋은 소식", upright: "좋은 소식, 감성", reversed: "감정 미숙, 실망" },
      { id: 12, name: "Knight of Cups", korean: "낭만주의자", summary: "이상주의", upright: "이상, 낭만", reversed: "비현실, 무책임" },
      { id: 13, name: "Queen of Cups", korean: "공감 리더", summary: "감정 케어", upright: "공감, 케어", reversed: "감정 과다, 번아웃" },
      { id: 14, name: "King of Cups", korean: "멘탈 관리자", summary: "감정 조절", upright: "감정 조절, 성숙", reversed: "감정 조작, 냉담" }
    ],
    swords: [
      { id: 1, name: "Ace of Swords", korean: "명확한 판단", summary: "결정!", upright: "명확, 돌파구", reversed: "혼란, 잘못된 판단" },
      { id: 2, name: "Two of Swords", korean: "결정 불가", summary: "고민", upright: "우유부단, 정체", reversed: "결정, 돌파" },
      { id: 3, name: "Three of Swords", korean: "배신", summary: "마음 아픔", upright: "배신, 슬픔", reversed: "회복, 용서" },
      { id: 4, name: "Four of Swords", korean: "휴식", summary: "쉬어야 해", upright: "휴식, 회복", reversed: "복귀, 불안" },
      { id: 5, name: "Five of Swords", korean: "승리와 패배", summary: "얻고 잃고", upright: "갈등, 승리", reversed: "화해, 반성" },
      { id: 6, name: "Six of Swords", korean: "이직 준비", summary: "이동", upright: "이동, 회복", reversed: "정체, 돌아감" },
      { id: 7, name: "Seven of Swords", korean: "꼼수", summary: "몰래", upright: "전략, 꼼수", reversed: "들킴, 정직" },
      { id: 8, name: "Eight of Swords", korean: "갇힌 느낌", summary: "옴짝달싹", upright: "갇힘, 무력감", reversed: "해방, 돌파" },
      { id: 9, name: "Nine of Swords", korean: "불안과 스트레스", summary: "못 자겠어", upright: "불안, 악몽", reversed: "회복, 희망" },
      { id: 10, name: "Ten of Swords", korean: "최악", summary: "바닥", upright: "최악, 끝", reversed: "회복, 재기" },
      { id: 11, name: "Page of Swords", korean: "감시자", summary: "정보 수집", upright: "호기심, 정보", reversed: "험담, 감시" },
      { id: 12, name: "Knight of Swords", korean: "돌진형", summary: "빠르게 결정", upright: "행동, 결단", reversed: "무모, 충동" },
      { id: 13, name: "Queen of Swords", korean: "냉철한 판단자", summary: "명확", upright: "명확, 논리", reversed: "냉혹, 잔인" },
      { id: 14, name: "King of Swords", korean: "전략가", summary: "논리", upright: "논리, 전략", reversed: "독재, 냉담" }
    ],
    pentacles: [
      { id: 1, name: "Ace of Pentacles", korean: "새 기회", summary: "돈!", upright: "새 기회, 보상", reversed: "기회 놓침, 손실" },
      { id: 2, name: "Two of Pentacles", korean: "멀티태스킹", summary: "바쁘다", upright: "균형, 바쁨", reversed: "불균형, 과부하" },
      { id: 3, name: "Three of Pentacles", korean: "협업 성공", summary: "팀워크", upright: "협업, 성공", reversed: "불협화음, 실패" },
      { id: 4, name: "Four of Pentacles", korean: "지키기", summary: "내 거야", upright: "안정, 절약", reversed: "인색, 집착" },
      { id: 5, name: "Five of Pentacles", korean: "재정 위기", summary: "돈 없어", upright: "위기, 손실", reversed: "회복, 도움" },
      { id: 6, name: "Six of Pentacles", korean: "보상", summary: "나눔", upright: "보상, 나눔", reversed: "불공정, 착취" },
      { id: 7, name: "Seven of Pentacles", korean: "평가 대기", summary: "기다리는 중", upright: "대기, 평가", reversed: "실망, 헛수고" },
      { id: 8, name: "Eight of Pentacles", korean: "숙련", summary: "열심히", upright: "노력, 숙련", reversed: "지루, 무의미" },
      { id: 9, name: "Nine of Pentacles", korean: "독립", summary: "자립", upright: "독립, 성공", reversed: "고립, 과시" },
      { id: 10, name: "Ten of Pentacles", korean: "안정", summary: "완성", upright: "안정, 유산", reversed: "손실, 불안정" },
      { id: 11, name: "Page of Pentacles", korean: "배우는 신입", summary: "학습", upright: "학습, 기회", reversed: "게으름, 미숙" },
      { id: 12, name: "Knight of Pentacles", korean: "성실한 사람", summary: "꾸준함", upright: "성실, 책임감", reversed: "지루, 정체" },
      { id: 13, name: "Queen of Pentacles", korean: "실용주의자", summary: "안정", upright: "안정, 실용", reversed: "집착, 물질주의" },
      { id: 14, name: "King of Pentacles", korean: "성공한 리더", summary: "완성", upright: "성공, 안정", reversed: "탐욕, 완고" }
    ]
  }
};

// ====================================
// 유틸리티 함수
// ====================================

function getAllCards() {
  const allCards = [...tarotData.major];
  Object.values(tarotData.minor).forEach(suit => {
    allCards.push(...suit);
  });
  return allCards;
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function drawRandomCards(count = 1) {
  const allCards = getAllCards();
  const shuffled = shuffleArray(allCards);
  return shuffled.slice(0, count).map(card => ({
    ...card,
    reversed: Math.random() > 0.5
  }));
}

// ====================================
// UI 제어 함수
// ====================================

let currentSpread = 1;
let drawnCards = [];

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}

function showMain() {
  showScreen('mainScreen');
  drawnCards = [];
}

function startDraw(spreadCount) {
  currentSpread = spreadCount;
  showScreen('drawScreen');
  renderCardDeck();
}

function renderCardDeck() {
  const deck = document.getElementById('cardDeck');
  deck.innerHTML = '';
  
  for (let i = 0; i < currentSpread; i++) {
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    cardBack.textContent = '🎴';
    cardBack.onclick = () => handleCardClick(i);
    deck.appendChild(cardBack);
  }
}

function handleCardClick(index) {
  drawnCards = drawRandomCards(currentSpread);
  showResult();
}

function showResult() {
  showScreen('resultScreen');
  const resultContent = document.getElementById('resultContent');
  
  const positions = ['과거', '현재', '미래'];
  
  resultContent.innerHTML = drawnCards.map((card, index) => {
    const isReversed = card.reversed;
    const positionLabel = currentSpread === 3 ? `${positions[index]}: ` : '';
    
    return `
      <div class="card-result">
        <h3>${positionLabel}${card.korean}</h3>
        <p style="color: #888; margin-bottom: 10px;">${card.name}</p>
        <span class="orientation ${isReversed ? 'reversed' : 'upright'}">
          ${isReversed ? '역방향 ⬇️' : '정방향 ⬆️'}
        </span>
        <p><strong>${card.summary}</strong></p>
        ${card.traditional ? `
          <p style="margin-top: 15px; padding: 10px; background: #f0f0f0; border-radius: 8px;">
            <strong>📚 정통 타로:</strong><br>${card.traditional}
          </p>` : ''}
        ${card.workplace ? `
          <p style="margin-top: 10px; padding: 10px; background: #e8f4f8; border-radius: 8px;">
            <strong>💼 직장인 번역:</strong><br>${card.workplace}
          </p>` : ''}
        <p style="margin-top: 15px;">
          ${isReversed ? card.reversed : card.upright}
        </p>
        ${card.advice ? `
          <p style="margin-top: 15px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
            <strong>💡 타로의 조언:</strong><br>
            ${isReversed ? card.advice.reversed : card.advice.upright}
          </p>` : ''}
      </div>
    `;
  }).join('');
}

function restart() {
  drawnCards = [];
  startDraw(currentSpread);
}

// ====================================
// 이벤트 리스너
// ====================================

document.addEventListener('DOMContentLoaded', () => {
  // 스프레드 선택 버튼
  document.querySelectorAll('.spread-btn').forEach(btn => {
    const spreadCount = parseInt(btn.dataset.spread);
    btn.addEventListener('click', () => startDraw(spreadCount));
  });
  
  // 전체 카드 보기 버튼 (있다면)
  const viewAllBtn = document.getElementById('viewAllBtn');
  if (viewAllBtn) {
    viewAllBtn.addEventListener('click', renderAllCards);
  }
  
  // 백 버튼들
  document.querySelectorAll('[onclick="showMain()"]').forEach(btn => {
    btn.addEventListener('click', showMain);
  });
  
  // 다시 뽑기 버튼
  document.querySelectorAll('[onclick="restart()"]').forEach(btn => {
    btn.addEventListener('click', restart);
  });
});

// ====================================
// 전체 카드 목록 표시 (선택 사항)
// ====================================

function renderAllCards(filter = 'all') {
  let cards = [];
  
  if (filter === 'all') {
    cards = getAllCards();
  } else if (filter === 'major') {
    cards = tarotData.major;
  } else {
    cards = tarotData.minor[filter] || [];
  }
  
  // UI 구현은 index.html 구조에 따라 조정
  // 예시: 카드 목록을 표시하는 화면이 있다면
  const cardList = document.getElementById('cardList');
  if (cardList) {
    cardList.innerHTML = cards.map(card => `
      <div class="card-item" onclick="showCardDetail('${card.id}')">
        <h4>${card.korean}</h4>
        <p>${card.summary}</p>
      </div>
    `).join('');
  }
}

function showCardDetail(cardId) {
  const allCards = getAllCards();
  const card = allCards.find(c => c.id == cardId);
  
  if (!card) return;
  
  // 카드 상세 화면 표시 (구조에 맞게 구현)
  alert(`${card.korean}\n\n${card.summary}\n\n정방향: ${card.upright}\n역방향: ${card.reversed}`);
}
