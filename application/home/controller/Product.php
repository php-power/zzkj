<?php
namespace app\home\controller;
use think\Controller;
use think\Input;
use think\Db;
use think\Request;
class Product extends Common{
    public function _initialize(){
        parent::_initialize();
    }
    public function index(){		
        //首页推荐		
        $list = db('product')->where($where)->order('sort asc,addtime desc')->limit('15')->select();
        foreach ($list as $k=>$v){
            $title_style = explode(';',$v['title_style']);
            $list[$k]['title_color'] = $title_style[0];
            $list[$k]['title_weight'] = $title_style[1];
            $list[$k]['title_thumb'] = __HOME__.'/images/portfolio-thumb/p'.($k+1).'.jpg';
        }
        $this->assign('list',$list);
		$product_list = db('product')->where(array('open'=>1))->order('sort asc,id desc')->select();
		$this->assign('product_list',$product_list);
	   return $this->fetch();
    }
	public function detail(){
		$where['id'] = input('id');
		$product_one = db('product')->where($where)->find();
		$this->assign('product_one',$product_one);
	   return $this->fetch();
    }
	
}