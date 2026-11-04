/* Знімок аркушів Google-таблиці (резерв, сирі дані: рік/студенти фільтрує сторінка). Оновлюється експортом із таблиці. */
window.CONFIG_FALLBACK={
 "students": [
  {
   "id": "test",
   "year": "усі",
   "group": "–",
   "name": "Тест Тестович",
   "active": 1,
   "credit_1": null,
   "credit_2": null,
   "credit_3": null,
   "credit_4": null,
   "credit_5": null
  },
  {
   "id": "s001",
   "year": "2026/27",
   "group": "Група 1",
   "name": "Студент 1",
   "active": 1,
   "credit_1": null,
   "credit_2": null,
   "credit_3": null,
   "credit_4": null,
   "credit_5": null
  },
  {
   "id": "s002",
   "year": "2026/27",
   "group": "Група 1",
   "name": "Студент 2",
   "active": 1,
   "credit_1": null,
   "credit_2": null,
   "credit_3": null,
   "credit_4": null,
   "credit_5": null
  },
  {
   "id": "s003",
   "year": "2026/27",
   "group": "Група 1",
   "name": "Студент 3",
   "active": 1,
   "credit_1": null,
   "credit_2": null,
   "credit_3": null,
   "credit_4": null,
   "credit_5": null
  },
  {
   "id": "s004",
   "year": "2026/27",
   "group": "Група 1",
   "name": "Студент 4",
   "active": 1,
   "credit_1": null,
   "credit_2": null,
   "credit_3": null,
   "credit_4": null,
   "credit_5": null
  }
 ],
 "variants": [
  {
   "student_id": "test",
   "lab": 1,
   "variant": "Ni"
  },
  {
   "student_id": "s001",
   "lab": 1,
   "variant": "Ni"
  },
  {
   "student_id": "s002",
   "lab": 1,
   "variant": "Pt"
  },
  {
   "student_id": "s003",
   "lab": 1,
   "variant": "Cu"
  },
  {
   "student_id": "s004",
   "lab": 1,
   "variant": "Au"
  }
 ],
 "settings": {
  "year_start_month": 9,
  "show_test_always": 0
 },
 "lab": {
  "params": {
   "points_min": 20,
   "points_max": 30,
   "T_min": 20,
   "T_max": 80,
   "qcm_error_pct": 3,
   "qcm_noise_nm": 0.3,
   "rate_scatter_pct": 5,
   "qcm_refresh_s": 1,
   "anim_clock_s": 3,
   "anim_rotate_s": 1.5,
   "anim_cool_s": 4,
   "anim_door_s": 0.8,
   "rho_film_Ni_A": 3.15e-14,
   "subst_x_mm": 5,
   "subst_y_mm": 5,
   "noise_R_pct": 0.1,
   "Ti_alpha_1_K": 0.0038,
   "Ti_rho_uohm_cm": 42,
   "mask_count_shown": 15,
   "test_speedup": 10,
   "p_atm_mbar": 1013,
   "p_base_mbar": 2e-06,
   "p_ion_mbar": 0.0005,
   "p_dep_mbar": 5e-06,
   "gauge_lo_exp": -7,
   "gauge_hi_exp": 3.2,
   "wafer_d_mm": 50,
   "chip_mm": 10,
   "wafers_per_film": 3,
   "spread_rpm": 500,
   "spread_s": 7,
   "spin_rpm_min": 500,
   "spin_rpm_max": 4000,
   "spin_t_green_min": 30,
   "spin_t_green_max": 45,
   "spin_t_red_min": 20,
   "spin_t_max": 120,
   "resist_h_min_um": 0.5,
   "resist_h_max_um": 1.5,
   "resist_scatter_pct": 2,
   "exp_s_per_um": 10,
   "dev_s": 45,
   "hardbake_C": 145,
   "hardbake_min": 20,
   "etch_agit_k": 2,
   "etch_nonuni_still": 0.1,
   "etch_nonuni_agit": 0.03,
   "etch_over_warn": 0.5,
   "etch_over_bad": 1,
   "etch_speedups": "2;5;10",
   "developer_name": "KOH 0,4 %",
   "msg_A2_resist_thick": "Обрано резист {resist}: навіть на максимальних {rpm_max} об/хв він дає шар {h_best} мкм, а допустимо не більше {h_max} мкм. Цей резист занадто в'язкий для потрібної товщини. Наслідок: товстий шар не експонується на всю глибину, малюнок не проявиться до металу, і травлення не відбудеться.",
   "msg_A2_short": "Час формування {t} с замалий (потрібно щонайменше {t_min} с, рекомендовано {t_g1}–{t_g2} с). Розчинник не встиг випаруватися: плівка нерівномірна, товща до краю пластини. Наслідок: краї доріжок розмиються під час проявлення, а на краю пластини резист не проявиться.",
   "msg_A2_thick": "Резист {resist} при {rpm} об/хв дав шар {h} мкм, а допустимо не більше {h_max} мкм: оберти замалі. Наслідок: товстий шар не експонується на всю глибину, на дні залишиться резист, і метал під ним не протравиться.",
   "msg_A2_thin": "Резист {resist} при {rpm} об/хв дав шар {h} мкм, а потрібно щонайменше {h_min} мкм: оберти завеликі. Наслідок: у тонкому шарі є проколи (пори), травник пройде крізь них і пошкодить доріжку."
  },
  "materials": [
   {
    "material": "Ti",
    "role": "adhesion",
    "rho_bulk_uohm_cm": 42,
    "alpha_bulk": 0.0038,
    "rho_film_factor": 1,
    "rate_nm_s": 0.25,
    "t_green_min": 10,
    "t_green_max": 20,
    "t_red_min": 5,
    "t_red_max": 40,
    "color": "#8e9aa5",
    "speedups": "10",
    "note": "довідкова таблиця",
    "msg_thin": "Шар Ti занадто тонкий: адгезія недостатня, структура розшарувалася.",
    "msg_thick": "Шар Ti надто товстий: він не протравиться повністю."
   },
   {
    "material": "Ni",
    "role": "metal",
    "rho_bulk_uohm_cm": 6.99,
    "alpha_bulk": 0.00539,
    "rho_film_factor": 3,
    "rate_nm_s": 0.8,
    "t_green_min": 150,
    "t_green_max": 300,
    "t_red_min": 80,
    "t_red_max": 450,
    "color": "#b8c4cc",
    "speedups": "2;3;10",
    "note": "α з методички",
    "msg_thin": "Шар {material} занадто тонкий: плівка неоднорідна (острівцева), стабільного опору не буде.",
    "msg_thick": "Шар {material} надто товстий: плівка відшаровується від механічних напружень."
   },
   {
    "material": "Pt",
    "role": "metal",
    "rho_bulk_uohm_cm": 10.6,
    "alpha_bulk": 0.0039,
    "rho_film_factor": 2,
    "rate_nm_s": 0.5,
    "t_green_min": 150,
    "t_green_max": 300,
    "t_red_min": 80,
    "t_red_max": 450,
    "color": "#d9dde0",
    "speedups": "2;3;5;10",
    "note": "α з методички",
    "msg_thin": "Шар {material} занадто тонкий: плівка неоднорідна (острівцева), стабільного опору не буде.",
    "msg_thick": "Шар {material} надто товстий: плівка відшаровується від механічних напружень."
   },
   {
    "material": "Cu",
    "role": "metal",
    "rho_bulk_uohm_cm": 1.68,
    "alpha_bulk": 0.00404,
    "rho_film_factor": 2,
    "rate_nm_s": 1.2,
    "t_green_min": 150,
    "t_green_max": 300,
    "t_red_min": 80,
    "t_red_max": 450,
    "color": "#c9793a",
    "speedups": "2;10",
    "note": "довідкова таблиця",
    "msg_thin": "Шар {material} занадто тонкий: плівка неоднорідна (острівцева), стабільного опору не буде.",
    "msg_thick": "Шар {material} надто товстий: плівка відшаровується від механічних напружень."
   },
   {
    "material": "Au",
    "role": "metal",
    "rho_bulk_uohm_cm": 2.44,
    "alpha_bulk": 0.0034,
    "rho_film_factor": 2,
    "rate_nm_s": 1.2,
    "t_green_min": 150,
    "t_green_max": 300,
    "t_red_min": 80,
    "t_red_max": 450,
    "color": "#e0b73c",
    "speedups": "2;10",
    "note": "довідкова таблиця",
    "msg_thin": "Шар {material} занадто тонкий: плівка неоднорідна (острівцева), стабільного опору не буде.",
    "msg_thick": "Шар {material} надто товстий: плівка відшаровується від механічних напружень."
   }
  ],
  "phases": [
   {
    "n": 1,
    "code": "load",
    "button": "Завантажити пластини і закрити камеру",
    "visual_min": 60,
    "realtime": 0,
    "note": "Відкачка; годинник перескакує"
   },
   {
    "n": 2,
    "code": "ion",
    "button": "Почати іонне очищення підкладки",
    "visual_min": 10,
    "realtime": 0,
    "note": "Плазма; годинник +10 хв"
   },
   {
    "n": 3,
    "code": "dep",
    "button": "Почати напилення",
    "visual_min": 0,
    "realtime": 1,
    "note": "Ti: секундомір + товщина нм (реальний час)"
   },
   {
    "n": 4,
    "code": "rotate",
    "button": "Наступний етап",
    "visual_min": 0,
    "realtime": 0,
    "note": "Поворот тигля до металу"
   },
   {
    "n": 5,
    "code": "cool",
    "button": "Охолодження",
    "visual_min": 0,
    "realtime": 0,
    "note": "Пластина остигає"
   },
   {
    "n": 6,
    "code": "vent",
    "button": "Зняти вакуум",
    "visual_min": 45,
    "realtime": 0,
    "note": "Годинник +45 хв"
   }
  ],
  "templates": [
   {
    "id": "M1",
    "name": null,
    "shape": null,
    "w_mm": 0.2,
    "gap_mm": 0.2,
    "area_x_mm": 5,
    "area_y_mm": 5,
    "note": null
   },
   {
    "id": "M2",
    "name": null,
    "shape": null,
    "w_mm": 0.2,
    "gap_mm": 0.2,
    "area_x_mm": 6,
    "area_y_mm": 4,
    "note": null
   },
   {
    "id": "M3",
    "name": null,
    "shape": null,
    "w_mm": 0.2,
    "gap_mm": 0.2,
    "area_x_mm": 8,
    "area_y_mm": 5,
    "note": null
   },
   {
    "id": "M4",
    "name": null,
    "shape": null,
    "w_mm": 0.25,
    "gap_mm": 0.25,
    "area_x_mm": 5,
    "area_y_mm": 4,
    "note": null
   },
   {
    "id": "M5",
    "name": null,
    "shape": null,
    "w_mm": 0.25,
    "gap_mm": 0.25,
    "area_x_mm": 6,
    "area_y_mm": 6,
    "note": null
   },
   {
    "id": "M6",
    "name": null,
    "shape": null,
    "w_mm": 0.25,
    "gap_mm": 0.25,
    "area_x_mm": 8,
    "area_y_mm": 5,
    "note": null
   },
   {
    "id": "M7",
    "name": null,
    "shape": null,
    "w_mm": 0.3,
    "gap_mm": 0.3,
    "area_x_mm": 6,
    "area_y_mm": 8,
    "note": null
   },
   {
    "id": "M8",
    "name": null,
    "shape": null,
    "w_mm": 0.3,
    "gap_mm": 0.3,
    "area_x_mm": 8,
    "area_y_mm": 7,
    "note": null
   },
   {
    "id": "M9",
    "name": null,
    "shape": null,
    "w_mm": 0.3,
    "gap_mm": 0.3,
    "area_x_mm": 8,
    "area_y_mm": 8,
    "note": null
   },
   {
    "id": "M10",
    "name": null,
    "shape": null,
    "w_mm": 0.35,
    "gap_mm": 0.35,
    "area_x_mm": 8,
    "area_y_mm": 7,
    "note": null
   },
   {
    "id": "M11",
    "name": null,
    "shape": null,
    "w_mm": 0.35,
    "gap_mm": 0.35,
    "area_x_mm": 8,
    "area_y_mm": 8,
    "note": null
   },
   {
    "id": "M12",
    "name": null,
    "shape": null,
    "w_mm": 0.4,
    "gap_mm": 0.4,
    "area_x_mm": 7,
    "area_y_mm": 8,
    "note": null
   },
   {
    "id": "M13",
    "name": null,
    "shape": null,
    "w_mm": 0.4,
    "gap_mm": 0.4,
    "area_x_mm": 8,
    "area_y_mm": 8,
    "note": null
   },
   {
    "id": "M14",
    "name": null,
    "shape": null,
    "w_mm": 0.45,
    "gap_mm": 0.45,
    "area_x_mm": 8,
    "area_y_mm": 8,
    "note": null
   },
   {
    "id": "M15",
    "name": null,
    "shape": null,
    "w_mm": 0.5,
    "gap_mm": 0.5,
    "area_x_mm": 8,
    "area_y_mm": 8,
    "note": null
   }
  ],
  "tests": [
   {
    "id": "test1",
    "metal": "Ni",
    "template_id": "T2",
    "t_ti_nm": 15,
    "t_metal_nm": 225,
    "defect": null,
    "note": "Еталон"
   },
   {
    "id": "test2",
    "metal": "Ni",
    "template_id": "T5",
    "t_ti_nm": 12,
    "t_metal_nm": 180,
    "defect": null,
    "note": null
   }
  ],
  "resists": [
   {
    "id": "P1",
    "name": "S1805",
    "type": "позитивний",
    "analog": "Microposit (Kayaku), серія S1800",
    "h_ref_um": 0.5,
    "rpm_ref": 4000,
    "resolution": "висока, до 0,5–1 мкм",
    "etch_resistance": "середня",
    "viscosity": "низька",
    "color": "#c0453a",
    "note": "Тонкі шари; найчіткіші межі рисунку"
   },
   {
    "id": "P2",
    "name": "S1813",
    "type": "позитивний",
    "analog": "Microposit (Kayaku), серія S1800",
    "h_ref_um": 1.3,
    "rpm_ref": 4000,
    "resolution": "висока, до 1 мкм",
    "etch_resistance": "середня",
    "viscosity": "середня",
    "color": "#a8322a",
    "note": "Універсальний, найпоширеніший"
   },
   {
    "id": "P3",
    "name": "S1818",
    "type": "позитивний",
    "analog": "Microposit (Kayaku), серія S1800",
    "h_ref_um": 1.8,
    "rpm_ref": 4000,
    "resolution": "висока, до 1–1,5 мкм",
    "etch_resistance": "середня",
    "viscosity": "висока",
    "color": "#8e2622",
    "note": "Товсті шари для глибокого рельєфу"
   },
   {
    "id": "N1",
    "name": "ma-N 1405",
    "type": "негативний",
    "analog": "micro resist technology, серія ma-N 1400",
    "h_ref_um": 0.5,
    "rpm_ref": 3000,
    "resolution": "середня, 1–2 мкм",
    "etch_resistance": "висока",
    "viscosity": "низька",
    "color": "#9b6fd0",
    "note": "Тонкі шари"
   },
   {
    "id": "N2",
    "name": "ma-N 1410",
    "type": "негативний",
    "analog": "micro resist technology, серія ma-N 1400",
    "h_ref_um": 1,
    "rpm_ref": 3000,
    "resolution": "середня, 1–2 мкм",
    "etch_resistance": "висока",
    "viscosity": "середня",
    "color": "#7f4fc0",
    "note": "Універсальний"
   },
   {
    "id": "N3",
    "name": "ma-N 1420",
    "type": "негативний",
    "analog": "micro resist technology, серія ma-N 1400",
    "h_ref_um": 2,
    "rpm_ref": 3000,
    "resolution": "середня, 2 мкм",
    "etch_resistance": "висока",
    "viscosity": "висока",
    "color": "#6a3aa8",
    "note": "Товсті шари для глибокого рельєфу"
   }
  ],
  "Травники": [
   {
    "id": "FE",
    "name": "Хлорид заліза",
    "formula": "FeCl₃, 30 %",
    "color": "#c9a24a",
    "rate_Ni": 18,
    "rate_Pt": 0,
    "rate_Cu": 25,
    "rate_Au": 0,
    "rate_Ti": 0,
    "note": "Травить Ni і Cu; Ti, Pt, Au не травить"
   },
   {
    "id": "KI",
    "name": "Йодний травник",
    "formula": "KI + I₂ + H₂O",
    "color": "#8a4b2a",
    "rate_Ni": 0,
    "rate_Pt": 0,
    "rate_Cu": 0,
    "rate_Au": 20,
    "rate_Ti": 0,
    "note": "Травить Au"
   },
   {
    "id": "AR",
    "name": "Царська вода (гаряча)",
    "formula": "HCl : HNO₃ = 3 : 1, 60 °C",
    "color": "#d9a43a",
    "rate_Ni": 30,
    "rate_Pt": 16,
    "rate_Cu": 40,
    "rate_Au": 40,
    "rate_Ti": 2,
    "note": "Травить Pt і Au, а також Ni, Cu; Ti – дуже повільно"
   },
   {
    "id": "HF",
    "name": "Розведена HF",
    "formula": "HF 1 %",
    "color": "#bfe3e8",
    "rate_Ni": 1,
    "rate_Pt": 0,
    "rate_Cu": 0,
    "rate_Au": 0,
    "rate_Ti": 15,
    "note": "Травить Ti; метали майже не травить. Обережно: HF небезпечна!"
   }
  ]
 }
};
