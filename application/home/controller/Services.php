<?php
namespace app\home\controller;
use think\Controller;
use think\Input;
use think\Db;
use think\Request;
class Services extends Common{
    public function _initialize(){
        parent::_initialize();
    }
    public function index(){		
      
	   return $this->fetch();
    }
	public function detail(){
		 $list = db('ranges')->where(array('open'=>1))->order('sort asc,id desc')->limit('10')->select();			
        $this->assign('list',$list);
	   return $this->fetch();
    }
}