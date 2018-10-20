<?php
namespace app\home\controller;
use think\Controller;
use think\Input;
use think\Db;
use think\Request;
class Contact extends Common{
    public function _initialize(){
        parent::_initialize();
    }
    public function index(){		
		$active_list = db('activity')->where(array('open'=>1))->order('sort asc,id desc')->select();
		$this->assign('active_list',$active_list);
	   return $this->fetch();
    }
	public function detail(){
		$where['ad_id'] = input('ad_id');
		$product_one = db('product')->where($where)->find();
		$this->assign('product_one',$product_one);
	   return $this->fetch();
    }
}