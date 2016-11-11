var buddy_cooperation_data = {
		/**
	 * 0 : id, smallint, ID
	 * 1 : name, varchar, 组合名
	 * 2 : desc, varchar, 描述
	 * 3 : require_friendship_level, smallint, 要求羁绊等级
	 * 4 : role_id1, tinyint, 伙伴1
	 * 5 : role_id2, tinyint, 伙伴2
	 * 6 : health, int, 生命 - health
	 * 7 : attack, int, 普攻 - attack
	 * 8 : defence, int, 普防 - defence
	 * 9 : skill_level, int, 技能熟练度
	 * 10 : speed, int, 速度
	 * 11 : cultivation, int, 内力
	 * 12 : sunder, int, 护甲
	 * 13 : dodge_level, int, 闪避等级
	 * 14 : hit_level, int, 命中等级
	 * 15 : block_level, int, 格挡等级
	 * 16 : tenacity_level, int, 韧性等级
	 * 17 : destroy_level, int, 破击等级
	 * 18 : critical_level, int, 暴击等级
	 * 19 : critical_hurt_level, int, 必杀等级
	 * 20 : ghost_power, int, 初始魂力 
	 */

	Id : 0,
	Name : 1,
	Desc : 2,
	Require_friendship_level : 3,
	Role_id1 : 4,
	Role_id2 : 5,
	Health : 6,
	Attack : 7,
	Defence : 8,
	Skill_level : 9,
	Speed : 10,
	Cultivation : 11,
	Sunder : 12,
	Dodge_level : 13,
	Hit_level : 14,
	Block_level : 15,
	Tenacity_level : 16,
	Destroy_level : 17,
	Critical_level : 18,
	Critical_hurt_level : 19,
	Ghost_power : 20,

	Each: function(cb) {
		for(var i = 0; i < this._list.length; i++) {
			cb(this._list[i]);
		}
	},

	_list: [
		[1 /*[0]*/, "侠道双娇" /*[1]*/, "朱媛媛与车晓芸同时上阵时，各增加500攻击、500防御。战斗时，提升绝招熟练度20级。" /*[2]*/, 2 /*[3]*/, 4 /*[4]*/, 5 /*[5]*/, 0 /*[6]*/, 500 /*[7]*/, 500 /*[8]*/, 20 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 0 /*[18]*/, 0 /*[19]*/, 0 /*[20]*/],
		[2 /*[0]*/, "酒国基友" /*[1]*/, "袁铭志与燕无名同时上阵时，各增加200闪避、200暴击。战斗时，提升绝招熟练度20级。" /*[2]*/, 3 /*[3]*/, 3 /*[4]*/, 6 /*[5]*/, 0 /*[6]*/, 0 /*[7]*/, 0 /*[8]*/, 20 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 200 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 200 /*[18]*/, 0 /*[19]*/, 0 /*[20]*/],
		[3 /*[0]*/, "萝莉大叔" /*[1]*/, "车晓芸与燕无名同时上阵时，各增加5000生命。战斗时，提升绝招熟练度20级。" /*[2]*/, 4 /*[3]*/, 5 /*[4]*/, 6 /*[5]*/, 5000 /*[6]*/, 0 /*[7]*/, 0 /*[8]*/, 20 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 0 /*[18]*/, 0 /*[19]*/, 0 /*[20]*/],
		[4 /*[0]*/, "月下美人" /*[1]*/, "燕无名与胧月同时上阵时，各增加1000速度。战斗时，提升绝招熟练度20级。" /*[2]*/, 4 /*[3]*/, 6 /*[4]*/, 7 /*[5]*/, 0 /*[6]*/, 0 /*[7]*/, 0 /*[8]*/, 20 /*[9]*/, 1000 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 0 /*[18]*/, 0 /*[19]*/, 0 /*[20]*/],
		[5 /*[0]*/, "刀客无双" /*[1]*/, "胧月与袁铭志同时上阵时，各增加2000攻击。战斗时，提升绝招熟练度20级。" /*[2]*/, 5 /*[3]*/, 7 /*[4]*/, 3 /*[5]*/, 0 /*[6]*/, 2000 /*[7]*/, 0 /*[8]*/, 20 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 0 /*[18]*/, 0 /*[19]*/, 0 /*[20]*/],
		[6 /*[0]*/, "铜墙铁壁" /*[1]*/, "慧明与陈阿明同时上阵时，各增加1000防御。战斗时，提升绝招熟练度20级。" /*[2]*/, 5 /*[3]*/, 8 /*[4]*/, 9 /*[5]*/, 0 /*[6]*/, 0 /*[7]*/, 1000 /*[8]*/, 20 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 0 /*[18]*/, 0 /*[19]*/, 0 /*[20]*/],
		[7 /*[0]*/, "道法自然" /*[1]*/, "陈阿明与朱媛媛同时上阵时，各增加2000内力。战斗时，提升绝招熟练度20级。" /*[2]*/, 6 /*[3]*/, 9 /*[4]*/, 4 /*[5]*/, 0 /*[6]*/, 0 /*[7]*/, 0 /*[8]*/, 20 /*[9]*/, 0 /*[10]*/, 2000 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 0 /*[18]*/, 0 /*[19]*/, 0 /*[20]*/],
		[8 /*[0]*/, "奇门遁甲" /*[1]*/, "姬霜与唐卿同时上阵时，各增加200闪避、400格挡。战斗时，提升绝招熟练度20级。" /*[2]*/, 6 /*[3]*/, 10 /*[4]*/, 11 /*[5]*/, 0 /*[6]*/, 0 /*[7]*/, 0 /*[8]*/, 20 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 200 /*[13]*/, 0 /*[14]*/, 400 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 0 /*[18]*/, 0 /*[19]*/, 0 /*[20]*/],
		[9 /*[0]*/, "黑夜之拥" /*[1]*/, "唐卿与胧月同时上阵时，各增加400暴击、200必杀。战斗时，提升绝招熟练度20级。" /*[2]*/, 6 /*[3]*/, 11 /*[4]*/, 7 /*[5]*/, 0 /*[6]*/, 0 /*[7]*/, 0 /*[8]*/, 20 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 400 /*[18]*/, 200 /*[19]*/, 0 /*[20]*/],
		[10 /*[0]*/, "天道行者" /*[1]*/, "荧惑与慧明同时上阵时，魂力初始100。战斗时，提升绝招熟练度20级。" /*[2]*/, 7 /*[3]*/, 12 /*[4]*/, 8 /*[5]*/, 0 /*[6]*/, 0 /*[7]*/, 0 /*[8]*/, 20 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 0 /*[18]*/, 0 /*[19]*/, 100 /*[20]*/],
		[11 /*[0]*/, "凛若冰霜" /*[1]*/, "木听涛与姬霜同时上阵时，各增加5000生命、2000内力。战斗时，提升绝招熟练度20级。" /*[2]*/, 7 /*[3]*/, 16 /*[4]*/, 10 /*[5]*/, 5000 /*[6]*/, 0 /*[7]*/, 0 /*[8]*/, 20 /*[9]*/, 0 /*[10]*/, 2000 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 0 /*[17]*/, 0 /*[18]*/, 0 /*[19]*/, 0 /*[20]*/],
		[12 /*[0]*/, "大巧不工" /*[1]*/, "戴云杰与陈阿明同时上阵时，各增加4000攻击、500破击。战斗时，提升绝招熟练度20级。" /*[2]*/, 7 /*[3]*/, 17 /*[4]*/, 9 /*[5]*/, 0 /*[6]*/, 4000 /*[7]*/, 0 /*[8]*/, 20 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 500 /*[17]*/, 0 /*[18]*/, 0 /*[19]*/, 0 /*[20]*/],
		[13 /*[0]*/, "夺命双刀" /*[1]*/, "南宫白夜与袁铭志同时上阵时，各增加1000破击、500必杀。战斗时，提升绝招熟练度50级。" /*[2]*/, 7 /*[3]*/, 18 /*[4]*/, 3 /*[5]*/, 0 /*[6]*/, 0 /*[7]*/, 0 /*[8]*/, 50 /*[9]*/, 0 /*[10]*/, 0 /*[11]*/, 0 /*[12]*/, 0 /*[13]*/, 0 /*[14]*/, 0 /*[15]*/, 0 /*[16]*/, 1000 /*[17]*/, 0 /*[18]*/, 500 /*[19]*/, 0 /*[20]*/]
	],
};
