import { useState, useEffect } from 'react';
import { View, ScrollView, Image, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss';

const categories = [
  { key: 'wardrobe', label: '衣柜' },
  { key: 'kitchen', label: '厨柜' },
  { key: 'cabinet', label: '展示柜' },
  { key: 'bed', label: '床' },
  { key: 'sofa', label: '沙发' },
  { key: 'coffeeTable', label: '茶几' },
  { key: 'table', label: '桌椅' },
];

const mockProducts = {
	"wardrobe": [{
		"id": "BMFIq0Yr",
		"category": "衣柜",
		"style": "现代、简约",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_jy_1.jpeg",
		"sales": 331
	}, {
		"id": "6uKYPBS7",
		"category": "衣柜",
		"style": "现代、轻奢",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_jy_2.jpeg",
		"sales": 843
	}, {
		"id": "M4c2OP9B",
		"category": "衣柜",
		"style": "现代、轻奢",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_jy_3.jpeg",
		"sales": 998
	}, {
		"id": "YRBvLIMC",
		"category": "衣柜",
		"style": "现代、简约",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_jy_4.jpeg",
		"sales": 907
	}, {
		"id": "NaWiWIsW",
		"category": "衣柜",
		"style": "现代、简约",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_jy_5.jpeg",
		"sales": 870
	}, {
		"id": "GNXCAf0e",
		"category": "衣柜",
		"style": "现代、简约",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_jy_6.jpeg",
		"sales": 609
	}, {
		"id": "0wJSwmOr",
		"category": "衣柜",
		"style": "现代、简约",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_jy_7.jpeg",
		"sales": 577
	}, {
		"id": "Zzhz9EUM",
		"category": "衣柜",
		"style": "现代、轻奢",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_jy_8.jpeg",
		"sales": 685
	}, {
		"id": "uQRAuJNo",
		"category": "衣柜",
		"style": "现代、简约、欧美",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_ou_1.jpeg",
		"sales": 556
	}, {
		"id": "VpIwDJVa",
		"category": "衣柜",
		"style": "现代、简约、欧美",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_ou_2.jpeg",
		"sales": 621
	}, {
		"id": "HEoujCAf",
		"category": "衣柜",
		"style": "现代、欧美",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_ou_3.jpeg",
		"sales": 138
	}, {
		"id": "LUKDM8Np",
		"category": "衣柜",
		"style": "现代、轻奢、欧美",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_ou_4.jpeg",
		"sales": 124
	}, {
		"id": "gNJwwiE5",
		"category": "衣柜",
		"style": "现代、简约、欧美",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_ou_5.jpeg",
		"sales": 298
	}, {
		"id": "81kkOC43",
		"category": "衣柜",
		"style": "现代、欧美",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_ou_6.jpeg",
		"sales": 87
	}, {
		"id": "lRkhrFlh",
		"category": "衣柜",
		"style": "实木、欧美",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_shimu_1.jpeg",
		"sales": 35
	}, {
		"id": "1hPV4b6c",
		"category": "衣柜",
		"style": "实木、中式",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_shimu_2.jpeg",
		"sales": 41
	}, {
		"id": "yudTjKtR",
		"category": "衣柜",
		"style": "实木、中式、复古",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_shimu_3.jpeg",
		"sales": 111
	}, {
		"id": "ChIwGzXF",
		"category": "衣柜",
		"style": "实木、中式",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_shimu_4.jpeg",
		"sales": 53
	}, {
		"id": "Bmp1sSi9",
		"category": "衣柜",
		"style": "实木、中式",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_shimu_5.jpeg",
		"sales": 73
	}, {
		"id": "64D90gEg",
		"category": "衣柜",
		"style": "实木、中式、复古",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_shimu_6.jpeg",
		"sales": 150
	}, {
		"id": "ujgrJNna",
		"category": "衣柜",
		"style": "实木、中式",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_shimu_7.jpeg",
		"sales": 24
	}, {
		"id": "aNkStVAw",
		"category": "衣柜",
		"style": "实木、中式、商务",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_shimu_8.jpeg",
		"sales": 225
	}, {
		"id": "OgmaWobY",
		"category": "衣柜",
		"style": "实木、欧美、复古",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_shimu_9.jpeg",
		"sales": 11
	}, {
		"id": "SUfxDT4j",
		"category": "衣柜",
		"style": "实木、欧美、复古",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/wardrobe_shimu_10.jpeg",
		"sales": 9
	}],
	"kitchen": [{
		"id": "ECs7yXcx",
		"category": "厨柜",
		"style": "现代、简约",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/kitchen_1.jpeg",
		"sales": 882
	}, {
		"id": "kMWC0UHD",
		"category": "厨柜",
		"style": "现代、轻奢",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/kitchen_2.jpeg",
		"sales": 869
	}, {
		"id": "1okAw0Fa",
		"category": "厨柜",
		"style": "现代、简约",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/kitchen_3.jpeg",
		"sales": 925
	}, {
		"id": "Xd6LaXno",
		"category": "厨柜",
		"style": "现代、简约",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/kitchen_4.jpeg",
		"sales": 918
	}, {
		"id": "o7y29M3T",
		"category": "厨柜",
		"style": "现代、简约",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/kitchen_5.jpeg",
		"sales": 834
	}, {
		"id": "js1B7V3C",
		"category": "厨柜",
		"style": "现代、轻奢",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/kitchen_6.jpeg",
		"sales": 557
	}, {
		"id": "CHlpsUyY",
		"category": "厨柜",
		"style": "现代、简约",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/kitchen_7.jpeg",
		"sales": 656
	}, {
		"id": "Jogxiptb",
		"category": "厨柜",
		"style": "现代、欧美",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/kitchen_8.jpeg",
		"sales": 742
	}, {
		"id": "QIL4L7kF",
		"category": "厨柜",
		"style": "现代、欧美",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/kitchen_9.jpeg",
		"sales": 582
	}, {
		"id": "oJB1gN8Y",
		"category": "厨柜",
		"style": "现代、简约",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/kitchen_10.jpeg",
		"sales": 677
	}, {
		"id": "WvyxBqA6",
		"category": "厨柜",
		"style": "现代、简约",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/kitchen_11.jpeg",
		"sales": 443
	}, {
		"id": "WBzETEc0",
		"category": "厨柜",
		"style": "现代、轻奢",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/kitchen_12.jpeg",
		"sales": 347
	}, {
		"id": "cm46quis",
		"category": "厨柜",
		"style": "原木",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/kitchen_13.jpeg",
		"sales": 97
	}, {
		"id": "qLzDQ4FV",
		"category": "厨柜",
		"style": "原木、大气",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/kitchen_14.jpeg",
		"sales": 113
	}],
	"cabinet": [{
		"id": "YaYCMHwo",
		"category": "展示柜",
		"style": "轻奢、透亮、防尘",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/cabinet_1.jpeg",
		"sales": 967
	}, {
		"id": "5CVzpoR6",
		"category": "展示柜",
		"style": "实木、玻璃",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/cabinet_2.jpeg",
		"sales": 901
	}, {
		"id": "OTyNiAM6",
		"category": "展示柜",
		"style": "全方位、立体、透明",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/cabinet_3.jpeg",
		"sales": 964
	}, {
		"id": "fViucpnd",
		"category": "展示柜",
		"style": "轻奢、LED 灯",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/cabinet_4.jpeg",
		"sales": 892
	}, {
		"id": "QM3fDLUw",
		"category": "展示柜",
		"style": "温暖、舒适",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/cabinet_5.jpeg",
		"sales": 968
	}, {
		"id": "egG2qckX",
		"category": "展示柜",
		"style": "格调、时尚",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/cabinet_6.jpeg",
		"sales": 328
	}, {
		"id": "4mQIjgWA",
		"category": "展示柜",
		"style": "实木、小巧、原色",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/cabinet_7.jpeg",
		"sales": 136
	}, {
		"id": "JkBUP4xO",
		"category": "展示柜",
		"style": "稳重、优雅",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/cabinet_8.jpeg",
		"sales": 479
	}, {
		"id": "yDUaumqq",
		"category": "展示柜",
		"style": "虚实结合、镂空",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/cabinet_9.jpeg",
		"sales": 728
	}, {
		"id": "xhqJxGsI",
		"category": "展示柜",
		"style": "实木、古典、雕刻",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/cabinet_10.jpeg",
		"sales": 139
	}, {
		"id": "0Vouse5u",
		"category": "展示柜",
		"style": "虚实结合、镂空",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/cabinet_11.jpeg",
		"sales": 332
	}, {
		"id": "86lX1pEX",
		"category": "展示柜",
		"style": "简约、清新",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/cabinet_12.jpeg",
		"sales": 194
	}, {
		"id": "iSDzwwfC",
		"category": "展示柜",
		"style": "现代、素净、朦胧",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/cabinet_13.jpeg",
		"sales": 246
	}, {
		"id": "U85m5AmG",
		"category": "展示柜",
		"style": "实用、简单、置物",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/cabinet_14.jpeg",
		"sales": 56
	}, {
		"id": "SygR8h28",
		"category": "展示柜",
		"style": "现代、庄重、低调",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/cabinet_15.jpeg",
		"sales": 149
	}, {
		"id": "3eE7J71R",
		"category": "展示柜",
		"style": "简单、清新",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/cabinet_16.jpeg",
		"sales": 212
	}, {
		"id": "BXMlzY6Q",
		"category": "展示柜",
		"style": "轻奢、清新、拼色",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/cabinet_17.jpeg",
		"sales": 210
	}, {
		"id": "bITVrcWx",
		"category": "展示柜",
		"style": "简单、居家",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/cabinet_18.jpeg",
		"sales": 179
	}],
	"bed": [{
		"id": "zT77AJZF",
		"category": "床",
		"style": "温馨、舒适",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/bed_1.jpeg",
		"sales": 847
	}, {
		"id": "LMNO6Z7q",
		"category": "床",
		"style": "全包裹、布艺",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/bed_2.jpeg",
		"sales": 943
	}, {
		"id": "FnpW5iRL",
		"category": "床",
		"style": "实木、气质",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/bed_3.jpeg",
		"sales": 964
	}, {
		"id": "KuJfqELN",
		"category": "床",
		"style": "简约、清新",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/bed_4.jpeg",
		"sales": 867
	}, {
		"id": "8wy5x5Ib",
		"category": "床",
		"style": "真皮、大气",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/bed_5.jpeg",
		"sales": 862
	}, {
		"id": "uCVUGOWI",
		"category": "床",
		"style": "柔和、舒适、简约",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/bed_6.jpeg",
		"sales": 764
	}, {
		"id": "RmgHdCAW",
		"category": "床",
		"style": "简单、素净",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/bed_7.jpeg",
		"sales": 555
	}, {
		"id": "BbAXDlRi",
		"category": "床",
		"style": "实木、圆润",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/bed_8.jpeg",
		"sales": 345
	}, {
		"id": "tYIASPxR",
		"category": "床",
		"style": "实木、大气",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/bed_9.jpeg",
		"sales": 381
	}, {
		"id": "8LMY9GLe",
		"category": "床",
		"style": "实木、简单、原色",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/bed_10.jpeg",
		"sales": 351
	}, {
		"id": "jCklPWDr",
		"category": "床",
		"style": "真皮、欧美",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/bed_11.jpeg",
		"sales": 455
	}, {
		"id": "ZnRYKPt6",
		"category": "床",
		"style": "简单、可爱、单人",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/bed_12.jpeg",
		"sales": 81
	}],
	"sofa": [{
		"id": "mDr0RXbi",
		"category": "沙发",
		"style": "灰色、简约、布面",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/sofa_1.jpeg",
		"sales": 940
	}, {
		"id": "plbCnIyc",
		"category": "沙发",
		"style": "绒面、舒适",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/sofa_2.jpeg",
		"sales": 930
	}, {
		"id": "Pon17C1k",
		"category": "沙发",
		"style": "轻奢、皮面",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/sofa_3.jpeg",
		"sales": 863
	}, {
		"id": "SpGLGjea",
		"category": "沙发",
		"style": "简约、舒适",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/sofa_4.jpeg",
		"sales": 886
	}, {
		"id": "wNqXJalH",
		"category": "沙发",
		"style": "拼色、大气、商务",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/sofa_5.jpeg",
		"sales": 993
	}, {
		"id": "l0m7YqBF",
		"category": "沙发",
		"style": "简约、组合式",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/sofa_6.jpeg",
		"sales": 648
	}, {
		"id": "7GZbBsAh",
		"category": "沙发",
		"style": "简约、舒适",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/sofa_7.jpeg",
		"sales": 510
	}, {
		"id": "xi9fecXR",
		"category": "沙发",
		"style": "拼色、靓丽",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/sofa_8.jpeg",
		"sales": 481
	}, {
		"id": "wun4ljAP",
		"category": "沙发",
		"style": "简单、实木",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/sofa_9.jpeg",
		"sales": 156
	}, {
		"id": "rZJlr36s",
		"category": "沙发",
		"style": "简单、实木、稳重",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/sofa_10.jpeg",
		"sales": 220
	}, {
		"id": "ZzDa9GOX",
		"category": "沙发",
		"style": "实木、中式",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/sofa_11.jpeg",
		"sales": 444
	}],
	"coffeeTable": [{
		"id": "rSOP066S",
		"category": "茶几",
		"style": "拼色、时尚",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/coffeeTable_1.jpeg",
		"sales": 854
	}, {
		"id": "G8FsePwr",
		"category": "茶几",
		"style": "简约、时尚",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/coffeeTable_2.jpeg",
		"sales": 947
	}, {
		"id": "5tsPMvGj",
		"category": "茶几",
		"style": "简约、个性",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/coffeeTable_3.jpeg",
		"sales": 947
	}, {
		"id": "ceriw9OA",
		"category": "茶几",
		"style": "分层、实用",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/coffeeTable_4.jpeg",
		"sales": 816
	}, {
		"id": "JN6UPA58",
		"category": "茶几",
		"style": "组合、个性",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/coffeeTable_5.jpeg",
		"sales": 944
	}, {
		"id": "etrjZaSf",
		"category": "茶几",
		"style": "简单、木质",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/coffeeTable_6.jpeg",
		"sales": 480
	}, {
		"id": "ghkok9hB",
		"category": "茶几",
		"style": "简约、时尚",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/coffeeTable_7.jpeg",
		"sales": 582
	}, {
		"id": "q1HCoC4k",
		"category": "茶几",
		"style": "简约、清新、时尚",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/coffeeTable_8.jpeg",
		"sales": 465
	}, {
		"id": "QxS5s8xH",
		"category": "茶几",
		"style": "简约、时尚",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/coffeeTable_9.jpeg",
		"sales": 564
	}, {
		"id": "FoDeDtVJ",
		"category": "茶几",
		"style": "简约、个性",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/coffeeTable_10.jpeg",
		"sales": 700
	}, {
		"id": "ofJVwpvf",
		"category": "茶几",
		"style": "组合、个性",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/coffeeTable_12.jpeg",
		"sales": 778
	}, {
		"id": "8Uo4rSTv",
		"category": "茶几",
		"style": "实木",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/coffeeTable_11.jpeg",
		"sales": 111
	}],
	"table": [{
		"id": "jMNnLdnM",
		"category": "桌椅",
		"style": "实木、原色",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/table_1.jpeg",
		"sales": 256
	}, {
		"id": "MflpVppp",
		"category": "桌椅",
		"style": "实木、大气",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/table_2.jpeg",
		"sales": 310
	}, {
		"id": "Irk3jzaf",
		"category": "桌椅",
		"style": "实木、简约",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/table_3.jpeg",
		"sales": 225
	}, {
		"id": "989U96CX",
		"category": "桌椅",
		"style": "实木",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/table_4.jpeg",
		"sales": 540
	}, {
		"id": "YBodPUSU",
		"category": "桌椅",
		"style": "实木、旋转",
		"price": "价格可议",
		"image": "https://www.aireadall.com/furniture/category/table_5.jpeg",
		"sales": 702
	}]
};

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState('wardrobe');

  useEffect(() => {
    const params = Taro.getCurrentInstance().router.params
    if (params.kind) {
      setSelectedCategory(params.kind)
    }
  }, [])

  const handleProductClick = (product) => {
    const productStr = encodeURIComponent(JSON.stringify(product));
    Taro.navigateTo({
      url: `/pages/detail/index?product=${productStr}`
    });
  };

  return (
    <View className='furniture-category'>
      <View className='banner'>
        <Image src='https://www.aireadall.com/furniture/category/banner_home.jpeg' mode='aspectFill' className='banner-image' />
        <View className='banner-text'>全屋订制，应有尽有</View>
      </View>
      <View className='content'>
        <View className='category-menu'>
          <ScrollView scrollY className='menu-scroll'>
            {categories.map((category) => (
              <View
                key={category.key}
                className={`menu-item ${selectedCategory === category.key ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.key)}
              >
                <Text className='menu-text'>{category.label}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View className='product-list'>
          <ScrollView scrollY className='product-scroll'>
            <View className='product-grid'>
              {mockProducts[selectedCategory]?.map((product) => (
                <View
                  key={product.id}
                  className='product-card'
                  onClick={() => handleProductClick(product)}
                >
                  <Image src={product.image} mode='aspectFill' className='product-image' />
                  <View className='product-info'>
                    <View className='product-style'>
                      {product.style?.split('、').map((item, index) => (
                        <View className='product-style-item' key={index}>{item}</View>
                      ))}
                    </View>
                    <View className='product-price-row'>
                      <View className='price-view'>
                        <Text className='product-old'>¥XXXX</Text>
                        <Text className='product-price'>{product.price}</Text>
                      </View>
                      <Text className='product-sales'>人气 {product.sales}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
            <View className='product-load-more'>
              <Text className='product-load-more-text'>想了解更多产品信息，请直接联系厂家</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Category;
