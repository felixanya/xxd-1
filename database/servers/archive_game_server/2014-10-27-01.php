<?php

db_execute($db, "

CREATE TABLE IF NOT EXISTS `events_physical_awards` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `require_physical` smallint(6) NOT NULL COMMENT '需要活跃度',
  `ingot` smallint(6) NOT NULL COMMENT '奖励元宝',
  `coins` int(11) NOT NULL COMMENT '奖励铜钱',
  `item1_id` smallint(6) DEFAULT '0' COMMENT '物品1',
  `item1_num` smallint(6) DEFAULT '0' COMMENT '物品1数量',
  `item2_id` smallint(6) DEFAULT '0' COMMENT '物品2',
  `item2_num` smallint(6) DEFAULT '0' COMMENT '物品2数量',
  `item3_id` smallint(6) DEFAULT '0' COMMENT '物品3',
  `item3_num` smallint(6) DEFAULT '0' COMMENT '物品3数量',
  `item4_id` smallint(6) DEFAULT '0' COMMENT '物品4',
  `item4_num` smallint(6) DEFAULT '0' COMMENT '物品4数量',
  `item5_id` smallint(6) DEFAULT '0' COMMENT '物品5',
  `item5_num` smallint(6) DEFAULT '0' COMMENT '物品5数量',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COMMENT='活跃度活动运营活动';

");

?>