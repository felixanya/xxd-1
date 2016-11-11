<?php
include "skill_links.php";

$pconfig = array(
	'title'   => '主角招式',
	'table'   => 'skill',
	'links'   => $links,
	'pagesize' => 100000,
	
	'columns' => array(
		array('name' => 'name', 'text' => '绝招名称', 'width' => '80px'),
		array('name' => 'required_level', 'text' => '角色等级', 'width' => '60px'),
		array('name' => 'required_fame_level', 'text' => '声望等级', 'width' => '60px'),
	    array('name' => 'required_friendship_level', 'text' => '羁绊等级', 'width' => '60px'),
		array('name' => 'child_kind', 'text' => '绝招类型', 'width' => '60px'),
		array('name' => 'child_type', 'text' => '绝招作用', 'width' => '60px'),
		array('name' => 'quality', 'text' => '绝招品质', 'width' => '60px'),
		array('name' => 'sign', 'text' => '资源标识', 'width' => '100px'),
		array('name' => 'music_sign', 'text' => '音乐资源标识', 'width' => '100px'),
		array('name' => 'jump_attack', 'text' => '是否跳跃攻击', 'width' => '90px'),
		array('name' => 'auto_learn_level', 'text' => '是否达到等级直接学习', 'width' => '100px'),
		array('name' => 'parent_skill_id', 'text' => '父绝招', 'width' => '60px'),
        array('name' => 'cheat_id', 'text' => '学习所需秘籍', 'width' => '90px'),
		array('name' => 'display_param', 'text' => '显示参数', 'width' => '60px'),
		array('name' => 'target', 'text' => '特效展现方式', 'width' => '60px'),
	),
	
	'opera' => array(
		array('type' => 'link', 'text' => '绝招配置', 'render' => 'skill_opera'),
	    array('type' => 'link', 'text' => '绝招描述', 'render' => 'skill_info'),
	),
	
	'js' 			=> 'jsFunction',
	'where' 		=> 'sql_where',
	'insert'  		=> 'sql_insert',
	'not_delete' => true,
	'foot'          => 'foot',
);
?>
