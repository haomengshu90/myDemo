<?php
    /*接收客户端提交的搜索关键字,返回title中保函此关键字的内容*/
	header("Content-Type:application/json");
	$arr=[
		['title'=>'麦片'],
		['title'=>'麦肯齐'],
		['title'=>'麦卢卡蜂蜜'],
		['title'=>'麦秒立'],
		['title'=>'麦片澳大利亚'],
		['title'=>'麦肯齐学饮杯'],
		['title'=>'麦肯齐餐具'],
		['title'=>'麦圈'],
		['title'=>'麦片低脂'],
		['title'=>'麦片 宝宝']
	];
	$k=$_REQUEST['text'];/*获取查询关键字*/
	$shuchu=[];/*查询结果,把多个结果放到这个数组里面*/
	foreach($arr as $key){
		if(strpos($key['title'],$k)!==FALSE){
			array_push($shuchu,$key['title']);
		}
	}
	$str=json_encode($shuchu);
	echo $str;
?>