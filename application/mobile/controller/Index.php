<?php
namespace app\mobile\controller;
use clt\Lunar;

class Index extends Common{
    public function initialize(){
        parent::initialize();
    }
    public function index(){
        return view();
    }
	    public function creatOrder(){
					//产品
        $productLists =db('products')->where(['open'=>1])->order('sort asc,id desc')->select();
        $this->assign('productLists', $productLists);
        return view("creatOrder");
    }
    public function senmsg(){
        $data = input('post.');
        $data['addtime'] = time();
        $data['ip'] = getIp();
        db('message')->insert($data);
        $result['status'] = 1;
        return $result;
    }	
    public function senorder(){
        $data = input('post.');
		$tel=input('post.tel');
		$name=input('post.name');
		$address=input('post.address');
		$contents=input('post.content');
		$product_name=input('post.product_name');
		$pay_type=input('post.pay_type');
        $data['addtime'] = time();
        $data['ip'] = getIp();
		$data['formtype'] = "手机";
        $id=db('order')->insertGetId($data);   
		$arr = db('config')->where('inc_type','smtp')->select();
        $config = convert_arr_kv($arr,'name','value');
		$sender=$config['test_eamil'];
        $content = "提醒您发单了.订单编号: $id,客户姓名：$name ,联系方式：$tel ,收货地址：$address ,购买产品:$product_name ,付款方式：$pay_type ,留言：$contents .";
        $send = send_email($sender, '订单提醒',$content);
        $result['status'] = 1;
        return $result;
    }
    public function userdetail(){

       return view();
    }	
    public function ceshi(){

       return view();
    }		
}