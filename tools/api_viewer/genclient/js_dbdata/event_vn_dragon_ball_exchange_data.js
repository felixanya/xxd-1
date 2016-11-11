var event_vn_dragon_ball_exchange_data = {
		/**
	 * 0 : id, smallint, 兑换物品标识
	 * 1 : quality, tinyint, 品质
	 * 2 : name, varchar, 名称
	 * 3 : desc, varchar, 描述
	 * 4 : sign, varchar, 资源标识
	 * 5 : tips, text, 兑换物品tips
	 * 6 : relative_event, smallint, 相关联活动 
	 */

	Id : 0,
	Quality : 1,
	Name : 2,
	Desc : 3,
	Sign : 4,
	Tips : 5,
	Relative_event : 6,

	Each: function(cb) {
		for(var i = 0; i < this._list.length; i++) {
			cb(this._list[i]);
		}
	},

	_list: [
		[1 /*[0]*/, 2 /*[1]*/, "大铜钱袋" /*[2]*/, "需神、龙、降、世龙珠" /*[3]*/, "DaTongQianDai" /*[4]*/, "开启可获得5万铜钱" /*[5]*/, 0 /*[6]*/],
		[2 /*[0]*/, 2 /*[1]*/, "茶叶蛋" /*[2]*/, "需任意一颗龙珠" /*[3]*/, "ChaYeDan" /*[4]*/, "加茶叶与佐料煮的鸡蛋，可以恢复5点体力" /*[5]*/, 0 /*[6]*/],
		[3 /*[0]*/, 3 /*[1]*/, "魂侍碎片(第六天魔王)" /*[2]*/, "需集齐5颗龙珠" /*[3]*/, "ZhiTianXinChang" /*[4]*/, "收集10个魂侍碎片，可以召唤第六天魔王。同时也是第六天魔王进阶的必备材料" /*[5]*/, 0 /*[6]*/],
		[4 /*[0]*/, 3 /*[1]*/, "鸡腿" /*[2]*/, "需收集10张越南国旗" /*[3]*/, "JiTui" /*[4]*/, "仙灵权贵旅途居家必备闲食，可以恢复20点体力" /*[5]*/, 1 /*[6]*/],
		[5 /*[0]*/, 2 /*[1]*/, "铜钱袋" /*[2]*/, "需收集15张越南国旗" /*[3]*/, "TongQianDai" /*[4]*/, "开启可获得25000铜钱" /*[5]*/, 1 /*[6]*/],
		[6 /*[0]*/, 3 /*[1]*/, "星辉·龙珠" /*[2]*/, "需收集100张越南国旗" /*[3]*/, "XingHuiLongZhu" /*[4]*/, "集齐七颗星辉·龙珠，可随机获得一件月影·天诛装备" /*[5]*/, 1 /*[6]*/],
		[7 /*[0]*/, 3 /*[1]*/, "月影·龙珠" /*[2]*/, "需收集300张越南国旗" /*[3]*/, "YueYingLongZhu" /*[4]*/, "集齐七颗月影·龙珠，可随机获得一件日耀·天诛装备" /*[5]*/, 1 /*[6]*/],
		[8 /*[0]*/, 3 /*[1]*/, "日耀·龙珠" /*[2]*/, "需收集500张越南国旗" /*[3]*/, "RiYaoLongZhu" /*[4]*/, "集齐七颗日耀·龙珠，可随机获得一件混元装备" /*[5]*/, 1 /*[6]*/],
		[9 /*[0]*/, 3 /*[1]*/, "糯米饼" /*[2]*/, "需收集2份面粉、2份绿豆" /*[3]*/, "NuoMiBing" /*[4]*/, "精美的中秋节点心，使用可恢复30点体力" /*[5]*/, 2 /*[6]*/],
		[10 /*[0]*/, 2 /*[1]*/, "馅饼" /*[2]*/, "需收集2份面粉、1份鸡蛋、2份猪肉" /*[3]*/, "XianBing" /*[4]*/, "精美的中秋节点心，使用可获得5万铜钱" /*[5]*/, 2 /*[6]*/],
		[11 /*[0]*/, 3 /*[1]*/, "月饼礼盒" /*[2]*/, "需收集10份面粉、2份绿豆、2份鸡蛋、5份猪肉" /*[3]*/, "YueBingLiHe" /*[4]*/, "精美的中秋节月饼礼盒，可兑换极品奖励" /*[5]*/, 2 /*[6]*/],
		[12 /*[0]*/, 2 /*[1]*/, "梦灵" /*[2]*/, "需收集4份月饼礼盒" /*[3]*/, "MengLing" /*[4]*/, "京城结社护灵之一，外表阴柔，对付敌人时却毫不留情" /*[5]*/, 2 /*[6]*/],
		[13 /*[0]*/, 2 /*[1]*/, "茶叶蛋" /*[2]*/, "需任意一颗龙珠" /*[3]*/, "ChaYeDan" /*[4]*/, "" /*[5]*/, 3 /*[6]*/],
		[14 /*[0]*/, 2 /*[1]*/, "大铜钱袋" /*[2]*/, "需金、猴、献、礼 龙珠各1个" /*[3]*/, "DaTongQianDai" /*[4]*/, "" /*[5]*/, 3 /*[6]*/],
		[15 /*[0]*/, 3 /*[1]*/, "喜好品随机礼盒" /*[2]*/, "需金、猴、献、礼 龙珠各5个" /*[3]*/, "XiHaoPinSuiJiLiHe" /*[4]*/, "" /*[5]*/, 3 /*[6]*/],
		[16 /*[0]*/, 3 /*[1]*/, "金色魂侍碎片随机礼盒" /*[2]*/, "需金、猴、献、礼 龙珠各10个" /*[3]*/, "JinSeHunShiSuiPianSuiJiLiHe" /*[4]*/, "" /*[5]*/, 3 /*[6]*/]
	],
};
