var town_npc_item_data = {
		/**
	 * 0 : id, int, ID
	 * 1 : town_npc_id, int, 城镇NPC ID
	 * 2 : item_id, smallint, 物品ID
	 * 3 : stock, smallint, 库存
	 * 4 : vip, tinyint, vip特供，1表示vip 
	 */

	Id : 0,
	Town_npc_id : 1,
	Item_id : 2,
	Stock : 3,
	Vip : 4,

	Each: function(cb) {
		for(var i = 0; i < this._list.length; i++) {
			cb(this._list[i]);
		}
	},

	_list: [
		[2 /*[0]*/, 3 /*[1]*/, 209 /*[2]*/, 3 /*[3]*/, 0 /*[4]*/],
		[8 /*[0]*/, 10 /*[1]*/, 209 /*[2]*/, 3 /*[3]*/, 0 /*[4]*/],
		[11 /*[0]*/, 10 /*[1]*/, 213 /*[2]*/, 1 /*[3]*/, 0 /*[4]*/],
		[13 /*[0]*/, 37 /*[1]*/, 209 /*[2]*/, 5 /*[3]*/, 0 /*[4]*/],
		[14 /*[0]*/, 37 /*[1]*/, 213 /*[2]*/, 1 /*[3]*/, 0 /*[4]*/],
		[15 /*[0]*/, 37 /*[1]*/, 250 /*[2]*/, 5 /*[3]*/, 0 /*[4]*/],
		[18 /*[0]*/, 49 /*[1]*/, 213 /*[2]*/, 1 /*[3]*/, 0 /*[4]*/],
		[19 /*[0]*/, 49 /*[1]*/, 250 /*[2]*/, 5 /*[3]*/, 0 /*[4]*/],
		[20 /*[0]*/, 49 /*[1]*/, 210 /*[2]*/, 3 /*[3]*/, 0 /*[4]*/],
		[22 /*[0]*/, 59 /*[1]*/, 250 /*[2]*/, 5 /*[3]*/, 0 /*[4]*/],
		[23 /*[0]*/, 59 /*[1]*/, 210 /*[2]*/, 3 /*[3]*/, 0 /*[4]*/],
		[25 /*[0]*/, 59 /*[1]*/, 214 /*[2]*/, 1 /*[3]*/, 0 /*[4]*/],
		[27 /*[0]*/, 69 /*[1]*/, 250 /*[2]*/, 5 /*[3]*/, 0 /*[4]*/],
		[29 /*[0]*/, 69 /*[1]*/, 210 /*[2]*/, 3 /*[3]*/, 0 /*[4]*/],
		[31 /*[0]*/, 69 /*[1]*/, 214 /*[2]*/, 1 /*[3]*/, 0 /*[4]*/],
		[32 /*[0]*/, 10 /*[1]*/, 250 /*[2]*/, 5 /*[3]*/, 0 /*[4]*/],
		[33 /*[0]*/, 3 /*[1]*/, 36 /*[2]*/, 10 /*[3]*/, 0 /*[4]*/],
		[34 /*[0]*/, 3 /*[1]*/, 37 /*[2]*/, 10 /*[3]*/, 0 /*[4]*/],
		[35 /*[0]*/, 3 /*[1]*/, 38 /*[2]*/, 10 /*[3]*/, 0 /*[4]*/],
		[36 /*[0]*/, 3 /*[1]*/, 34 /*[2]*/, 10 /*[3]*/, 0 /*[4]*/],
		[37 /*[0]*/, 100 /*[1]*/, 250 /*[2]*/, 5 /*[3]*/, 0 /*[4]*/],
		[38 /*[0]*/, 100 /*[1]*/, 210 /*[2]*/, 3 /*[3]*/, 0 /*[4]*/],
		[39 /*[0]*/, 100 /*[1]*/, 214 /*[2]*/, 1 /*[3]*/, 0 /*[4]*/],
		[40 /*[0]*/, 3 /*[1]*/, 31 /*[2]*/, 10 /*[3]*/, 0 /*[4]*/],
		[41 /*[0]*/, 3 /*[1]*/, 32 /*[2]*/, 10 /*[3]*/, 0 /*[4]*/],
		[42 /*[0]*/, 3 /*[1]*/, 33 /*[2]*/, 10 /*[3]*/, 0 /*[4]*/],
		[43 /*[0]*/, 3 /*[1]*/, 35 /*[2]*/, 10 /*[3]*/, 0 /*[4]*/],
		[44 /*[0]*/, 117 /*[1]*/, 211 /*[2]*/, 3 /*[3]*/, 0 /*[4]*/],
		[45 /*[0]*/, 117 /*[1]*/, 250 /*[2]*/, 5 /*[3]*/, 0 /*[4]*/],
		[46 /*[0]*/, 117 /*[1]*/, 214 /*[2]*/, 1 /*[3]*/, 0 /*[4]*/],
		[47 /*[0]*/, 135 /*[1]*/, 211 /*[2]*/, 3 /*[3]*/, 0 /*[4]*/],
		[48 /*[0]*/, 135 /*[1]*/, 250 /*[2]*/, 5 /*[3]*/, 0 /*[4]*/],
		[49 /*[0]*/, 135 /*[1]*/, 214 /*[2]*/, 1 /*[3]*/, 0 /*[4]*/]
	],
};
