var battle_pet_skill_training_data = {
		/**
	 * 0 : id, smallint, ID
	 * 1 : level, int, 技能等级
	 * 2 : cost_coins, bigint, 升出本等级所需金币数 
	 */

	Id : 0,
	Level : 1,
	Cost_coins : 2,

	Each: function(cb) {
		for(var i = 0; i < this._list.length; i++) {
			cb(this._list[i]);
		}
	},

	_list: [
		[1001 /*[0]*/, 1 /*[1]*/, 1000 /*[2]*/],
		[1002 /*[0]*/, 2 /*[1]*/, 1300 /*[2]*/],
		[1003 /*[0]*/, 3 /*[1]*/, 1600 /*[2]*/],
		[1004 /*[0]*/, 4 /*[1]*/, 1900 /*[2]*/],
		[1005 /*[0]*/, 5 /*[1]*/, 2200 /*[2]*/],
		[1006 /*[0]*/, 6 /*[1]*/, 2500 /*[2]*/],
		[1007 /*[0]*/, 7 /*[1]*/, 2800 /*[2]*/],
		[1008 /*[0]*/, 8 /*[1]*/, 3100 /*[2]*/],
		[1009 /*[0]*/, 9 /*[1]*/, 3400 /*[2]*/],
		[1010 /*[0]*/, 10 /*[1]*/, 3700 /*[2]*/],
		[1011 /*[0]*/, 11 /*[1]*/, 4000 /*[2]*/],
		[1012 /*[0]*/, 12 /*[1]*/, 4300 /*[2]*/],
		[1013 /*[0]*/, 13 /*[1]*/, 4600 /*[2]*/],
		[1014 /*[0]*/, 14 /*[1]*/, 4900 /*[2]*/],
		[1015 /*[0]*/, 15 /*[1]*/, 5200 /*[2]*/],
		[1016 /*[0]*/, 16 /*[1]*/, 5500 /*[2]*/],
		[1017 /*[0]*/, 17 /*[1]*/, 5800 /*[2]*/],
		[1018 /*[0]*/, 18 /*[1]*/, 6100 /*[2]*/],
		[1019 /*[0]*/, 19 /*[1]*/, 6400 /*[2]*/],
		[1020 /*[0]*/, 20 /*[1]*/, 6700 /*[2]*/],
		[1021 /*[0]*/, 21 /*[1]*/, 7000 /*[2]*/],
		[1022 /*[0]*/, 22 /*[1]*/, 7300 /*[2]*/],
		[1023 /*[0]*/, 23 /*[1]*/, 7600 /*[2]*/],
		[1024 /*[0]*/, 24 /*[1]*/, 7900 /*[2]*/],
		[1025 /*[0]*/, 25 /*[1]*/, 8200 /*[2]*/],
		[1026 /*[0]*/, 26 /*[1]*/, 8500 /*[2]*/],
		[1027 /*[0]*/, 27 /*[1]*/, 8800 /*[2]*/],
		[1028 /*[0]*/, 28 /*[1]*/, 9100 /*[2]*/],
		[1029 /*[0]*/, 29 /*[1]*/, 9400 /*[2]*/],
		[1030 /*[0]*/, 30 /*[1]*/, 9700 /*[2]*/],
		[1031 /*[0]*/, 31 /*[1]*/, 10000 /*[2]*/],
		[1032 /*[0]*/, 32 /*[1]*/, 10300 /*[2]*/],
		[1033 /*[0]*/, 33 /*[1]*/, 10600 /*[2]*/],
		[1034 /*[0]*/, 34 /*[1]*/, 10900 /*[2]*/],
		[1035 /*[0]*/, 35 /*[1]*/, 11200 /*[2]*/],
		[1036 /*[0]*/, 36 /*[1]*/, 11500 /*[2]*/],
		[1037 /*[0]*/, 37 /*[1]*/, 11800 /*[2]*/],
		[1038 /*[0]*/, 38 /*[1]*/, 12100 /*[2]*/],
		[1039 /*[0]*/, 39 /*[1]*/, 12400 /*[2]*/],
		[1040 /*[0]*/, 40 /*[1]*/, 12700 /*[2]*/],
		[1041 /*[0]*/, 41 /*[1]*/, 13000 /*[2]*/],
		[1042 /*[0]*/, 42 /*[1]*/, 13300 /*[2]*/],
		[1043 /*[0]*/, 43 /*[1]*/, 13600 /*[2]*/],
		[1044 /*[0]*/, 44 /*[1]*/, 13900 /*[2]*/],
		[1045 /*[0]*/, 45 /*[1]*/, 14200 /*[2]*/],
		[1046 /*[0]*/, 46 /*[1]*/, 14500 /*[2]*/],
		[1047 /*[0]*/, 47 /*[1]*/, 14800 /*[2]*/],
		[1048 /*[0]*/, 48 /*[1]*/, 15100 /*[2]*/],
		[1049 /*[0]*/, 49 /*[1]*/, 15400 /*[2]*/],
		[1050 /*[0]*/, 50 /*[1]*/, 15700 /*[2]*/],
		[1051 /*[0]*/, 51 /*[1]*/, 16000 /*[2]*/],
		[1052 /*[0]*/, 52 /*[1]*/, 16300 /*[2]*/],
		[1053 /*[0]*/, 53 /*[1]*/, 16600 /*[2]*/],
		[1054 /*[0]*/, 54 /*[1]*/, 16900 /*[2]*/],
		[1055 /*[0]*/, 55 /*[1]*/, 17200 /*[2]*/],
		[1056 /*[0]*/, 56 /*[1]*/, 17500 /*[2]*/],
		[1057 /*[0]*/, 57 /*[1]*/, 17800 /*[2]*/],
		[1058 /*[0]*/, 58 /*[1]*/, 18100 /*[2]*/],
		[1059 /*[0]*/, 59 /*[1]*/, 18400 /*[2]*/],
		[1060 /*[0]*/, 60 /*[1]*/, 18700 /*[2]*/],
		[1061 /*[0]*/, 61 /*[1]*/, 19000 /*[2]*/],
		[1062 /*[0]*/, 62 /*[1]*/, 19300 /*[2]*/],
		[1063 /*[0]*/, 63 /*[1]*/, 19600 /*[2]*/],
		[1064 /*[0]*/, 64 /*[1]*/, 19900 /*[2]*/],
		[1065 /*[0]*/, 65 /*[1]*/, 20200 /*[2]*/],
		[1066 /*[0]*/, 66 /*[1]*/, 20500 /*[2]*/],
		[1067 /*[0]*/, 67 /*[1]*/, 20800 /*[2]*/],
		[1068 /*[0]*/, 68 /*[1]*/, 21100 /*[2]*/],
		[1069 /*[0]*/, 69 /*[1]*/, 21400 /*[2]*/],
		[1070 /*[0]*/, 70 /*[1]*/, 21700 /*[2]*/],
		[1071 /*[0]*/, 71 /*[1]*/, 22000 /*[2]*/],
		[1072 /*[0]*/, 72 /*[1]*/, 22300 /*[2]*/],
		[1073 /*[0]*/, 73 /*[1]*/, 22600 /*[2]*/],
		[1074 /*[0]*/, 74 /*[1]*/, 22900 /*[2]*/],
		[1075 /*[0]*/, 75 /*[1]*/, 23200 /*[2]*/],
		[1076 /*[0]*/, 76 /*[1]*/, 23500 /*[2]*/],
		[1077 /*[0]*/, 77 /*[1]*/, 23800 /*[2]*/],
		[1078 /*[0]*/, 78 /*[1]*/, 24100 /*[2]*/],
		[1079 /*[0]*/, 79 /*[1]*/, 24400 /*[2]*/],
		[1080 /*[0]*/, 80 /*[1]*/, 24700 /*[2]*/],
		[1081 /*[0]*/, 81 /*[1]*/, 25000 /*[2]*/],
		[1082 /*[0]*/, 82 /*[1]*/, 25300 /*[2]*/],
		[1083 /*[0]*/, 83 /*[1]*/, 25600 /*[2]*/],
		[1084 /*[0]*/, 84 /*[1]*/, 25900 /*[2]*/],
		[1085 /*[0]*/, 85 /*[1]*/, 26200 /*[2]*/],
		[1086 /*[0]*/, 86 /*[1]*/, 26500 /*[2]*/],
		[1087 /*[0]*/, 87 /*[1]*/, 26800 /*[2]*/],
		[1088 /*[0]*/, 88 /*[1]*/, 27100 /*[2]*/],
		[1089 /*[0]*/, 89 /*[1]*/, 27400 /*[2]*/],
		[1090 /*[0]*/, 90 /*[1]*/, 27700 /*[2]*/],
		[1091 /*[0]*/, 91 /*[1]*/, 28000 /*[2]*/],
		[1092 /*[0]*/, 92 /*[1]*/, 28300 /*[2]*/],
		[1093 /*[0]*/, 93 /*[1]*/, 28600 /*[2]*/],
		[1094 /*[0]*/, 94 /*[1]*/, 28900 /*[2]*/],
		[1095 /*[0]*/, 95 /*[1]*/, 29200 /*[2]*/],
		[1096 /*[0]*/, 96 /*[1]*/, 29500 /*[2]*/],
		[1097 /*[0]*/, 97 /*[1]*/, 29800 /*[2]*/],
		[1098 /*[0]*/, 98 /*[1]*/, 30100 /*[2]*/],
		[1099 /*[0]*/, 99 /*[1]*/, 30400 /*[2]*/],
		[1100 /*[0]*/, 100 /*[1]*/, 30700 /*[2]*/]
	],
};
