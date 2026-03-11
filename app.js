// 타로 데이터 (78장)
const tarotData = {
    major: [
        {
            id: 0,
            name: "The Fool",
            korean: "신입사원",
            summary: "아무것도 모르지만 그게 용기",
            upright: "새로운 시작, 순수한 열정, 배울 준비가 된 상태. 새 회사 첫 출근, 새 업무 도전.",
            reversed: "무모함, 준비 부족, 계획 없는 도전. 무계획 이직, 준비 없는 프레젠테이션.",
            advice: "정: 실수는 경험. 두려워 말고 시작하세요. 역: 최소한의 준비는 필요합니다."
        },
        {
            id: 1,
            name: "The Magician",
            korean: "프로젝트 리더",
            summary: "가진 것 총동원해서 해내는 사람",
            upright: "능력 발휘, 실행력, 리소스 활용. 프로젝트 리더 선정, 아이디어 채택.",
            reversed: "말만 번지르르, 실행 안 함, 능력 과시. 공치사만, 아이디어 가로채기.",
            advice: "정: 가진 능력 발휘할 때. 실행하세요. 역: 실력 없으면 포장도 소용없어요."
        },
        {
            id: 2,
            name: "The High Priestess",
            korean: "회사 고인물",
            summary: "말 안 해도 다 아는 사람",
            upright: "직관력, 내부 사정 파악, 타이밍 감각. 회사 분위기 읽기, 상사 의중 파악.",
            reversed: "정보 독점, 소문만 믿기, 눈치만 보기. 아는 척만 하고 도움 안 줌.",
            advice: "정: 직관을 믿고 흐름을 읽으세요. 역: 정보 독점하면 외톨이 됩니다."
        },
        {
            id: 3,
            name: "The Empress",
            korean: "팀의 엄마",
            summary: "챙기고 키워주는 사람",
            upright: "팀 케어, 후배 양성, 따뜻한 리더십. 후배 가르치기, 팀 분위기 메이커.",
            reversed: "과잉보호, 희생 강요, 번아웃. 챙기다 본인 업무 못 함.",
            advice: "정: 따뜻함이 팀을 살립니다. 역: 남 챙기다 당신이 쓰러지면 안 돼요."
        },
        {
            id: 4,
            name: "The Emperor",
            korean: "진짜 상사",
            summary: "책임지고 결정하는 사람",
            upright: "강한 리더십, 명확한 구조, 책임감. 팀장으로서 제대로 역할 수행.",
            reversed: "독재, 경직성, 책임 회피, 권위주의. 내 말이 곧 법.",
            advice: "정: 리더는 인기투표가 아닙니다. 역: 권위는 존경에서 나옵니다."
        },
        {
            id: 5,
            name: "The Hierophant",
            korean: "회사 매뉴얼",
            summary: "정석대로 하는 게 답이야",
            upright: "정석 준수, 멘토링, 교육 시스템. 회사 규정 따라서 일 처리.",
            reversed: "융통성 없음, 구닥다리 방식, 형식주의. 원래 그래왔으니까.",
            advice: "정: 전통에는 이유가 있습니다. 역: 원래 그랬으니까는 사고의 정지."
        },
        {
            id: 6,
            name: "The Lovers",
            korean: "선택의 기로",
            summary: "이것도 좋고 저것도 좋은데...",
            upright: "좋은 선택지들, 가치관 정립, 중요한 결정. 두 회사 오퍼, 승진 vs 이직.",
            reversed: "잘못된 선택, 우유부단, 양다리. 결정 못 하고 기회 날림.",
            advice: "정: 당신의 가치관이 무엇인지 먼저 정리하세요. 역: 우유부단함은 기회를 잃게 만듭니다."
        },
        {
            id: 7,
            name: "The Chariot",
            korean: "프로젝트 질주",
            summary: "일단 지르고 보는 추진력",
            upright: "강한 추진력, 목표 달성, 집중력. 프로젝트 막판 스퍼트.",
            reversed: "과로, 방향 상실, 통제 불능. 달리다가 번아웃.",
            advice: "정: 지금은 달릴 때입니다. 역: 속도만 내다가 사고 납니다."
        },
        {
            id: 8,
            name: "Strength",
            korean: "멘탈 갑",
            summary: "버티는 게 이기는 거야",
            upright: "침착함, 인내심, 감정 조절. 상사 갑질에도 침착하게 대응.",
            reversed: "멘탈 붕괴, 인내심 한계, 감정 폭발. 참다참다 회의실에서 폭발.",
            advice: "정: 진짜 강한 사람은 버티는 사람입니다. 역: 무한정 참는 게 미덕은 아닙니다."
        },
        {
            id: 9,
            name: "The Hermit",
            korean: "혼밥러",
            summary: "나만의 시간이 필요해",
            upright: "성찰의 시간, 자기 계발, 독립. 혼자만의 시간으로 재충전.",
            reversed: "고립, 외로움, 회피, 소통 단절. 팀에서 완전히 동떨어짐.",
            advice: "정: 혼자 있는 시간이 필요합니다. 역: 고독과 고립은 다릅니다."
        },
        {
            id: 10,
            name: "Wheel of Fortune",
            korean: "운빨",
            summary: "이건 진짜 타이밍이야",
            upright: "행운, 좋은 타이밍, 긍정적 변화. 마침 공석 나서 승진.",
            reversed: "불운, 나쁜 타이밍, 예상치 못한 악재. 하필 구조조정 시기.",
            advice: "정: 기회가 왔으면 잡으세요. 역: 불운도 영원하지 않습니다."
        },
        {
            id: 11,
            name: "Justice",
            korean: "평가 시즌",
            summary: "한 만큼 받는다",
            upright: "공정한 평가, 정당한 보상, 원칙적 판단. 열심히 한 만큼 평가받음.",
            reversed: "불공정, 편파적 판단, 책임 회피. 열심히 했는데 평가 낮음.",
            advice: "정: 정직하게 일하세요. 역: 불공정한 평가에 분노할 자격이 있습니다."
        },
        {
            id: 12,
            name: "The Hanged Man",
            korean: "대기 발령",
            summary: "지금은 참고 기다릴 때",
            upright: "여유, 관점 전환, 재충전. 프로젝트 끝나고 휴식기.",
            reversed: "무의미한 대기, 방치, 시간 낭비. 대기 발령으로 사실상 퇴출 수순.",
            advice: "정: 때로는 멈춤이 필요합니다. 역: 무의미한 대기는 독입니다."
        },
        {
            id: 13,
            name: "Death",
            korean: "퇴사",
            summary: "끝이자 새로운 시작",
            upright: "필요한 종료, 새로운 시작, 변화. 결심하고 퇴사 선언.",
            reversed: "끝내지 못함, 변화 거부. 퇴사하고 싶은데 못 떠남.",
            advice: "정: 끝내야 할 때를 아는 것도 용기입니다. 역: 끝내지 못하고 질질 끄는 건 독입니다."
        },
        {
            id: 14,
            name: "Temperance",
            korean: "워라밸",
            summary: "일과 삶의 균형 찾기",
            upright: "일과 삶의 균형, 적절한 조율. 야근도 하지만 휴식도 챙김.",
            reversed: "불균형, 과도함, 극단. 일만 하다 건강 망가짐.",
            advice: "정: 균형은 하루아침에 오지 않습니다. 역: 극단으로 치닫고 있다면 멈추세요."
        },
        {
            id: 15,
            name: "The Devil",
            korean: "열정페이",
            summary: "벗어나고 싶은데 못 벗어나는 굴레",
            upright: "속박, 중독, 물질적 집착. 열정페이로 착취당하는 중.",
            reversed: "해방, 깨달음, 벗어남. 이건 아니다 깨닫고 퇴사 결심.",
            advice: "정: 사슬은 느슨합니다. 벗어나려면 벗어날 수 있어요. 역: 깨달았다면 행동하세요."
        },
        {
            id: 16,
            name: "The Tower",
            korean: "구조조정",
            summary: "갑자기 무너지는 순간",
            upright: "갑작스런 붕괴, 예상치 못한 악재. 갑작스런 구조조정 통보.",
            reversed: "최악 피함, 위기 모면. 구조조정인데 나는 살아남음.",
            advice: "정: 무너진 곳에 새로 지을 수 있습니다. 역: 최악을 피했다면 다행입니다."
        },
        {
            id: 17,
            name: "The Star",
            korean: "이직 성공",
            summary: "드디어 보이는 희망",
            upright: "희망, 새로운 기회, 치유. 이직 성공, 좋은 회사 합격.",
            reversed: "희망 상실, 실망. 이직 계속 떨어짐.",
            advice: "정: 힘들었던 시간이 헛되지 않았습니다. 역: 희망을 잃지 마세요."
        },
        {
            id: 18,
            name: "The Moon",
            korean: "불안",
            summary: "뭔가 불안해...",
            upright: "불안, 혼란, 불명확함. 회사 분위기가 수상함.",
            reversed: "명확해짐, 불안 해소. 불안했던 이유가 밝혀짐.",
            advice: "정: 당신의 불안, 무시하지 마세요. 역: 진실이 드러났습니다."
        },
        {
            id: 19,
            name: "The Sun",
            korean: "승진",
            summary: "모든 게 잘 되는 날",
            upright: "성공, 승진, 인정, 기쁨. 승진 통보 받음.",
            reversed: "성공 지연, 과도한 낙관. 승진 거의 확정인데 또 미룸.",
            advice: "정: 축하합니다! 당신이 노력한 결과입니다. 역: 과도한 낙관은 위험합니다."
        },
        {
            id: 20,
            name: "Judgement",
            korean: "커리어 전환점",
            summary: "이제 결정할 때야",
            upright: "중요한 결정, 각성, 커리어 전환. 이직 최종 결정하는 순간.",
            reversed: "결정 회피, 과거에 집착. 결정 못 하고 계속 미룸.",
            advice: "정: 이제 결정할 때입니다. 역: 결정을 미루는 것도 결정입니다."
        },
        {
            id: 21,
            name: "The World",
            korean: "프로젝트 완성",
            summary: "해냈다, 완성이다!",
            upright: "완성, 성공, 성취. 프로젝트 성공적 마무리.",
            reversed: "미완성, 목표 달성 실패. 거의 다 됐는데 마지막에 실패.",
            advice: "정: 축하합니다! 완성했습니다! 역: 마지막 한 걸음이 가장 중요합니다."
        }
    ],
    minor: {
        wands: [
            { id: "w01", name: "Ace of Wands", korean: "새 프로젝트 시작", summary: "기회가 왔다!", upright: "새 프로젝트 배정, 아이디어 채택", reversed: "기회 놓침, 열정 없음" },
            { id: "w02", name: "Two of Wands", korean: "계획 수립", summary: "어떻게 진행할까?", upright: "체계적 계획, 명확한 로드맵", reversed: "계획 없이 시작, 방향 못 잡음" },
            { id: "w03", name: "Three of Wands", korean: "진행 중", summary: "순항 중이야", upright: "순조로운 진행, 계획대로", reversed: "진행 막힘, 지연됨" },
            { id: "w04", name: "Four of Wands", korean: "중간 축하", summary: "1차 목표 달성!", upright: "중간 성과, 팀 회식", reversed: "축하할 게 없음, 팀 불화" },
            { id: "w05", name: "Five of Wands", korean: "팀 내 갈등", summary: "의견이 안 맞아...", upright: "팀 내 의견 충돌, 경쟁", reversed: "갈등 해소 또는 회피" },
            { id: "w06", name: "Six of Wands", korean: "성과 인정", summary: "칭찬받는 날", upright: "성과 인정, 팀 칭찬", reversed: "인정 못 받음, 공 뺏김" },
            { id: "w07", name: "Seven of Wands", korean: "혼자 방어", summary: "나 혼자 지키는 중", upright: "혼자 입장 방어, 버티는 중", reversed: "결국 포기, 압도당함" },
            { id: "w08", name: "Eight of Wands", korean: "급속 진행", summary: "빠르게 빠르게!", upright: "급속 진행, 빠른 결정", reversed: "지연됨, 통제 불가" },
            { id: "w09", name: "Nine of Wands", korean: "거의 끝", summary: "조금만 더 버티자...", upright: "지쳤지만 버팀, 거의 끝", reversed: "번아웃, 더 이상 못 버팀" },
            { id: "w10", name: "Ten of Wands", korean: "과부하", summary: "너무 많아...", upright: "업무 과부하, 모든 책임 혼자", reversed: "짐 내려놓음, 위임함" },
            { id: "w11", name: "Page of Wands", korean: "신입의 열정", summary: "뭐든 해보고 싶어요!", upright: "열정 가득, 새로운 시도", reversed: "열정만 있고 실력 없음" },
            { id: "w12", name: "Knight of Wands", korean: "돌격형 실무자", summary: "일단 지른다!", upright: "빠른 실행력, 열정적 추진", reversed: "무모함, 계획 없이 진행" },
            { id: "w13", name: "Queen of Wands", korean: "카리스마 리더", summary: "따르고 싶어지는 사람", upright: "카리스마, 자신감과 따뜻함", reversed: "독단적, 과도한 자신감" },
            { id: "w14", name: "King of Wands", korean: "비전 제시자", summary: "큰 그림 보는 사람", upright: "명확한 비전, 성숙한 리더십", reversed: "독재적, 비현실적 비전" }
        ],
        cups: [
            { id: "c01", name: "Ace of Cups", korean: "따뜻한 환영", summary: "환영받는 기분", upright: "따뜻한 환영, 좋은 팀 분위기", reversed: "냉대받음, 감정적 공허" },
            { id: "c02", name: "Two of Cups", korean: "업무 파트너", summary: "환상의 호흡", upright: "완벽한 팀워크, 상호 존중", reversed: "협업 실패, 불균형한 관계" },
            { id: "c03", name: "Three of Cups", korean: "팀 회식", summary: "오늘은 우리가 주인공", upright: "팀 회식, 동료애 깊어짐", reversed: "어색한 회식, 팀 분열" },
            { id: "c04", name: "Four of Cups", korean: "무기력", summary: "아무것도 하기 싫어...", upright: "무기력함, 일에 흥미 없음", reversed: "무기력 벗어남, 재충전 필요" },
            { id: "c05", name: "Five of Cups", korean: "실패의 아픔", summary: "왜 이렇게 됐지...", upright: "실패로 슬픔, 상실감, 후회", reversed: "슬픔에서 벗어남, 회복 시작" },
            { id: "c06", name: "Six of Cups", korean: "옛 동료", summary: "그때가 좋았지...", upright: "좋은 추억, 옛 동료와 재회", reversed: "과거에 집착, 추억 미화" },
            { id: "c07", name: "Seven of Cups", korean: "선택 과부하", summary: "다 좋아 보이는데...", upright: "선택지 너무 많음, 혼란", reversed: "명확해짐, 환상 깨짐" },
            { id: "c08", name: "Eight of Cups", korean: "떠남", summary: "이젠 떠날 때야", upright: "떠날 때가 됨, 더 나은 것 추구", reversed: "떠나지 못함, 회피" },
            { id: "c09", name: "Nine of Cups", korean: "만족", summary: "지금 행복해", upright: "만족스러움, 감정적 충족", reversed: "불만족, 과도한 탐욕" },
            { id: "c10", name: "Ten of Cups", korean: "완벽한 팀", summary: "이 팀 최고야", upright: "완벽한 팀워크, 조화", reversed: "팀 분열, 겉만 좋아 보임" },
            { id: "c11", name: "Page of Cups", korean: "좋은 소식", summary: "기분 좋은 메시지", upright: "좋은 소식, 칭찬 메시지", reversed: "나쁜 소식, 실망" },
            { id: "c12", name: "Knight of Cups", korean: "로맨티스트", summary: "이상에 빠진 사람", upright: "이상적 제안, 감정적 호소", reversed: "비현실적, 실행력 없음" },
            { id: "c13", name: "Queen of Cups", korean: "공감 리더", summary: "마음을 읽는 사람", upright: "공감 능력, 팀원 감정 챙김", reversed: "과도한 감정이입, 경계 없음" },
            { id: "c14", name: "King of Cups", korean: "균형 잡힌 리더", summary: "감정과 이성의 균형", upright: "균형 잡힌 리더십, 외교적", reversed: "감정 억압, 냉정함" }
        ],
        swords: [
            { id: "s01", name: "Ace of Swords", korean: "명확한 아이디어", summary: "바로 이거야!", upright: "명확한 아이디어, 돌파구", reversed: "혼란, 잘못된 판단" },
            { id: "s02", name: "Two of Swords", korean: "결정 회피", summary: "결정 못 하겠어...", upright: "결정 못 함, 교착상태", reversed: "결정 내림, 교착 풀림" },
            { id: "s03", name: "Three of Swords", korean: "배신감", summary: "마음이 아파...", upright: "배신감, 마음의 상처", reversed: "치유 시작, 용서" },
            { id: "s04", name: "Four of Swords", korean: "병가", summary: "쉬어야 해...", upright: "휴식, 회복 시간, 재충전", reversed: "쉬지 못함, 강제 휴식 끝" },
            { id: "s05", name: "Five of Swords", korean: "승자 없는 싸움", summary: "이겼지만 찝찝해...", upright: "불필요한 갈등, 공허한 승리", reversed: "갈등 종료, 항복" },
            { id: "s06", name: "Six of Swords", korean: "이동", summary: "떠나서 나아지는 중", upright: "이직, 이동, 나아지는 중", reversed: "이동 못 함, 계속 힘듦" },
            { id: "s07", name: "Seven of Swords", korean: "눈치 게임", summary: "슬쩍 빠져나가기", upright: "눈치껏 빠져나감, 전략적", reversed: "들통남, 정직해짐" },
            { id: "s08", name: "Eight of Swords", korean: "갇힌 기분", summary: "벗어날 수 없어...", upright: "갇힌 느낌, 무력감", reversed: "해방, 깨달음" },
            { id: "s09", name: "Nine of Swords", korean: "불면의 밤", summary: "밤새 걱정...", upright: "극심한 불안, 잠 못 이룸", reversed: "불안 해소, 최악은 피함" },
            { id: "s10", name: "Ten of Swords", korean: "최악", summary: "더 이상 나쁠 수 없어...", upright: "최악의 상황, 바닥", reversed: "최악 피함, 회복 시작" },
            { id: "s11", name: "Page of Swords", korean: "탐정", summary: "뭔가 수상한데?", upright: "날카로운 관찰, 정보 수집", reversed: "참견, 소문 퍼뜨림" },
            { id: "s12", name: "Knight of Swords", korean: "직진형", summary: "거침없이 간다!", upright: "직설적, 빠른 실행", reversed: "무모함, 공격적" },
            { id: "s13", name: "Queen of Swords", korean: "냉철한 판단자", summary: "감정 빼고 판단", upright: "냉철한 판단, 명확한 기준", reversed: "냉정함, 공감 부족" },
            { id: "s14", name: "King of Swords", korean: "전략가", summary: "논리와 전략의 달인", upright: "논리적 리더십, 전략적 사고", reversed: "냉혹함, 독재적" }
        ],
        pentacles: [
            { id: "p01", name: "Ace of Pentacles", korean: "연봉 인상", summary: "돈이 들어온다!", upright: "연봉 인상, 보너스, 재정적 기회", reversed: "기회 놓침, 재정적 실망" },
            { id: "p02", name: "Two of Pentacles", korean: "저글링", summary: "이것저것 동시에!", upright: "다중 작업, 유연하게 대응", reversed: "균형 무너짐, 과부하" },
            { id: "p03", name: "Three of Pentacles", korean: "팀 프로젝트", summary: "협업의 성과", upright: "성공적 협업, 팀 성과", reversed: "협업 실패, 실력 부족" },
            { id: "p04", name: "Four of Pentacles", korean: "지킴이", summary: "내 거 뺏기기 싫어", upright: "소유욕, 정보 독점", reversed: "나눔, 개방" },
            { id: "p05", name: "Five of Pentacles", korean: "실직", summary: "돈이 없어...", upright: "경제적 어려움, 실직", reversed: "회복 시작, 도움 받음" },
            { id: "p06", name: "Six of Pentacles", korean: "멘토링", summary: "나눔과 배움", upright: "지식 나눔, 멘토링", reversed: "불균형, 갑질" },
            { id: "p07", name: "Seven of Pentacles", korean: "중간 점검", summary: "이 정도면 됐나?", upright: "중간 평가, 진행 점검", reversed: "성과 미흡, 조급함" },
            { id: "p08", name: "Eight of Pentacles", korean: "장인", summary: "묵묵히 실력 쌓기", upright: "실력 향상, 자기계발", reversed: "정체, 노력 부족" },
            { id: "p09", name: "Nine of Pentacles", korean: "독립", summary: "내 힘으로 성공", upright: "독립적 성공, 자급자족", reversed: "독립 실패, 고독" },
            { id: "p10", name: "Ten of Pentacles", korean: "안정", summary: "완벽한 안정", upright: "완전한 안정, 재정적 완성", reversed: "불안정, 답답한 안정" },
            { id: "p11", name: "Page of Pentacles", korean: "인턴", summary: "배우는 중", upright: "배우는 자세, 성실함", reversed: "배우지 않음, 게으름" },
            { id: "p12", name: "Knight of Pentacles", korean: "성실형", summary: "느리지만 확실하게", upright: "성실함, 신뢰성, 책임감", reversed: "너무 느림, 융통성 없음" },
            { id: "p13", name: "Queen of Pentacles", korean: "실무 고수", summary: "일도 사람도 챙김", upright: "실무 능력 뛰어남, 사람 챙김", reversed: "일벌레, 물질주의" },
            { id: "p14", name: "King of Pentacles", korean: "CEO", summary: "성공한 리더", upright: "성공한 리더, 재정적 풍요", reversed: "탐욕, 완고함" }
        ]
    }
};

// 전역 변수
let currentSpread = 1;
let drawnCards = [];

// 화면 전환
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// 모든 카드 가져오기
function getAllCards() {
    const all = [...tarotData.major];
    Object.values(tarotData.minor).forEach(suit => all.push(...suit));
    return all;
}

// 카드 섞기 및 뽑기
function drawRandomCards(count) {
    const allCards = getAllCards();
    const shuffled = allCards.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count).map(card => ({
        ...card,
        reversed: Math.random() > 0.5
    }));
}

// 카드 덱 렌더링
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

// 카드 클릭 처리
function handleCardClick(index) {
    if (drawnCards.length >= currentSpread) return;
    
    drawnCards = drawRandomCards(currentSpread);
    showResult();
}

// 결과 표시
function showResult() {
    const content = document.getElementById('resultContent');
    content.innerHTML = '';
    
    drawnCards.forEach((card, index) => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card-result';
        
        const position = currentSpread === 3 ? ['과거', '현재', '미래'][index] : '';
        
        cardDiv.innerHTML = `
            <h3>${position ? `${position}: ` : ''}${card.korean}</h3>
            <p style="color: #888; margin-bottom: 10px;">${card.name}</p>
            <span class="card-orientation ${card.reversed ? 'reversed' : 'upright'}">
                ${card.reversed ? '역방향 ⬇️' : '정방향 ⬆️'}
            </span>
            <div class="card-meaning">
                <p><strong>${card.summary}</strong></p>
                <p style="margin-top: 10px;">
                    ${card.reversed ? card.reversed : card.upright}
                </p>
                ${card.advice ? `<p style="margin-top: 15px; padding: 15px; background: #f8f9fa; border-radius: 8px;"><strong>💡 조언:</strong><br>${card.advice}</p>` : ''}
            </div>
        `;
        
        content.appendChild(cardDiv);
    });
    
    showScreen('resultScreen');
}

// 전체 카드 렌더링
function renderAllCards(filter = 'all') {
    const container = document.getElementById('allCardsList');
    container.innerHTML = '';
    
    let cards = [];
    
    if (filter === 'all') {
        cards = getAllCards();
    } else if (filter === 'major') {
        cards = tarotData.major;
    } else {
        cards = tarotData.minor[filter] || [];
    }
    
    cards.forEach(card => {
        const item = document.createElement('div');
        item.className = 'card-item';
        item.innerHTML = `
            <h4>${card.korean}</h4>
            <p>${card.name}</p>
            <p style="margin-top: 5px;">${card.summary}</p>
        `;
        item.onclick = () => showCardDetail(card);
        container.appendChild(item);
    });
}

// 카드 상세 보기
function showCardDetail(card) {
    drawnCards = [{...card, reversed: false}];
    showResult();
}

// 이벤트 리스너
document.addEventListener('DOMContentLoaded', () => {
    // 스프레드 선택
    document.querySelectorAll('.spread-btn').forEach(btn => {
        btn.onclick = () => {
            currentSpread = parseInt(btn.dataset.spread);
            document.getElementById('drawTitle').textContent = 
                currentSpread === 1 ? '카드를 선택하세요' : '카드 3장을 선택하세요';
            renderCardDeck();
            showScreen('drawScreen');
        };
    });
    
    // 전체 카드 보기
    document.getElementById('viewAllCards').onclick = () => {
        renderAllCards('all');
        showScreen('allCardsScreen');
    };
    
    // 필터 버튼
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderAllCards(btn.dataset.type);
        };
    });
    
    // 뒤로가기 버튼들
    document.getElementById('backToMain').onclick = () => {
        drawnCards = [];
        showScreen('mainScreen');
    };
    
    document.getElementById('backFromResult').onclick = () => {
        drawnCards = [];
        showScreen('mainScreen');
    };
    
    document.getElementById('backFromAll').onclick = () => {
        showScreen('mainScreen');
    };
    
    document.getElementById('drawAgain').onclick = () => {
        drawnCards = [];
        renderCardDeck();
        showScreen('drawScreen');
    };
});
