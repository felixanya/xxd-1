<?php

$links = array(	
	array('text' => '物品类型', 'id' => 'item_type'),
	array('text' => '战斗道具', 'id' => 'item_battle'),
	array('text' => '消耗道具', 'id' => 'item_costprops'),
	array('text' => '道具', 'id' => 'item_props'),
	array('text' => '材料', 'id' => 'item_stuff'),
	array('text' => '魂侍碎片', 'id' => 'item_ghost_fragment'),
	array('text' => '剑心碎片', 'id' => 'item_sword_soul_fragment'),
	array('text' => '灵宠契约球', 'id' => 'item_battle_pet'),
	array('text' => '礼包', 'id' => 'item_box'),
	array('text' => '资源', 'id' => 'item_resource'),
	array('text' => '时装', 'id' => 'item_fashion'),
	array('text' => '武功秘籍', 'id' => 'item_skill'),
	array('text' => '喜好品', 'id' => 'item_preference'),
	array('text' => '任务物品', 'id' => 'item_quest_collection'),
	array('text' => '龙珠', 'id' => 'item_dragon_ball'),
	array('text' => '秘宝', 'id' => 'item_reflect'),
	array('text' => '材料和功能道具', 'id' => 'item_material'),
	array('text' => '活动道具', 'id' => 'item_event'),
	//TODO 弄个分隔符号在这里
	//
	array('text' => '物品兑换', 'id' => 'item_exchange'),
	array('text' => '商品限购', 'id' => 'item_purchase_limit'),
	array('text' => '物品产出', 'id' => 'resource_origin'),
	array('text' => '越南龙珠兑换列表', 'id' => 'item_vn_dragon_ball'),
	
);

/* 品质 */
$all_quality = array(
	0 => '绿', 
	1 => '蓝',
	2 => '紫',
	3 => '金',
	4 => '橙',
);

/* 触发功能 */
$all_act = array(
	0 => '无',
	1 => '开启聚宝盆',
);

// 装备等级类型
$equipmentLevelType = array(
	1 => '鹰扬',
	2 => '朱雀',
	3 => '白虎',
	4 => '倚天',
	5 => '青龙',
	6 => '天罡',
	7 => '无',
);

// 指向面板
// 需要同时修改 database/config/item.php
$panels = array(
	0 => '无',      // NULL
	1 => '境界升级', // REALM
	2 => '魂侍兑换', // GHOST_EXCHANGE
	3 => '魂侍培养', // GHOST_TRAIN
	4 => '剑心兑换', // SWORD_SOUL_EXCHANGE
	5 => '灵宠信息', // PANEL_BATTLE_PET_INFO
	6 => '魂侍首页', // GHOST
	7 => '灵宠培养', // PET_GRID_UPGRADE
	8 => '阵印',    // TOTEM
	9 => '觉醒',     // AWAKEN
);

//资源产出
//需要同时修改 database/config/item.php
$origin_source_type = array(
	0 => '不显示',
	1 => '主线关卡',
	2 => '其他系统 ',
	3 => '全部 ',
);

?>
