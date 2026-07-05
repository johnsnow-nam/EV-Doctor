# P4 Diagnostic Tester — 제품 외형 정의 (실제 기준, 2026-07-05)

> 형(제품 제작자)이 확인한 **실제 진단기 외형**. 마케팅 이미지·렌더·문서를 만들 때 반드시 이 외형을 따른다.
> 기존 마케팅 이미지(`ev-hero-field.png` 등)와 **비슷하나 두 가지가 다르다** — 아래 ⚠ 항목.

## 1. 한 줄 정의
**핸드헬드 러기드 EV충전 진단기.** 상단에 LCD 터치패널이 일체로 내장된 휴대형 장비.

## 2. 외형 사양 (실제)
| 항목 | 실제 |
|---|---|
| 폼팩터 | 핸드헬드 휴대형, 러기드(고무 그립 테두리) 바디 |
| **LCD 터치패널** | **상단에 내장형(일체형)** — 화면이 본체 상단에 박혀 있음 |
| 화면 내용 | 진단 대시보드 — SLAC/V2G 상태 체크(녹색 ✓), 파형/그래프, 소프트키 |
| 커넥터/포트 | 상단 엣지에 진단 케이블 포트(EV 충전 커넥터·CP/PP·통신) |
| 색상/톤 | 다크(매트 블랙/그레이) + teal·green 액센트 |

## 3. ⚠ 기존 이미지와 다른 점 (반드시 반영)
| # | 기존 마케팅 이미지 | 실제 제품 |
|---|---|---|
| ① | LCD가 별도 화면처럼 보임 | **LCD 터치패널 = 상단 내장형(본체와 일체)** |
| ② | 커넥터 옆/중간에 **원형 렌즈(녹색 광학부)** 있음 | **렌즈 없음** — 카메라/광학 렌즈류 일절 없다 |

> 즉: 다음 이미지 생성 시 **"중간·전면의 원형 렌즈 제거"** + **"LCD를 상단 내장형으로"** 를 프롬프트에 못박는다.

## 4. 이미지 생성 프롬프트 가이드 (다음 렌더용)
```
handheld rugged EV charging diagnostic tester, LCD touch panel integrated into the TOP of the body (built-in, not a separate screen), diagnostic dashboard with green SLAC/V2G check marks and waveform, connector ports on the top edge, dark matte body with teal/green accents.
⚠ NO circular lens, NO camera lens, NO optical element anywhere on the device.
photorealistic dark studio product render, no logos, no fake text.
```

## 5. 용도
- 마케팅 랜딩(`2026-07-05_p4_diag_마케팅랜딩.html`)·PDF의 제품 이미지를 이 외형으로 재생성할 때 기준.
- 제품 렌더·홍보물 제작 시 외형 일관성 유지.

---
*Everest-em | p4_diag 제품 외형 정의 | 2026-07-05 | 회사 기밀*
