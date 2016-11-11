var clique_center_building_level_info_data = {
		/**
	 * 0 : id, int, ID
	 * 1 : level, smallint, 等级
	 * 2 : max_member, smallint, 成员数量
	 * 3 : levelup_coins, bigint, 升级消耗金钱
	 * 4 : daily_max_coins, bigint, 每日贡献上限
	 * 5 : desc, text, 对应等级描述
	 * 6 : cur_level_desc, text, 当前总舵描述
	 * 7 : next_level_desc, text, 下一等级总舵描述 
	 */

	Id : 0,
	Level : 1,
	Max_member : 2,
	Levelup_coins : 3,
	Daily_max_coins : 4,
	Desc : 5,
	Cur_level_desc : 6,
	Next_level_desc : 7,

	Each: function(cb) {
		for(var i = 0; i < this._list.length; i++) {
			cb(this._list[i]);
		}
	},

	_list: [
		[1 /*[0]*/, 1 /*[1]*/, 20 /*[2]*/, 1000000 /*[3]*/, 100000 /*[4]*/, "帮派的中心，控制整个帮派的发展\n帮众上限20人，每日捐献上限100000" /*[5]*/, "帮众上限20人，每日捐献上限100000" /*[6]*/, "帮众上限22人，每日捐献上限130000" /*[7]*/],
		[2 /*[0]*/, 2 /*[1]*/, 22 /*[2]*/, 1200000 /*[3]*/, 130000 /*[4]*/, "帮派的中心，控制整个帮派的发展\n帮众上限22人，每日捐献上限130000" /*[5]*/, "帮众上限22人，每日捐献上限130000" /*[6]*/, "帮众上限24人，每日捐献上限160000" /*[7]*/],
		[3 /*[0]*/, 3 /*[1]*/, 24 /*[2]*/, 1600000 /*[3]*/, 160000 /*[4]*/, "帮派的中心，控制整个帮派的发展\n帮众上限24人，每日捐献上限160000" /*[5]*/, "帮众上限24人，每日捐献上限160000" /*[6]*/, "帮众上限26人，每日捐献上限190000" /*[7]*/],
		[4 /*[0]*/, 4 /*[1]*/, 26 /*[2]*/, 2000000 /*[3]*/, 190000 /*[4]*/, "帮派的中心，控制整个帮派的发展\n帮众上限26人，每日捐献上限190000" /*[5]*/, "帮众上限26人，每日捐献上限190000" /*[6]*/, "帮众上限28人，每日捐献上限220000" /*[7]*/],
		[5 /*[0]*/, 5 /*[1]*/, 28 /*[2]*/, 2400000 /*[3]*/, 220000 /*[4]*/, "帮派的中心，控制整个帮派的发展\n帮众上限28人，每日捐献上限220000" /*[5]*/, "帮众上限28人，每日捐献上限220000" /*[6]*/, "帮众上限30人，每日捐献上限250000" /*[7]*/],
		[6 /*[0]*/, 6 /*[1]*/, 30 /*[2]*/, 2800000 /*[3]*/, 250000 /*[4]*/, "帮派的中心，控制整个帮派的发展\n帮众上限30人，每日捐献上限250000" /*[5]*/, "帮众上限30人，每日捐献上限250000" /*[6]*/, "帮众上限32人，每日捐献上限280000" /*[7]*/],
		[7 /*[0]*/, 7 /*[1]*/, 32 /*[2]*/, 3200000 /*[3]*/, 280000 /*[4]*/, "帮派的中心，控制整个帮派的发展\n帮众上限32人，每日捐献上限280000" /*[5]*/, "帮众上限32人，每日捐献上限280000" /*[6]*/, "帮众上限34人，每日捐献上限310000" /*[7]*/],
		[8 /*[0]*/, 8 /*[1]*/, 34 /*[2]*/, 6000000 /*[3]*/, 310000 /*[4]*/, "帮派的中心，控制整个帮派的发展\n帮众上限34人，每日捐献上限310000" /*[5]*/, "帮众上限34人，每日捐献上限310000" /*[6]*/, "帮众上限36人，每日捐献上限340000" /*[7]*/],
		[9 /*[0]*/, 9 /*[1]*/, 36 /*[2]*/, 8000000 /*[3]*/, 340000 /*[4]*/, "帮派的中心，控制整个帮派的发展\n帮众上限36人，每日捐献上限340000" /*[5]*/, "帮众上限36人，每日捐献上限340000" /*[6]*/, "帮众上限38人，每日捐献上限370000" /*[7]*/],
		[10 /*[0]*/, 10 /*[1]*/, 38 /*[2]*/, 10000000 /*[3]*/, 370000 /*[4]*/, "帮派的中心，控制整个帮派的发展\n帮众上限38人，每日捐献上限370000" /*[5]*/, "帮众上限38人，每日捐献上限370000" /*[6]*/, "帮众上限39人，每日捐献上限400000" /*[7]*/],
		[11 /*[0]*/, 11 /*[1]*/, 39 /*[2]*/, 12000000 /*[3]*/, 400000 /*[4]*/, "帮派的中心，控制整个帮派的发展\n帮众上限39人，每日捐献上限400000" /*[5]*/, "帮众上限39人，每日捐献上限400000" /*[6]*/, "帮众上限40人，每日捐献上限400000" /*[7]*/],
		[12 /*[0]*/, 12 /*[1]*/, 40 /*[2]*/, 0 /*[3]*/, 400000 /*[4]*/, "帮派的中心，控制整个帮派的发展\n帮众上限40人，每日捐献上限400000" /*[5]*/, "帮众上限40人，每日捐献上限400000" /*[6]*/, "无" /*[7]*/]
	],
};
