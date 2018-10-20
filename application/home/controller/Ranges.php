<?php
namespace app\home\controller;
use think\Controller;
use think\Input;
use think\Db;
use think\Request;
class Ranges extends Common{
    public function _initialize(){
        parent::_initialize();
    }
    public function index(){		
       
	   return $this->fetch();
    }
	public function detail(){
		
	   return $this->fetch();
    }
}