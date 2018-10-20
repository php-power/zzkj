<?php
namespace app\home\controller;
use think\Controller;
use think\Input;
use think\Db;
use think\Paginator;
use think\Request;
class News extends Common{
    public function _initialize(){
        parent::_initialize();
    }
    public function index(){		
	    $news_list=Db::name('news')
            ->where(array('open'=>1))
            ->order('sort asc,id desc')
            ->paginate(5);
        $page = $news_list->render();		
        $news_list = $news_list->toArray();               
		$this->assign('page', $page);
		$this->assign('news_list',$news_list['data']);
	   return $this->fetch();
    }
	public function detail(){
		$where['id'] = input('id');
		$news_one = db('news')->where($where)->find();
		$this->assign('news_one',$news_one);
	   return $this->fetch();
    }
}